import React from 'react';
import Button from '../Button';
import * as Styled from './styled'

function Input({todos, ...props }) {
    console.log(todos, todos.todos);
    const onSubmit = (e) => { 
        e.preventDefault();
        props.onAddTodo(todos.input);
    }
    const onChange = (e) => {
        props.onChangeInput(e.target.value)
    }
    return (
        <Styled._Wrapper onSubmit={onSubmit}>
            <Styled._Input placeholder='오늘의 할일 입력하기' value={todos.input || ''} onChange={onChange}></Styled._Input>
            <Button type="submit">추가</Button>
        </Styled._Wrapper>
    );
}



export default Input;