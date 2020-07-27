import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPosts = state => state.posts || initialState;

const makeSelectPosts = () =>
  createSelector(
    selectPosts,
    postsState => postsState.posts,
  );

const makeGetItem = () =>
  createSelector(
    selectPosts,
    postsState => postsState.item,
  );

const getIndexItem = state => {
  const { id } = state.posts.item;
  const { posts } = state.posts;
  const index = posts.map(post => post.id).indexOf(id);
  return index;
};
const makeSelectIndex = () =>
  createSelector(
    getIndexItem,
    indexState => indexState,
  );

const editItem = state => {
  const { item } = state.posts;
  const { posts } = state.posts;
  const index = posts.map(post => post.id).indexOf(item.id);
  posts[index] = item;
  return posts;
};
const makeEditItem = () =>
  createSelector(
    editItem,
    postsState => postsState,
  );

export {
  selectPosts,
  makeSelectPosts,
  makeGetItem,
  makeSelectIndex,
  getIndexItem,
  makeEditItem,
  editItem,
};
