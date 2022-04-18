import React, { useState } from 'react';
import { List } from 'react-virtualized';

class ListItem extends React.PureComponent {
  render() {
    return <li style={this.props.style}>{this.props.todo}</li>;
  }
}

// TODO: Show performance improvements by using the windowing technique
function WindowedTodoList() {
  const [items, setItems] = useState([]);

  const rowRenderer = ({
    key,
    index,
    isScrolling,
    isVisible,
    style,
  }) => {
    return <ListItem key={key} todo={items[index]} style={style} />;
  };

  const loadTodos = () => {
    fetch('/todos.json')
      .then((response) => response.json())
      .then((data) => setItems(data.todos));
  };

  return (
    <div className="load-todo-list-container">
      <h1>Load todo list</h1>

      {items.length ? (
        <List
          width={500}
          height={500}
          rowCount={items.length}
          rowHeight={35}
          rowRenderer={rowRenderer}
        />
      ) : (
        <button onClick={loadTodos}>Load Todos</button>
      )}
    </div>
  );
}

export default WindowedTodoList;
