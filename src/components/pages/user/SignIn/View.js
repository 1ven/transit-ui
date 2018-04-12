import React from "react";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import * as paths from "core/application/paths";
import { Label } from "components/generic/form/service";
import { Input, Checkbox } from "components/generic/form/elements";
import { Button } from "components/generic/kit";

export default ({ signIn }) => (
  <div className="flex items-center justify-center min-vh-100 pa3">
    <Form
      onSubmit={signIn.fetch}
      initialValues={{
        remember: true
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="mw6 w-100">
          <div className="mb2 f3">Sign in to the application</div>
          <div className="mb4 f6">Enter your credentials</div>
          <div className="mb2">
            <Label title="Email address">
              <Field
                type="text"
                name="email"
                placeholder="Enter your email address"
                component={Input}
              />
            </Label>
          </div>
          <div className="mb4">
            <Label title="Password">
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                component={Input}
              />
            </Label>
          </div>
          <div className="flex items-center mb3">
            <Field
              name="remember"
              title="Remember password"
              component={Checkbox}
            />
            <a className="ml-auto f6 green" href="#">
              Forgot password
            </a>
          </div>
          <div className="flex mb2">
            <Button>{signIn.isFetching ? "Please, wait..." : "Sign in"}</Button>
          </div>
          <div className="f6">
            Don't have an account? Sign up as a
            <Link to={paths.customer.signUp} className="black fw6">
              {" "}
              customer
            </Link>{" "}
            or
            <Link to={paths.driver.signUp} className="black fw6">
              {" "}
              driver
            </Link>.
          </div>
        </form>
      )}
    />
  </div>
);
