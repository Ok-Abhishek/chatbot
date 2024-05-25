// App.js

import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './App.css';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
//import LearningOptions from './components/LearningOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          //components={{ LearningOptions }}
        />
      </header>
    </div>
  );
}

export default App;
