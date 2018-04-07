import React from "react";
import styled from "styled-components";

export default ({ children }) => (
  <Button className="btn input-reset white dib b--none br2 lh-copy outline-0 ph5 pv2 f6 fw1 bg-green pointer">
    {children}
  </Button>
);

const Button = styled.button`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
  &:active {
    transform: translateY(1px);
  }
`;
