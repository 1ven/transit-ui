// Remove REQUEST content-type specific code, have specific functions, like `requestJson`, `requestForm` in the application/utils instead
export default ({ url, method, body, headers }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, {
        method,
        body,
        headers: {
          ...headers,
          Accept: "application/json"
        },
        credentials: "include"
      });
      const data = await response.text();

      if (response.status >= 400) {
        return reject({ type: "http", data: JSON.parse(data) });
      }

      resolve(data && JSON.parse(data));
    } catch (err) {
      reject({ type: "generic", data: err.message });
    }
  });
};
