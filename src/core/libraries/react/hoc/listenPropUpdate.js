import { lifecycle } from "recompose";

export default (toProp, fn) =>
  lifecycle({
    componentDidMount() {
      fn(this.props);
    },
    componentWillReceiveProps(nextProps) {
      const value = toProp(this.props);
      const nextValue = toProp(nextProps);

      if (value !== nextValue) {
        fn(nextProps);
      }
    }
  });
