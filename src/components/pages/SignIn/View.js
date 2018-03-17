import React from "react";
import { Input, Label } from "components/common/form";
import { Button } from "components/common/kit";

export default () => (
  <div className="flex items-center justify-center min-vh-100 pv3">
    <div className="mw6 w-100">
      <div className="mb3 f3">Sign in to the application</div>
      <div className="mb2">
        <Label title="Email address">
          <Input type="text" name="email" />
        </Label>
      </div>
      <div className="mb3">
        <Label title="Password">
          <Input type="password" name="password" />
        </Label>
      </div>
      <Button>Sign in</Button>
    </div>
  </div>
);
