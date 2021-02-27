import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import { useSelector } from 'react-redux';
import { selectRoomId } from './features/appSlice';
import Chatinput from './Chatinput';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore'
import { db } from './Fire';
import Message from './Message';

function Chat() {
    const chatRef = useRef(null)
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection("rooms").doc(roomId)
    );
    const [roomMessages, loading] = useCollection(
        roomId && db
                    .collection('rooms')
                    .doc(roomId)
                    .collection('messages')
                    .orderBy('timestamp', 'asc')
    );
    useEffect(()=>{
        chatRef?.current?.scrollIntoView({
            behaviour: "smooth"
        });
    }, [roomId, loading])
    return (
        <ChatContainer>
            {roomDetails && roomId &&
            <>
                <Header>
                    <HeaderLeft>
                        <h4>#{roomDetails?.data().name}</h4>
                        <StarBorderIcon/>
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoIcon/> Details
                        </p>
                    </HeaderRight>
                </Header>

                <ChatMessages>
                    {/* list all msgs */}
                    {roomMessages?.docs.map(doc=>{
                        const {message, timestamp, displayName, photoURL} = doc.data();
                        return (
                            <Message
                                key={doc.id}
                                message={message}
                                timestamp={timestamp}
                                displayName={displayName}
                                photoURL={photoURL}
                            />
                        )
                    })}
                    <ChatBottom ref={chatRef}/>
                </ChatMessages>

                <Chatinput
                    chatRef={chatRef}
                    channelName={roomDetails?.data().name}
                    channelId={roomId}
                />
            </>
            }
        </ChatContainer>
    )
}

export default Chat

const ChatBottom = styled.div`
    padding-bottom: 200px;
`

const ChatMessages = styled.div``;

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