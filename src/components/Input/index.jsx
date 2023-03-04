import React from 'react';
import Button from '../Button';
import * as Styled from './styled'

function Input(props) {
    return (
        <Styled._Wrapper>
            <Styled._Input placeholder='오늘의 할일 입력하기'></Styled._Input>
            <Button>추가</Button>
        </Styled._Wrapper>
    );
}



export default Input;