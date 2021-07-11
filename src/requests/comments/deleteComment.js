const deleteCommentRequest = (commentId) => {
  return fetch(`https://my-json-server.typicode.com/romichdmitriev/goodbit-test-task/comments/${commentId}`, {
    method: 'DELETE',
  });
};

export default deleteCommentRequest;
