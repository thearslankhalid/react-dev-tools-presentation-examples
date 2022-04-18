import React from 'react';
import './App.css';
import SimpleTodoList from './components/SimpleTodoList';
import BigTodoList from './components/BigTodoList';
import WindowedTodoList from './components/WindowedTodoList';
import SuspendedTodoList from './components/SuspendedTodoList';

function App() {
  return (
    <div className="container">
      <SuspendedTodoList />
      {/* <SimpleTodoList /> */}
      {/* <BigTodoList /> */}
      {/* <WindowedTodoList /> */}
    </div>
  );
}

export default App;
