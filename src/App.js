import React from "react";
import "./App.css";
import Header from "./component/header/Header";
import Card from "./component/card/Card";
import Chats from "./component/chats/Chats";
import ChatScreen from "./component/chat-screen/ChatScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from "./component/swipe-buttons/SwipeButtons";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <Card />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
