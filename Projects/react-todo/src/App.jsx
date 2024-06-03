import Header from "./Components/Header";
import TodoInputControl from "./Components/TodoInputControl";
import TodoItems from "./Components/TodoItems";
import "./App.css"

function App() {
  return(
    <center className="todo-content">
      <Header/>
      <div className="container">
        <TodoInputControl/>
        <div className="items">
          <TodoItems/>
        </div>
      </div>
    </center>
  )
}

export default App;