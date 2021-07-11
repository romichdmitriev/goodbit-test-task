const deletePostRequest = (postId) => {
  console.log(postId);
  return fetch(`https://my-json-server.typicode.com/romichdmitriev/goodbit-test-task/posts/${postId}`, {
    method: 'DELETE',
  });
};

export default deletePostRequest;
