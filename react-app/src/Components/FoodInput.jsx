/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
function Input({foodItem, handleSearchChange, handleKeyDown}) {

    return(
        <>
            <div className="input-group mb-3">
                <input value={foodItem} onChange={(e) => handleSearchChange(e)} type="text" className="form-control" placeholder="Enter Food Item" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button onClick={() => handleKeyDown(foodItem)} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
            <p>FoodItem entered by the User: {foodItem}</p>
        </>
    )
}

export default Input;