import React, {Fragment, use, useState} from "react";

const EditTodo = ({todo}) => {

    const [description, setDescription] = useState(todo.description);

//edit desc func
const updateDescription = async (e) => {
    e.preventDefault();
    try {
        const body = {description}
        const response = await fetch (`http://localhost:5000/todos/${todo.todo_id}`, {
            method : "PUT",
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify(body)

        })
    
        window.location = "/";
    } catch (error) {
        console.error(error.message)
        
    }
}

    return(
        <Fragment>
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
  Edit
</button>

<div class="modal" id= {`id${todo.todo_id}`}>
  <div class="modal-dialog">
    <div class="modal-content">

      
      <div class="modal-header">
        <h4 class="modal-title">Edit</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <div class="modal-body">
        <input type = "text" className="form-control" value={description} onChange={e => setDescription (e.target.value)}
        /> 
        </div>
        

      <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-dismiss="modal"
      onClick={e => updateDescription (e)}
      >Edit</button>

        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    )
}

export default EditTodo;