import { requestJson, requestGeneric } from "core/application/utils";

export const signIn = ({ email, password }) =>
  requestJson({
    path: "/auth/sign-in/local",
    method: "POST",
    body: {
      email,
      password
    }
  });

export const signOut = () =>
  requestGeneric({
    path: "/auth/sign-out",
    method: "POST"
  });
