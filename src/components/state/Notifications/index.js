import { createContext } from "react";
import { compose, withReducer, withStateHandlers } from "recompose";

const Context = createContext();

export default compose(
  withStateHandlers(
    {
      /**
       * Incremental couter of notifications id's.
       */
      counter: 0,
      notifications: []
    },
    {
      add: state => message => ({
        counter: state.counter + 1,
        notifications: [...state.notifications, { id: state.counter, message }]
      }),
      remove: state => id => ({
        notifications: state.notifications.filter(n => n.id !== id)
      })
    }
  )
)(({ notifications, add, close, children }) => (
  <Context.Provider
    value={{
      // notifications,
      add,
      close
    }}
  >
    {children}
    {notifications.length && (
      <div className="fixed t0 l0">
        {notifications.map(n => <div key={n.id}>{n.message}</div>)}
      </div>
    )}
  </Context.Provider>
));

export const Consumer = Context.Consumer;
