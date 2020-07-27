import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, Button } from 'semantic-ui-react';
import { actDeleteItem } from '../../containers/ListPosts/actions';
import FormAddEditPost from '../AddEditPost/FormAddEditPost';

function PostItem(props) {
  const [modalShow, setModalShow] = useState(false);
  const item = props.post;

  const handleDelete = async () => {
    props.deleteItemPost(item);
  };

  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>{item.id}</Table.Cell>
        <Table.Cell>
          <Link to={`post-details/${item.id}`}>{item.title}</Link>
        </Table.Cell>
        <Table.Cell>
          <Button color="teal" onClick={() => setModalShow(true)}>
            Edit
          </Button>
          <FormAddEditPost
            show={modalShow}
            onHide={() => setModalShow(false)}
            post={item}
          />
          <Button onClick={handleDelete} color="red">
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
}
PostItem.propTypes = {
  post: PropTypes.object,
  deleteItemPost: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  deleteItemPost: item => dispatch(actDeleteItem(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(PostItem);
