/* eslint-disable react/prop-types */
function FoodItems ({items}) {

    return(
        <>
            <ul className="list-group grid text-center">
                {items.map((i) => (<li key={i} className="list-group-item g-col-6">
                    <span className="mx-5">{i}</span>
                    <button className="button btn btn-success" onClick={() => alert(`${i} added to cart`)}>Add</button>
                    </li>))}
            </ul>
        </>
    )
}

export default FoodItems;