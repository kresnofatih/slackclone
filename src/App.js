import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import Chat from './Chat';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './Fire'
import Login from './Login';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading){
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-199wkt/Slack_Mark.svg" alt=""/>
          <CircularProgress/>
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login/>
        ):(
          <>
            <Header/>
            <AppBody>
            <Sidebar/>
              <Switch>
                <Route path="/" exact>
                  <Chat/>

                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AppLoadingContents = styled.div`
  
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    height: 100px;
    margin-bottom: 30px;
  }
`

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`