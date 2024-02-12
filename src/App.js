import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './Component/ChatFeed';
import LoginForm from './Component/LoginForm';
import './App.css';

const projectID = 'e7da206a-c01a-4b64-aad0-37bbcda30cf8';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App
