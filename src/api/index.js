const apiBase = "http://localhost:3001/api";
// const apiBase = '/api';

const callApi = (url, method = "GET", data) =>
  new Promise((resolve, reject) => {
    fetch(`${apiBase}${url}`)
      .then((data) => data.json())
      .then((data) => resolve({data}))
      .catch((err) => reject({err}));
  });

export default callApi;
