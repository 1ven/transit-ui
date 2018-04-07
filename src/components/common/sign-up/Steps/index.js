import React from "react";
import styled from "styled-components";
import { times } from "ramda";

export default ({ length, active }) => (
  <div className="flex">
    {times(
      i => (
        <Item
          className="w2 h2 flex items-center justify-center br-pill fw6"
          isCompleted={i < active}
          isActive={i === active}
          isDisabled={i > active}
          key={i}
        >
          {i + 1}
        </Item>
      ),
      length
    )}
  </div>
);

const Item = styled.div`
  border: 2px solid transparent;
  margin-left: calc(3rem);
  position: relative;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0,0,0,0.15);
  &:before {
    content: "";
    width: 3rem;
    height: 3px;
    background-color: #19a974;
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(-3rem - 2px);
    margin: auto 0;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.15);
  }
  &:first-child {
    margin-left: 0;
    &:before {
      display: none;
    }
  }
  ${({ isCompleted }) =>
    isCompleted &&
    `
    background-color: #19a974;
    color: #fff;
  `}
  ${({ isActive }) =>
    isActive &&
    `
    border-color: #19a974;
    color: #19a974;
  `}
  ${({ isDisabled }) =>
    isDisabled &&
    `
    background-color: #cccccc;
    color: #fff;
    &:before {
      background-color: #ccc;
    }
  `};
`;
