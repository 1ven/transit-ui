import { requestJson } from "core/application/utils";

export const onboarding = ({ first_name, last_name }) =>
  requestJson({
    path: "/customers",
    method: "POST",
    body: {
      first_name,
      last_name
    }
  });
