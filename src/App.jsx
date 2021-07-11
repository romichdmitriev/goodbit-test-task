import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import PostFeedPage from './pages/PostFeed/PostFeed';
import PostDescriptionPage from './pages/PostDescription/postDescription';

const App = () => {
  const posts = useSelector((state) => state.posts.items);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/posts" component={PostFeedPage} />
          <Route exact path={!posts.length ? '/posts' : '/posts/:id'}>
            <PostDescriptionPage />
          </Route>

          <Redirect to="/posts" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
