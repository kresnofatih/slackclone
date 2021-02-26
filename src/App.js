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

function App() {
  return (
    <div className="App">
      <Router>
      <>
        <Header/>
        <AppBody>
        <Sidebar/>
          <Switch>
            <Route path="/" exact>
              {/* chat */}

            </Route>
          </Switch>
        </AppBody>
      </>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`