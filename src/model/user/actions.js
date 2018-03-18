export const SIGN_IN = "@model/user/sign-in";
export const SIGN_OUT = "@model/user/sign-out";

export const signIn = () => ({
  type: SIGN_IN
});

export const signOut = () => ({
  type: SIGN_OUT
});
