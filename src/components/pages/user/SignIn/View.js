import React from "react";
import { Formik, Form } from "formik";
import { Label } from "components/common/form/service";
import { Input } from "components/common/form/formik";
import { Button } from "components/common/kit";

export default ({ initialValues, signIn }) => (
  <div className="flex items-center justify-center min-vh-100 pa3">
    <Formik
      initialValues={initialValues}
      onSubmit={signIn.fetch}
      render={() => (
        <Form className="mw6 w-100">
          <div className="mb3 f3">Sign in to the application</div>
          <div className="mb2">
            <Label title="Email address">
              <Input
                type="text"
                name="email"
                placeholder="Enter your email address"
              />
            </Label>
          </div>
          <div className="mb3">
            <Label title="Password">
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </Label>
          </div>
          <div className="flex">
            <Button>{signIn.isFetching ? "Please, wait..." : "Sign in"}</Button>
            <a className="ml-auto f6 blue" href="#">
              Forgot password
            </a>
          </div>
        </Form>
      )}
    />
  </div>
);
