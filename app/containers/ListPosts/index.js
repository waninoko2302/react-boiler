import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Button, Table } from 'semantic-ui-react';
import AddButton from '../../components/AddButton';

import FormAddEditPost from '../../components/AddEditPost/FormAddEditPost';
import PostItem from '../../components/List/PostItem';
import { actGetListPost } from './actions';
import { makeSelectPosts } from './selectors';

function ListPosts({ getListPost, posts }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getListPost();
  }, []);

  let xPostItem = [];
  xPostItem = posts.map((post, i) => (
    <PostItem key={post.id} index={i} post={post} />
  ));

  return (
    <div>
      <AddButton>
        <Button onClick={() => setModalShow(true)} color="purple">
          Add Post
        </Button>
      </AddButton>
      <FormAddEditPost show={modalShow} onHide={() => setModalShow(false)} />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>STT</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {xPostItem}
      </Table>
    </div>
  );
}

ListPosts.propTypes = {
  getListPost: PropTypes.func,
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});
const mapDispatchToProps = dispatch => ({
  getListPost: () => {
    dispatch(actGetListPost());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPosts);
