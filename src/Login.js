import Button from '@material-ui/core/Button';
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from './Fire';

function Login() {
    const login = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(err=>{
            console.log(err);
        })
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img 
                    src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-199wkt/Slack_Mark.svg" 
                    alt=""
                />
                <h1>Login to SlackClone</h1>
                <p>This is Fatih's SlackClone</p>

                <Button onClick={login}>
                    Log In with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: lightgrey;
    height: 100vh;
    display: grid;
    place-items: center;
`

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius:10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit:contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 20px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`