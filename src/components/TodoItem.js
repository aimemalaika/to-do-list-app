import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

class TodoItem extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const viewMode = {};
    const editMode = {};
    const { editing } = this.state;
    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    const {
      todo, handleChangeProps, deleteTodoProps, setUpdate,
    } = this.props;
    const { id, title, completed } = todo;
    const clss = completed ? styles.completedStyle : 'normal';
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input className={styles.checkbox} type="checkbox" onChange={() => { handleChangeProps(id); }} checked={completed} />
          <span className={clss}>
            {title}
          </span>
          <button type="button" onClick={() => { deleteTodoProps(todo.id); }}>Delete</button>
        </div>
        <input
          style={editMode}
          type="text"
          className={styles.textInput}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
