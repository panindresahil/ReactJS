import './App.css'
import Header from './Components/Header'
import FoodItems from './Components/FoodItems'
import Input from './Components/FoodInput'
import { useState } from 'react'

function App() {
  const [searchFoodItem, setsearchFoodItem] = useState("")
  const [bgColor, setBgColor] = useState("")
  const [foodItem, addFoodItem] = useState(["Rice", "Dal", "Roti"])

  const handleClick = (e) => {
    addFoodItem([...foodItem, e])
    setsearchFoodItem("")
  }

  const handleChange = (e) => {
    setsearchFoodItem(e.target.value)
  }

  const handleCart = (item) => {
    alert(`${item} has been added to cart.`);
    setBgColor("active")
  }

  return (
    <>
      <center>
        <div className='container'>
          <Header/>
          <Input foodItem={searchFoodItem} handleKeyDown={handleClick} handleSearchChange={handleChange}/>
          {foodItem.length === 0 ? <h1>No Items</h1> : <FoodItems items={foodItem} color={bgColor}  handleClick={handleCart}/>}
        </div>
      </center>
    </>
  )
}

export default App
