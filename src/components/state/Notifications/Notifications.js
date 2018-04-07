import React from "react";
import styled from "styled-components";

export default ({ items, onItemClick }) =>
  !!items.length && (
    <div className="mt3 fixed top-0 left-0 flex flex-column items-center w-100">
      {items.map(n => (
        <Item onClick={() => onItemClick(n.id)} key={n.id}>
          {n.message}
        </Item>
      ))}
    </div>
  );

const Item = styled.div.attrs({
  className: "flex f6 pv2 ph3 br2 bg-red white mw6 w-100 mb3 pointer"
})`
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  &:last-child {
    margin-bottom: 0;
  }
`;
