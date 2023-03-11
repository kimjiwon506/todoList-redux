import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, changeInput } from '../modules/todos';

import Todos from '../components/Todos/index';
import Header from '../components/Header';
import Input from '../components/Input';
import TodoItem from '../components/TodoItem';


export function TodoContainer() {
    // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
    // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.
    // const todos = useSelector(state => state.todos);
    // const dispatch = useDispatch();

    // const onInsert = text => dispatch(addTodo(text));
    // const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

    return (
        <>
            <Header />
            <Input />
            <TodoItem todos={todos} onToggle={toggleTodo} />
        </>
    );
}
// 위 컴포넌트를 연결하려면 react-redux : connect 함수를 사용해야 한다. connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// mapStateToProps : 리덕스 스토어 안의 상태를 props로 넘겨주기 위해 설정
// mapDispatchToProps : 액션생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용
// connect 함수를 호출하면 또다른 함수를 반환. 
// const makeContainer = connect(mapStateToProps, mapDispatchProps)
// makeContainer(타깃 컴포넌트)

// const mapStateToProps = state => ({
//     input : state.todos.input
// })

// const mapDispatchToProps = dispatch => ({
//     changeInput: () => {
//         console.log('addInput');
//     },
//     addTodo: () => {
//         console.log('addTodo');
//     }
// })

// 객체 내부의 값들은 컴포넌트의 props로 전달
// mapStateToProps : state를 팔라미터로 받음 , 현재 스토어가 지닌 상태
// mapDispatchToProps : store의 내장함수 disptch를 파라미터로 받아옴
//export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)

export default connect(({todos}) => ({
    input: todos.input,
    todos: todos.todos,
}),{
    changeInput,
    addTodo,
    toggleTodo
})(TodoContainer)