import React from 'react';
import Button from '../Button';
import * as Styled from './styled'

function Input({text, onSubmit, onChange}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
    }
    return (
        <Styled._Wrapper onSubmit={handleSubmit}>
            <Styled._Input placeholder='오늘의 할일 입력하기' value={text} onChange={onChange}></Styled._Input>
            <Button type="submit">추가</Button>
        </Styled._Wrapper>
    );
}



export default Input;