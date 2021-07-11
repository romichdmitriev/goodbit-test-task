const updateCommentRequest = (comment) => {
  return fetch(`https://my-json-server.typicode.com/romichdmitriev/goodbit-test-task/posts/${comment.id}`, {
    method: 'PUT',
    body: JSON.stringify(comment),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default updateCommentRequest;
