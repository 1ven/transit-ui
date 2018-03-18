import React from "react";
import { withState } from "recompose";

export default (stateKey, updaterKey, initial) => {
  /**
   * If local storage is disabled in user browser - using regular `withState` hoc as a fallback.
   */
  if (!localStorage) {
    return withState(stateKey, updaterKey, initial);
  }

  const state = getStorageValue(stateKey) || initial;

  return Component =>
    class extends React.Component {
      state = {
        value: state
      };

      updateState(value) {
        setStorageValue(stateKey, value);

        this.setState({
          value
        });
      }

      render() {
        return (
          <Component
            {...{
              ...this.props,
              [stateKey]: this.state.value,
              [updaterKey]: this.updateState.bind(this)
            }}
          />
        );
      }
    };
};

const getStorageValue = key => {
  const value = localStorage.getItem(key);

  if (typeof value === "undefined") {
    return void 0;
  }

  return JSON.parse(value);
};

const setStorageValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
