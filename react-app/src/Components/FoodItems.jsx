/* eslint-disable react/prop-types */
function FoodItems ({items, handleClick}) {

    return(
        <>
            <ul className="list-group grid text-center">
                {items.map((i) => (<li key={i.Item} className="list-group-item g-col-6">
                    <span key={i.Item} className="mx-5">{i.Item}</span>
                    <button key={i.Item} className="button btn btn-success" onClick={() => handleClick(i.Item)}>{i.Price} $</button>
                    </li>))}
            </ul>
        </>
    )
}

export default FoodItems;