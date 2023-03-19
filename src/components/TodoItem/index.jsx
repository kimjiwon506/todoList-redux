import React, { useContext} from 'react';
import Button from '../Button';
import * as Styled from './styled'
import TodoContext from '../../context/todos';

function TodoItem() {
    // 만약에 todoContext에 actions : { setTodo: () => {}, setAdd: () => {}} 이렇게 있었다면 const { todos, action } = useContext(TodoContext); 후에 actions.setTodo이렇게 사용
    const { todos, setTodos } = useContext(TodoContext);

    const onToggle = (id) => setTodos({...todos, todo: todos.todo.map((item) => item.id === id ? { ...item, done: !item.done } : item)})
    const onDelete = (id) => {
        return setTodos({ ...todos, todo: todos.todo.filter((item) => item.id !== id && item ) })
    }

    return (
    <>
        {todos.todo.map(( item ) => (
            <Styled._Wrapper key={item.id} >
                <Styled._Item style={{ textDecoration: item.done ? 'line-through' : 'none' }}>{item.text}</Styled._Item>
                <Button onClick={() => onToggle(item.id)}>완료</Button>
                <Button onClick={() => onDelete(item.id)}>삭제</Button>
            </Styled._Wrapper>
        ))}
    </>
    );
}

export default TodoItem;