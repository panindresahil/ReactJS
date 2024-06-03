const TodoInputControl = () => {
    return (
        <>
        <div className="row my-2">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Item" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success">Add</button>
        </div>
        </div>
        </>
    )
}

export default TodoInputControl