import React, {useState} from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import {auth, db} from './Fire'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

function Chatinput({channelName, channelId, chatRef}) {
    const [user] = useAuthState(auth)
    const [input, setInput] = useState('')
    const sendMessage=e=> {
        e.preventDefault(); // form when submit will trigger refresh without preventDefault
        if (!channelId){
            return false;
        }

        db
            .collection('rooms')
            .doc(channelId)
            .collection('messages')
            .add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                displayName: user.displayName,
                photoURL: user.photoURL
            });
        
            chatRef.current.scrollIntoView({
                behaviour: "smooth"
            })
        
        setInput('');
    }

    return (
        <ChatinputContainer>
            <form>
                <input 
                    value={input} 
                    placeholder={`Message #${channelName}`}
                    onChange={(e)=>setInput(e.target.value)}
                />
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