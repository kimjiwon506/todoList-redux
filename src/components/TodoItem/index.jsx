import React from 'react';
import Button from '../Button';
import * as Styled from './styled'

function TodoItem({todos, ...props }) {
    return (
    <>
        {todos.todos && todos.todos.map((todo) => (
            <Styled._Wrapper key={todo.id} >
                <Styled._Item style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</Styled._Item>
                <Button onClick={() => props.onToggle(todo.id)}>완료</Button>
                <Button onClick={() => props.onDeleteTodo(todo.id)}>삭제</Button>
            </Styled._Wrapper>
        ))}
    </>
    );
}

export default TodoItem;