import React from 'react'
import styled from 'styled-components';
import {Avatar} from '@material-ui/core';

function Header() {
    return (
        <HeaderContainer>
            {/* headerleft */}
            <HeaderLeft>
                <HeaderAvatar
                    // onclick
                />
            </HeaderLeft>
            {/* headersearch */}
            {/* headerright */}
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;