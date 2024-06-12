import { useState } from "react"
import "./App.css"

function App() {

  const [color, setColor] = useState(["#365E32", "#E88D67", "#8E3E63"])

  const changeBgColor = () => {
    const colors = ["#365E32", "#E88D67", "#8E3E63"]
    const id = Math.round(Math.random() * 3) - 1
    setColor(colors[id])
  }

  return(
    <>
    <center>
      <div className="container text-center">
        <h1 className="heading">BackGround Changer</h1>
        <div className="row">
        <div className="col box" style={{backgroundColor: color}} onClick={changeBgColor}>
          BOX1
        </div>
        </div>
      </div>
    </center>
    </>
  )
}

export default App