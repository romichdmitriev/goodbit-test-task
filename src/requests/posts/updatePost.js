const updatePostRequest = (post) => {
  return fetch(`https://my-json-server.typicode.com/romichdmitriev/goodbit-test-task/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default updatePostRequest;
