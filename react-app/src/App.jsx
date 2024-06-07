import './App.css'
import Header from './Components/Header'
import FoodItems from './Components/FoodItems'

function App() {

  const foodItems = ["Roti", "Sabji", "Dal", "Rice", "Salad"]

  return (
    <>
      <center>
        <div className='container'>
          <Header/>
          <FoodItems items={foodItems}/>
        </div>
      </center>
    </>
  )
}

export default App
