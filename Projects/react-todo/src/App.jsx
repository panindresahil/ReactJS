import Header from "./Components/Header";
import TodoInputControl from "./Components/TodoInputControl";
import TodoItems from "./Components/TodoItems";
import "./App.css"

function App() {
  let toDos = ["Work", "Read", "Walk"]
  // let toDos= []
  return(
    <center className="todo-content">
      <Header/>
      {toDos.length === 0 && <h1 style={{textAlign: "center"}}>No Work Items</h1>}
      <div className="container">
        <TodoInputControl/>
        <div className="items">
          {
            toDos.map((item) => {return <TodoItems key={item} todoItem={item}/>})
          }
        </div>
      </div>
    </center>
  )
}

export default App;