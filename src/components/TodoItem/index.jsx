import React from 'react';
import Button from '../Button';
import * as Styled from './styled'

function TodoItem(props) {
    return (
        <Styled._Wrapper>
            <Styled._Item>리액트소개</Styled._Item>
            <Button>완료</Button>
            <Button>삭제</Button>
        </Styled._Wrapper>
    );
}

export default TodoItem;