import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const handleInc = () => {
    setCount(count + 1)
  }

  const handleDec = () => {
    if (count === 0) {
      setCount(0)
    } else {
      setCount(count - 1)
    }
  }

  return(
    <>
      <center>
        <div className='container-fluid'>
        <h1>Count is <span className="badge text-bg-danger">{count}</span></h1>
          <div className="row my-5">
            <div className="col">
              <button onClick={handleInc} type="button" className="btn btn-light">Increment</button>
            </div>
            <div className="col">
              <button onClick={handleDec} type="button" className="btn btn-dark">Decrement</button>
            </div>
          </div>
        </div>
      </center>
    </>
  )
}

export default App
