import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.PureComponent {
  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    const { id, title, completed } = todo;
    return (
      <li className={styles.item}>
        <input className={styles.checkbox} type="checkbox" onChange={() => { handleChangeProps(id); }} checked={completed} />
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
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
