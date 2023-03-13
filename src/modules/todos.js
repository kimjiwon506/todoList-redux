// 액션타입 (action type) : 액션명은 대문자로 입력 Ducks패턴을 따르기때문에 액션의 이름에 접두사(todos)추가
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const ADD_TODO = 'todos/ADD_TODO'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const DELETE = 'todos/DELETE'; // todo 를 제거함

// 초기값 
const INITIALSTATE = {
    input: '',  
    todos: [{
        id: 1,
        text: '리덕스',
        done: false
    }]
};

// 액션 생성함수
export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
});

let nextId = 2;

export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text,
        done: false
    }
})

export const toggleTodo = id => ({
    type: TOGGLE,
    id
});

export const deleteTodo = id => ({
    type: DELETE,
    id
})

// export default function todos(state = INITIALSTATE, action){
//     return {...state} > 초기값 아무것도 없을때 
// }

// 리듀서
export default function todos(state = INITIALSTATE, action){
    switch(action.type){
        case CHANGE_INPUT : 
        return {
            ...state,
            input : action.input
        }

        case ADD_TODO :
        return {
            ...state, 
            todos: state.todos.concat(action.todo)
        }
        
        case TOGGLE : 
        return {
            ...state,
            todos : state.todos.map((todo) => todo.id === action.id ? { ...todo, done: !todo.done} : todo )
        }

        case DELETE :
        return {
            ...state,
            todos : state.todos.filter((todo) => todo.id !== action.id && todo)
        }
        
        default: 
        return state;
    }
}
