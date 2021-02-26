import { StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';

function Chat() {
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4>#Room-name</h4>
                    <StarBorderIcon/>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoIcon/> Details
                    </p>
                </HeaderRight>
            </Header>
        </ChatContainer>
    )
}

export default Chat

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    align-items: center;
`;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    
    >h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 5px;
        margin-bottom: 5px;
        font-size: 20px;
    }
    
    > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;
const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 10px;
        font-size: 20px;
    }
`;