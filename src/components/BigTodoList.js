import React, { useState } from 'react';
import { createData } from '../utils/helpers';

class ListItem extends React.Component {
  render() {
    return <li>{this.props.todo}</li>;
  }
}

// TODO: Profile big todo list using profiler
// TODO: Profile using loading a todo list
// TODO: Profile by creating a todo list
function BigTodoList() {
  const [items, setItems] = useState([]);

  const loadTodos = () => {
    fetch('/todos.json')
      .then((response) => response.json())
      .then((data) => setItems(data.todos));
  };

  const createTodos = () => {
    const data = createData();
    setItems(data);
  };

  return (
    <div className="big-todo-list-container">
      <h1>Big todo list</h1>

      {items.length ? (
        <ul>
          {items.map((item, index) => (
            <ListItem key={`todo-item-${index}`} todo={item} />
          ))}
        </ul>
      ) : (
        <button onClick={loadTodos}>Load Todos</button>
      )}
    </div>
  );
}

export default BigTodoList;
