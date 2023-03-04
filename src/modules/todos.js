// 액션타입 (action type) : 액션명은 대문자로 입력
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크/체크해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함

// 초기값 
const INITIALSTATE = {
    input: '',
    todos: [
        {
            id:1,
            text: '리덕스 기초배우기',
            done: true
        }
    ]
}

// export default function todos(state = INITIALSTATE, action){
//     return {...state} > 초기값 아무것도 없을때 
// }

export default function todos(state = INITIALSTATE, action){
    return {...state}
}