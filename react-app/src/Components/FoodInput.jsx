/* eslint-disable react/prop-types */
function Input({foodItem, handleSearchChange}) {

    return(
        <>
            <div className="input-group input-group-sm mb-3">
                <input value={foodItem} onChange={(e) => handleSearchChange(e)} type="text" placeholder="Enter Food Item" className="form-control py-2 my-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <p>{foodItem}</p>
        </>
    )
}

export default Input;