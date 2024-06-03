const TodoInputControl = () => {
    return (
        <>
        <div className="row m-2">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Item" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success item-btn">Add</button>
        </div>
        </div>
        </>
    )
}

export default TodoInputControl