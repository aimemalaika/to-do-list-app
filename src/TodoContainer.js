import React from 'react';
import Header from './components/Header';
import TodosList from './components/TodosList';

class TodoContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <Header />
        <TodosList todos={todos} />
      </div>
    );
  }
}
export default TodoContainer;
