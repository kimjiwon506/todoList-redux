import { createContext, useState } from "react";

const TodoContext = createContext({
    // inputValue: '',  
    todos: {inputValue: '', todo: []},
    actions: {setTodos: () => {}}
})

const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState({
        inputValue: '',
        todo: [{id:1, text: '리덕스연습하기', done:false}]
    })

    const value = {todos, setTodos};

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    )
}

export { TodoProvider };

export default TodoContext;