import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.PureComponent {
  render() {
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    return (
      <li>
        <input type="checkbox" onChange={() => { handleChangeProps(todo.id); }} checked={todo.completed} />
        {todo.title}
        <button type="button" onClick={() => { deleteTodoProps(todo.id); }}>Delete</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;