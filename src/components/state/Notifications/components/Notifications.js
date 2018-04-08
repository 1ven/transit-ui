import React from "react";
import styled from "styled-components";
import { spring, TransitionMotion } from "react-motion";

export default ({ items, onItemClick }) => (
  <TransitionMotion
    willEnter={() => ({
      opacity: 0
    })}
    willLeave={() => ({ opacity: spring(0) })}
    styles={items.map(item => ({
      key: item.id.toString(),
      data: item,
      style: {
        opacity: spring(1)
      }
    }))}
  >
    {interpolatedStyles =>
      !!interpolatedStyles.length && (
        <div className="mt3 fixed top-0 left-0 flex flex-column items-center w-100">
          {interpolatedStyles.map(item => (
            <Item
              onClick={() => onItemClick(item.data.id)}
              key={item.key}
              style={{ ...item.style }}
            >
              {item.data.message}
            </Item>
          ))}
        </div>
      )
    }
  </TransitionMotion>
);

const Item = styled.div.attrs({
  className: "flex f6 pv2 ph3 br2 bg-red white mw6 w-100 mb3 pointer"
})`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  &:last-child {
    margin-bottom: 0;
  }
`;
