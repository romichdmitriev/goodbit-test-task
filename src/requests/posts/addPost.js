const addPostRequest = (post) => {
  return fetch('https://my-json-server.typicode.com/romichdmitriev/goodbit-test-task/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addPostRequest;
