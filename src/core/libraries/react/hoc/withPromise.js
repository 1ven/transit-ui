import { merge, identity } from "ramda";
import { withState, compose, mapProps } from "recompose";

export default (fn, key, propsToConfig) =>
  compose(
    withState(key, "updateState", {}),
    mapProps(({ updateState, ...props }) => {
      const config = merge(
        {
          onSuccess: identity,
          onFailure: identity
        },
        propsToConfig(props)
      );

      return {
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
              config.onSuccess(data);
            } catch (err) {
              updateState(state => ({
                ...state,
                isFetching: false,
                error: err.data || err.message
              }));
              config.onFailure(err);
            }
          }
        }
      };
    })
  );
