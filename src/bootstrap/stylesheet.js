import { injectGlobal } from "styled-components";

// TODO: move to core/application?
export const init = () => injectGlobal`
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;
