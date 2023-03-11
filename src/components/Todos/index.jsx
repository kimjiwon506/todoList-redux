import React, { useState } from 'react';

import TodoItem from '../TodoItem';
import Header from '../Header/index';
import Input from '../Input';

function Todos({ todos, changeInput, onToggle}) {
    return (
        <>
            <Header />
            <Input   />
            <TodoItem todos={todos} onToggle={onToggle} />
        </>
    );
}

export default Todos;