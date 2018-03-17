import { requestJson, requestGeneric } from "application/utils";

export const signIn = (email, password) =>
  requestJson({
    path: "/auth/sign-in/local",
    body: {
      email,
      password
    }
  });

export const signOut = () =>
  requestGeneric({
    path: "/auth/sign-out"
  });
