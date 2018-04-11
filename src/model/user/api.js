import { requestJson, requestGeneric } from "core/application/utils";

export const fetchProfile = () =>
  requestJson({
    path: "/self",
    method: "GET"
  });

export const signIn = ({ email, password }) =>
  requestJson({
    path: "/auth/local/sign-in",
    method: "POST",
    body: {
      email,
      password
    }
  });

export const signUp = (role, { email, password, confirmation }) =>
  requestJson({
    path: "/users",
    method: "POST",
    body: {
      email,
      password,
      confirmation,
      role
    }
  });

export const signOut = () =>
  requestGeneric({
    path: "/auth/sign-out",
    method: "POST"
  });
