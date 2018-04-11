import React from "react";
import Steps from "./Steps";

export default ({ title, description, activeStep, stepsLength }) => (
  <React.Fragment>
    <div className="flex mb4">
      <Steps length={stepsLength} active={activeStep} />
    </div>
    <div className="mb2 f3">{title}</div>
    <div className="mb4 f6">{description}</div>
  </React.Fragment>
);
