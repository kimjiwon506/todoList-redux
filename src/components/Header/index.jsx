import React from 'react';
import * as Styled from './styled'

function Header({children}) {
    return (
        <Styled._Wrapper>
            {children}
        </Styled._Wrapper>
    );
}

export default Header;