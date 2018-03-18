import { withState, compose, mapProps } from "recompose";

export default (fn, key) =>
  compose(
    withState(key, "updateState", {}),
    mapProps(({ updateState, ...props }) => ({
      ...props,
      [key]: {
        ...props[key],
        fetch: async (...args) => {
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
          } catch (err) {
            updateState(state => ({
              ...state,
              isFetching: false,
              error: err.data || err.message
            }));
          }
        }
      }
    }))
  );
