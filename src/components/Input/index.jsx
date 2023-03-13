import React from 'react';
import Button from '../Button';
import * as Styled from './styled'

function Input({todos, ...props }) {
    const onSubmit = (e) => { 
        e.preventDefault();
        props.onAddTodo(todos.input);
        props.onChangeInput('')
    }

    return (
        <Styled._Wrapper onSubmit={onSubmit}>
            <Styled._Input placeholder='오늘의 할일 입력하기' value={todos.input} onChange={(e) => props.onChangeInput(e.target.value)}></Styled._Input>
            <Button type="submit">추가</Button>
        </Styled._Wrapper>
    );
}



export default Input;