import * as request from "core/packages/request";

export const withSuccess = cb => next => async (...args) => {
  try {
    const result = await next(...args);
    cb(result);
    return result;
  } catch (err) {
    throw err;
  }
};

export const withClientErrorMessage = cb => next => async (...args) => {
  try {
    return await next(...args);
  } catch (err) {
    if (err instanceof request.ClientError && err.data.message) {
      return cb(err.data.message);
    }
    throw err;
  }
};

export const withServerError = cb => next => async (...args) => {
  try {
    return await next(...args);
  } catch (err) {
    if (err instanceof request.ConnectionError) {
      return cb("Connection error");
    }
    if (err instanceof request.TimeoutError) {
      return cb("Timeout error");
    }
    if (err instanceof request.ServerError) {
      return cb("Server error");
    }
    throw err;
  }
};
