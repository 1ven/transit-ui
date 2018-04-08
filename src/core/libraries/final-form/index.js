import yup from "yup";
import { assocPath } from "ramda";
import { ClientError } from "core/packages/request";

export const yupValidate = schema => values => {
  try {
    schema.validateSync(values, {
      strict: true,
      abortEarly: false
    });
    return {};
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      return err.inner.reduce(
        (acc, item) => assocPath(item.path.split("."), item.message, acc),
        {}
      );
    }
    throw err;
  }
};

export const withAsyncValidation = next => async (...args) => {
  try {
    return await next(...args);
  } catch (err) {
    if (err instanceof ClientError) {
      return err.data.fields;
    }
    throw err;
  }
};
