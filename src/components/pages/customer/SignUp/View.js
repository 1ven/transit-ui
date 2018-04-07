import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { Label } from "components/generic/form/service";
import { Input } from "components/generic/form/elements";
import { Button } from "components/generic/kit";
import { Steps } from "components/common/sign-up";

export default ({ validate, signUp = {} }) => (
  <Wrap className="pa3 flex flex-column items-center">
    <Form
      onSubmit={console.log}
      validate={validate}
      render={({ handleSubmit, invalid, submitFailed, pristine }) => (
        <form onSubmit={handleSubmit} className="mw6 w-100">
          <div className="flex mb4">
            <Steps length={2} active={0} />
          </div>
          <div className="mb2 f3">Step 1 - Customer sign up</div>
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
          <div className="mb2">
            <Label title="Password">
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                component={Input}
              />
            </Label>
          </div>
          <div className="mb3">
            <Label title="Password confirmation">
              <Field
                type="password"
                name="confirmation"
                placeholder="Enter your password confirmation"
                component={Input}
              />
            </Label>
          </div>
          <div className="flex items-center">
            <Button
              color={
                pristine ? "gray" : submitFailed && invalid ? "red" : "green"
              }
            >
              {signUp.isFetching ? "Please, wait..." : "Create account"}
            </Button>
            <i
              style={{
                visibility: submitFailed && invalid ? "visible" : "hidden"
              }}
              className="material-icons ml2 red"
            >
              error_outline
            </i>
          </div>
        </form>
      )}
    />
  </Wrap>
);

const Wrap = styled.div`
  margin-top: 25vh;
`;
