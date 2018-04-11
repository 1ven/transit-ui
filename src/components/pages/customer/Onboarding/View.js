import React from "react";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import paths from "core/application/paths";
import { Label, Row } from "components/generic/form/service";
import { Input } from "components/generic/form/elements";
import { Centered } from "components/generic/layout";
import { Header, Footer } from "components/common/sign-up";

export default ({ validate, onboardingRequest }) => (
  <Centered>
    <Form
      onSubmit={onboardingRequest.fetch}
      validate={validate}
      render={({ handleSubmit, ...form }) => (
        <form onSubmit={handleSubmit}>
          <Header
            stepsLength={2}
            activeStep={1}
            title="Step 2 - Onboarding"
            description="Enter your profile info"
          />
          <div>
            <Row>
              <Label title="First name">
                <Field
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  component={Input}
                />
              </Label>
            </Row>
            <Row>
              <Label title="Last name">
                <Field
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  component={Input}
                />
              </Label>
            </Row>
          </div>
          <Footer
            form={form}
            isSubmitting={onboardingRequest.isFetching}
            backLink={<Link to={paths.user.signIn}>Back to login</Link>}
          />
        </form>
      )}
    />
  </Centered>
);
