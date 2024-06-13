/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [isNum, setIsNum] = useState(false)
  const [isChar, setChar] = useState(false)
  const [password, setPassword] = useState()

  const passwordGenerator = () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz"

    if (isNum) {
      str = str + "0123456789"
    }
    if (isChar) {
      str = str + "~!@#$%^&*()_+{}<>?|"
    }

    for (let i = 1; i <= length; i++) {
      let randNum = Math.round(Math.random() * str.length + 1)
      pass += str.charAt(randNum)
    }
    setPassword(pass)
  }
  useEffect(() => {
    passwordGenerator()
  },[length, isChar, isNum])

  return (
    <>
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={50}
        value={length}
        className='cursor-pointer'
        onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          defaultChecked={isNum}
          onChange={() => setIsNum((prev) => !prev)}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            defaultChecked={isChar}
            onChange={() => setChar((prev) => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    </>
  )
}

export default App
