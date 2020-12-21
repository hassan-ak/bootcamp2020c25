import React, { useState } from 'react'
let baseUrl = "fakeapi"

export const Todo = () => {
    const [state, setstate] = useState([])
    const addTodoHandler = () =>{
        fetch(`/${baseUrl}/addTodo`,{
            method : "POST",
            body:{id:"1232", text:"text"}
        }).then(res=>{
            console.log("success : ", res)
        }).catch(error =>{
            console.log("error addtodo : ", error)
        })
    }
    const getDataHandler = () =>{
        fetch(`/${baseUrl}/getTodos`)
            .then(res => res.json())
            .then(data => {
                setstate(data.todos)
                console.log("Data : ", data)
            })
    }
    return (
        <div>
            Hello From Todo
            <button onClick={addTodoHandler}>Add</button>
            <button onClick={getDataHandler}>getData</button>
            {JSON.stringify(state)}
        </div>
    )
}
