import React from "react";
import { Formik, Form } from "formik";
import { Label } from "components/common/form/service";
import { Input } from "components/common/form/formik";
import { Button } from "components/common/kit";

export default ({ initialValues, onSubmit }) => (
  <div className="flex items-center justify-center min-vh-100 pv3">
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
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
          <Button>Sign in</Button>
        </Form>
      )}
    />
  </div>
);
