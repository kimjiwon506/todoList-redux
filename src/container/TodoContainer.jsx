import React, {useState} from 'react';
import Header from '../components/Header/index';
import Input from '../components/Input/index';
import TodoItem from '../components/TodoItem/index';

export function TodoContainer() {

    return ( 
        <> 
            <Header>오늘의 할일</Header>
            <Input />
            <TodoItem />
        </>
    );
}
