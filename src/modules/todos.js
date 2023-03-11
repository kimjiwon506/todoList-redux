// 액션타입 (action type) : 액션명은 대문자로 입력 Ducks패턴을 따르기때문에 액션의 이름에 접두사(todos)추가
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const ADD_TODO = 'todos/ADD_TODO'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함

// 초기값 
const initialState = [
    /* 우리는 다음과 같이 구성된 객체를 이 배열 안에 넣을 것입니다.
    {
      id: 1,
      text: '예시',
      done: false
    } 
    */
    {
        id: 1,
        text: '예시',
        done: true
      } 
  ];

// 액션 생성함수
export const changeInput = input => ({
    type: CHANGE_INPUT,
    input
});

let nextId = 2;

export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
        text
    }
})

export const toggleTodo = id => ({
    type: TOGGLE,
    id
});

// export default function todos(state = INITIALSTATE, action){
//     return {...state} > 초기값 아무것도 없을때 
// }

export default function todos(state = initialState, action){
    switch(action.type){
        case CHANGE_INPUT : 
        return {
            ...state,
            text: action.text
        }
        case ADD_TODO :
        // return {
        //     // 기존 state를 변경하지 않기위해 전개연산자 or object.assign()사용하여 복사본생성
        //     ...state,
        //     // state.todos.concat 액션타입에 있는 todo
        //     // todos : state.todos.concat(action.todo)
        //     state.concat(action.todo);
        //     }
        return state.concat(action.todo);
        
        case TOGGLE : 
        return {
            ...state,
            todos : state.todos.map((todo) => todo.id === action.id ? { ...todo, done: !todo.done} : todo )
        }
        default: 
        return state;
    }
}
