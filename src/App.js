import Counter from "./features/counter/Counter";
import AddTodo from "./features/todo/AddTodo";
import TodoList from "./features/todo/TodoList";

function App() {
  return (
    <div>
      <Counter/>
      <hr/>
      <div className="todoWrapper">
        <AddTodo/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
