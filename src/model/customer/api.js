import { requestJson } from "core/application/utils";

export const signUp = ({ email, password, confirmation }) =>
  requestJson({
    path: "/users",
    method: "POST",
    body: {
      email,
      password,
      confirmation,
      role: "customer"
    }
  });
