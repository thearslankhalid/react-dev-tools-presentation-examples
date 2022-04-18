import React, { useState } from 'react';

// TODO: Convert to a Pure Component to avoid re-rendering
class ListItem extends React.Component {
  render() {
    return <li>{this.props.todo}</li>;
  }
}

// TODO: Show rendering issue without using a Pure Component
function SimpleTodoList() {
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (todo.length) {
      setItems([...items, todo]);
      setTodo('');
    }
  };

  return (
    <div className="simple-todo-list-container">
      <h1>Simple todo list</h1>

      <form onSubmit={addTodo}>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="What's on your mind..."
        />
        <button type="submit">Add todo</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <ListItem key={`todo-item-${index}`} todo={item} />
        ))}
      </ul>
    </div>
  );
}

export default SimpleTodoList;
