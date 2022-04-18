import React from 'react';

const SuspendedList = React.lazy(() => import("./SimpleTodoList"));

// TODO: Show suspended component using Components tab
function SuspendedTodoList() {
  return (
    <div className="suspended-todo-list-container">
      <React.Suspense fallback="Loading...">
        <SuspendedList />
      </React.Suspense>
    </div>
  );
}

export default SuspendedTodoList;
