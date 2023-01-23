import {useDispatch, useSelector} from "react-redux";
import {addTodo, removeTodo, updateTodo} from "../state/actions";
import {useRef, useState} from "react";

const TodoList = () => {
    const todoList = useSelector(state => state.todoList)
    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const [inputValue, setInputValue] = useState('')
    const [editingTodo, setEditingTodo] = useState(null)

    const handleAddTodo = (text) => {
        const newTodo = {id: Date.now(), text: text}
        dispatch(addTodo(newTodo))
        setInputValue('')
    }

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    }

    const handleUpdateTodo = (id) => {
        const newText = inputRef.current.value;
        dispatch(updateTodo(id, newText))
        setEditingTodo(null)
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => handleAddTodo(inputValue)}>Add Todo</button>
            {todoList.map(todo => (
                <div key={todo.id}>
                    {editingTodo === todo.id ? (
                        <>
                            <input type="text" defaultValue={todo.text} ref={inputRef} />
                            <button onClick={() => handleUpdateTodo(todo.id)}>Save</button>
                        </>
                    ): (
                        <>
                            {todo.text}
                            <button onClick={() => setEditingTodo(todo.id)}>Edit</button>
                            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default TodoList;