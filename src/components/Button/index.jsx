import React from 'react';
import * as Styled from './styled'

function Button({children}) {
    return (
        <Styled._Button>
            {children}
        </Styled._Button>
    );
}

export default Button;