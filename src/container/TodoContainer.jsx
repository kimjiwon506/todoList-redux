import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/index';
import Input from '../components/Input/index';
import TodoItem from '../components/TodoItem/index';
import { addTodo, changeInput, deleteTodo, toggleTodo } from '../modules/todos';

export function TodoContainer() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const onToggle = id => dispatch(toggleTodo(id));
    const onDeleteTodo = id => dispatch(deleteTodo(id))
    const onAddTodo = text => dispatch(addTodo(text));
    const onChangeInput = text => dispatch(changeInput(text));

    return (
        <>
            <Header>오늘의 할일</Header>
            <Input todos={todos} onAddTodo={onAddTodo} onChangeInput={onChangeInput} />
            <TodoItem todos={todos} onToggle={onToggle} onDeleteTodo={onDeleteTodo} />
        </>
    );
}

// export default connect(
//     ({todos}) => ({
//         input: todos.input,
//         todos: todos.todos
//     }), 
//     {
//         changeInput,
//         toggleTodo,
//     },
// )(TodoContainer)

// const mapStateToProps = ({todos}) => ({
//     input: todos.input,
//     todos: todos.todos
// })

// const mapDispatchToProps = { onToggle }

// const mapStateToProps  = state => ({ todos: state.todos })

// export default connect(
//     mapStateToProps,
//     // mapDispatchToProps
// )(TodoContainer)
