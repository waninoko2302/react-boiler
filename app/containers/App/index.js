/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListPosts from 'containers/ListPosts/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ListPosts} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
