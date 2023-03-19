import React, { useContext, useRef } from 'react';
import Button from '../Button';
import * as Styled from './styled'
import TodoContext from '../../context/todos';

function Input() {
    const { setTodos, todos } = useContext(TodoContext);
    const nextIdRef = useRef(2)
    const onSubmit = (e) => { 
        e.preventDefault();
        setTodos({...todos, todo: todos.todo.concat({id:nextIdRef.current++, text: todos.inputValue , done:false})})
    }
    const onChangeInput = (e) => setTodos({...todos, inputValue: e.target.value })

    return (
        <Styled._Wrapper onSubmit={onSubmit}>
            <Styled._Input placeholder='오늘의 할일 입력하기' value={todos.inputValue || ''} onChange={onChangeInput}></Styled._Input>
            <Button type="submit">추가</Button>
        </Styled._Wrapper>
    );      
}



export default Input;