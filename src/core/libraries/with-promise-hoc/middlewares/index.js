export const withSuccess = cb => next => async (...args) => {
  try {
    const result = await next(...args);
    cb(result);
    return result;
  } catch (err) {
    throw err;
  }
};

export const withFailure = cb => next => async (...args) => {
  try {
    return await next(...args);
  } catch (err) {
    cb(err);
  }
};
