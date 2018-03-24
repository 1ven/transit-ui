// Remove REQUEST content-type specific code, have specific functions, like `requestJson`, `requestForm` in the application/utils instead
export default ({ url, method, body, headers: h }) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    const headers = Object.assign({}, h, {
      Accept: "application/json"
    });

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 0) {
          reject(new ConnectionError());
          return;
        }

        const responseBody = xhr.responseText && JSON.parse(xhr.responseText);

        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(responseBody);
        } else {
          reject(new HttpError(responseBody));
        }
      }
    };

    xhr.ontimeout = () => {
      reject(new TimeoutError());
    };

    xhr.open(method.toUpperCase(), url);

    xhr.withCredentials = true;

    if (headers) {
      for (let key of Object.keys(headers)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }

    xhr.send(body);
  });
};

export class ConnectionError {}

export class TimeoutError {}

export class HttpError {
  constructor(data) {
    this.data = data;
  }
}
