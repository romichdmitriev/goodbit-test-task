const addCommentRequest = (comment) => {
  return fetch('https://my-json-server.typicode.com/romichdmitriev/goodbit-test-task/comments', {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default addCommentRequest;
