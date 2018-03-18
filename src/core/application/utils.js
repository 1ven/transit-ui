import request from "core/packages/request";

export const requestGeneric = ({ path, ...rest }) =>
  request({
    url: process.env.REACT_APP_API + path,
    ...rest
  });

export const requestJson = ({ body, headers, ...rest }) =>
  requestGeneric({
    body: JSON.stringify(body),
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    ...rest
  });
