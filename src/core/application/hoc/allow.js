import { path, not } from "ramda";
import { compose, branch, renderNothing, lifecycle } from "recompose";
import { withPromise } from "core/application/hoc";
import { withConsumer, redirect } from "core/libraries/react/hoc";
import { withSuccess } from "core/libraries/with-promise-hoc/middlewares";
import paths from "core/application/paths";
import * as userState from "components/state/User/context";
import { fetchProfile } from "model/user/api";
import * as states from "model/user/utils/states";

const profileLoaded = ({ user }) =>
  !!user.profile.lastUpdated && !user.profile.error;

export default cond =>
  compose(
    withConsumer(userState.Consumer, "user"),
    branch(
      compose(not, path(["user", "isAuthenticated"])),
      redirect(paths.user.signIn)
    ),
    withConsumer(userState.Consumer, "user"),
    withPromise("profileRequest", fetchProfile, props =>
      withSuccess(props.user.successProfileFetch)
    ),
    lifecycle({
      componentDidMount() {
        const { user, profileRequest } = this.props;
        if (!user.profile) {
          profileRequest.fetch();
        }
      }
    }),
    branch(
      profileLoaded,
      branch(
        ({ profile }) => !cond(profile),
        redirect(({ profile }) => {
          // TODO: implement state machine?
          if (states.isSignedUpCustomer(profile)) {
            return paths.customer.onboarding;
          }
          if (states.isOnboardedCustomer(profile)) {
            return paths.customer.main;
          }
          // if (states.isSignedUpDriver(profile)) {
          //   return paths.driver.onboarding;
          // }
          // if (states.isOnboardedDriver(profile)) {
          //   return paths.driver.main;
          // }

          // TODO: handle default state
        })
      ),
      renderNothing
    )
  );
