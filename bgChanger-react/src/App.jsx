import { useState } from "react"
import "./App.css"

function App() {

  const [color, setColor] = useState("#FFF5E1")

  const changeBgColor = (col) => {

    setColor(col)
  }

  return(
    <>
    <center>
      <div className="container text-center bg-container" style={{backgroundColor: color}}>
      <h1 className="heading">BackGround Changer</h1>
      <div className="row align-items-center">
        <button type="button" onClick={() => changeBgColor("#1679AB")} className="col box btn btn-primary">Primary</button>
        <button type="button" onClick={() => changeBgColor("#686D76")} className="col box btn btn-secondary">Secondary</button>
        <button type="button" onClick={() => changeBgColor("#ADD899")} className="col box btn btn-success">Success</button>
        <button type="button" onClick={() => changeBgColor("#C40C0C")} className="col box btn btn-danger">Danger</button>
        <button type="button" onClick={() => changeBgColor("#FFC100")} className="col box btn btn-warning">Warning</button>
        <button type="button" onClick={() => changeBgColor("#A3D8FF")} className="col box btn btn-info">Info</button>
        <button type="button" onClick={() => changeBgColor("#FFF5E1")} className="col box btn btn-light">Light</button>
        <button type="button" onClick={() => changeBgColor("#151515")} className="col box btn btn-dark">Dark</button>
        </div>
      </div>
      </center>
    </>
  )
}

export default App