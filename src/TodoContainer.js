import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import TodosList from './components/TodosList';
import InputTodo from './components/InputTodo';
import './TodoContainer.css';

class TodoContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    const { todos } = this.state;
    const newList = todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: newList,
    });
  };

  addTodoItem = (title) => {
    const { todos } = this.state;
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...todos, newTodo],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <Header className="inner" />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}
export default TodoContainer;
