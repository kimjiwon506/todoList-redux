import React from 'react';
import * as Styled from './styled'

function Button({ onClick, children }) {
    return (
        <Styled._Button onClick={onClick} type="submit">
            {children}
        </Styled._Button>
    );
}

export default Button;