import React , {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value :'');

    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
        
    };

    return (
       <form className="todo-form" onSubmit = {handleSubmit}>
        {props.edit ? (
            <>
            <input 
            type="text" 
            name="text" 
            value = {input}
            placeholder="Update the task:" 
            className="todo-input edit"
            onChange = {handleChange}
            ref = {inputRef}
            />
           <button className="todo-button edit"
                onClick = {handleSubmit}>
                Update
            </button>
            </>
        ) :(
            <>
            <input 
            type="text" 
            name="text" 
            value = {input}
            placeholder="Add a task to do:" 
            className="todo-input"
            onChange = {handleChange}
            ref = {inputRef}
            />
           <button className="todo-button"
                onClick = {handleSubmit}>
                Add task
            </button>
            </>
        )}

           
       </form>
    )
}

export default TodoForm
