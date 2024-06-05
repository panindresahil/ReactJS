/* eslint-disable react/prop-types */
const TodoItems = ({todoItem}) => {
    return(
        <>
        <div className="row m-2">
        <div className="col-6">
          {todoItem}
        </div>
        <div className="col-4">
          Date
        </div>
        <div className="col-2">
          <button className="btn btn-danger item-btn">Delete</button>
        </div>
        </div>
        </>
    )

}

export default TodoItems;