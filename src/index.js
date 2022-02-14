import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoContainer from './TodoContainer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
