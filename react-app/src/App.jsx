import './App.css'
import Header from './Components/Header'
import FoodItems from './Components/FoodItems'
import Input from './Components/FoodInput'
import { useState } from 'react'

function App() {

  const foodItems = ["Roti", "Sabji", "Dal", "Rice", "Salad"]

  const [searchFoodItem, setsearchFoodItem] = useState("")

  const handleChange = (e) => {
    setsearchFoodItem(e.target.value)
  }

  return (
    <>
      <center>
        <div className='container'>
          <Header/>
          <Input foodItem={searchFoodItem} handleSearchChange={handleChange}/>
          <FoodItems items={foodItems}/>
        </div>
      </center>
    </>
  )
}

export default App
