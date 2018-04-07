import yup from "yup";
import { assocPath } from "ramda";

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
