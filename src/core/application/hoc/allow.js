import { path, not } from "ramda";
import { compose, branch, renderNothing, lifecycle } from "recompose";
import { withPromise } from "core/application/hoc";
import { withConsumer, redirect } from "core/libraries/react/hoc";
import { withSuccess } from "core/libraries/with-promise-hoc/middlewares";
import * as paths from "core/application/paths";
import * as userState from "components/state/User/context";
import { fetchProfile } from "model/user/api";
import * as states from "model/user/utils/states";

export default cond =>
  compose(
    withConsumer(userState.Consumer, "user"),
    branch(
      compose(not, path(["user", "isAuthenticated"])),
      redirect(paths.user.signIn)
    ),
    withConsumer(userState.Consumer, "user"),
    withPromise(
      fetchProfile,
      "profileRequest",
      props => withSuccess(props.user.successProfileFetch)
      // TODO: handle token expiring and wrong tokens
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
      ({ user }) => !!user.profile,
      branch(
        ({ user }) => !cond(user.profile),
        redirect(({ user }) => {
          const { profile } = user;
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
