import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

function Chatinput({channelName, channelId}) {

    const sendMessage=e=> {
        e.preventDefault(); // form when submit will trigger refresh without preventDefault

    }

    return (
        <ChatinputContainer>
            <form>
                <input placeholder={'Message #ROOM'}/>
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>

        </ChatinputContainer>
    )
}

export default Chatinput

const ChatinputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;