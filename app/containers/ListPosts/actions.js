import {
  FETCH_LISTPOSTS,
  FETCH_LISTPOSTS_SUCCESS,
  FETCH_LISTPOSTS_FAIL,
  ADD_LISTPOSTS,
  DELETE_LISTPOSTS,
  EDIT_LISTPOSTS,
} from './constants';

export function actGetListPost() {
  return {
    type: FETCH_LISTPOSTS,
  };
}

export function actGetListPostSuccess(posts) {
  return {
    type: FETCH_LISTPOSTS_SUCCESS,
    posts,
  };
}

export function actGetListPostFail(error) {
  return {
    type: FETCH_LISTPOSTS_FAIL,
    error,
  };
}

export function actAddItem(item) {
  return {
    type: ADD_LISTPOSTS,
    item,
  };
}
export function actDeleteItem(item) {
  return {
    type: DELETE_LISTPOSTS,
    item,
  };
}

export function actEdititem(item) {
  return {
    type: EDIT_LISTPOSTS,
    item,
  };
}
