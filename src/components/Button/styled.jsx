import styled from '@emotion/styled'

export const _Button = styled.button`
    box-sizing: border-box;
    padding: 5px;
    background: gray;
    color: white;
    width: 20%;
    display: block;
    & + & {
        margin-left: 5px;
    }
`