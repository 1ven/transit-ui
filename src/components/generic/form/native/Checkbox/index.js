import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs({
  className: "br1 pointer"
})`
  appearance: none;
  outline: none;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: relative;
  background-color: #fff;
  flex-shrink: 0;
  &:checked:before {
    content: "check";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #19a974;
    font-family: "Material Icons";
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
  }
`;

export default ({
  name,
  checked,
  value,
  onChange,
  onBlur,
  title,
  disabled
}) => (
  <label className="flex f6 fw5 pointer">
    <Input
      name={name}
      checked={checked}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type="checkbox"
      disabled={disabled}
    />
    <div className="ml1">{title}</div>
  </label>
);
