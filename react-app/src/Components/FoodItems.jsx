/* eslint-disable react/prop-types */
function FoodItems ({items}) {
    return(
        <>
            <ul className="list-group my-3">
                {items.map((i) => <li key={i} className="list-group-item">{i}</li>)}
            </ul>
        </>
    )
}

export default FoodItems;