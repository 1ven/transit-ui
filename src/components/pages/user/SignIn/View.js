import React from "react";
import { Formik, Form } from "formik";
import { Label } from "components/generic/form/service";
import { Input, Checkbox } from "components/generic/form/formik";
import { Button } from "components/generic/kit";
import * as userState from "components/state/User";

export default () => (
  <userState.Consumer>
    {({ signIn }) => (
      <div className="flex items-center justify-center min-vh-100 pa3">
        <Formik
          initialValues={{
            email: "",
            password: "",
            remember: true
          }}
          onSubmit={signIn.fetch}
          render={() => (
            <Form className="mw6 w-100">
              <div className="mb2 f3">Sign in to the application</div>
              <div className="mb4 f6">Enter your credentials</div>
              <div className="mb2">
                <Label title="Email address">
                  <Input
                    type="text"
                    name="email"
                    placeholder="Enter your email address"
                  />
                </Label>
              </div>
              <div className="mb4">
                <Label title="Password">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </Label>
              </div>
              <div className="flex items-center mb3">
                <Checkbox name="remember" title="Remember password" />
                <a className="ml-auto f6 green" href="#">
                  Forgot password
                </a>
              </div>
              <div className="flex mb2">
                <Button>
                  {signIn.isFetching ? "Please, wait..." : "Sign in"}
                </Button>
              </div>
              <div className="f6">
                Don't have an account? Sign up as a
                <span className="fw6 underline"> customer</span> or
                <span className="fw6 underline"> driver</span>.
              </div>
            </Form>
          )}
        />
      </div>
    )}
  </userState.Consumer>
);
