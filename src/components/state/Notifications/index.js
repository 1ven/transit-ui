import React from "react";
import { compose, withState, withHandlers } from "recompose";
import Notifications from "./components/Notifications";
import { Provider } from "./context";

export default compose(
  withState("counter", "setCounter", 0),
  withState("notifications", "setNotifications", []),
  withHandlers({
    remove: props => id => {
      props.setNotifications(props.notifications.filter(n => n.id !== id));
    }
  }),
  withHandlers({
    add: props => (message, timeout = 2000) => {
      const id = props.counter;

      setTimeout(() => {
        props.remove(id);
      }, timeout);

      props.setCounter(id + 1);
      props.setNotifications([...props.notifications, { id, message }]);
    }
  })
)(({ notifications, add, remove, children }) => (
  <Provider
    value={{
      add,
      remove
    }}
  >
    {children}
    <Notifications items={notifications} onItemClick={remove} />
  </Provider>
));
