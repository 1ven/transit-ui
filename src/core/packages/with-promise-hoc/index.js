import { withState, compose, mapProps } from "recompose";
import { identity } from "ramda";

export default (fn, key, propsToMiddleware = () => identity) =>
  compose(
    withState(key, "updateState", {}),
    mapProps(({ updateState, ...props }) => {
      return {
        ...props,
        [key]: {
          ...props[key],
          // Use curryN, relying on `fn.length`?
          fetch: propsToMiddleware(props)(async (...args) => {
            // TODO: move to a middleware and apply it by default
            updateState(state => ({
              ...state,
              isFetching: true
            }));
            try {
              const data = await fn(...args);
              updateState(state => ({
                ...state,
                isFetching: false,
                lastUpdated: Date.now(),
                error: void 0,
                data
              }));
              return data;
            } catch (err) {
              updateState(state => ({
                ...state,
                isFetching: false,
                error: err
              }));
              throw err;
            }
          })
        }
      };
    })
  );
