import React from 'react';
import Header from '../Header';
import Input from '../Input';
import TodoItem from '../TodoItem';

function TodoContainer(props) {
    return (
        <>
            <Header />
            <Input />
            <TodoItem />
        </>
    );
}

export default TodoContainer;