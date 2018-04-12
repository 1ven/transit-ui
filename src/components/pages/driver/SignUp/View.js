import React from "react";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import paths from "core/application/paths";
import { Label, Row } from "components/generic/form/service";
import { Input } from "components/generic/form/elements";
import { Centered } from "components/generic/layout";
import { Header, Footer } from "components/common/sign-up";

export default ({ signUp }) => (
  <Centered>
    <Form
      onSubmit={data => signUp.fetch("driver", data)}
      render={({ handleSubmit, ...form }) => (
        <form onSubmit={handleSubmit}>
          <Header
            stepsLength={3}
            activeStep={0}
            title="Step 1 - Driver sign up"
            description="Enter your credentials"
          />
          <div>
            <Row>
              <Label title="Email address">
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  component={Input}
                />
              </Label>
            </Row>
            <Row>
              <Label title="Password">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  component={Input}
                />
              </Label>
            </Row>
            <Row>
              <Label title="Password confirmation">
                <Field
                  type="password"
                  name="confirmation"
                  placeholder="Enter your password confirmation"
                  component={Input}
                />
              </Label>
            </Row>
          </div>
          <Footer
            form={form}
            isSubmitting={signUp.isFetching}
            backLink={<Link to={paths.user.signIn}>Back to login</Link>}
          />
        </form>
      )}
    />
  </Centered>
);
