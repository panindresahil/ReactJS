import Header from "./Components/Header";
import TodoInputControl from "./Components/TodoInputControl";

function App() {
  return(
    <center className="todo-content">
      <Header/>
      <div className="container text-center">
        <TodoInputControl/>
        <div className="row my-2">
        <div className="col-6">
          Buy Milk
        </div>
        <div className="col-4">
          6/3/2024
        </div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
        </div>
        <div className="row my-2">
        <div className="col-6">
          Go To College
        </div>
        <div className="col-4">
          7/3/2024
        </div>
        <div className="col-2">
          <button className="btn btn-danger">Delete</button>
        </div>
        </div>
      </div>
    </center>
  )
}

export default App;