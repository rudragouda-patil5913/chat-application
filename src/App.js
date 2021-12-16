import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


import './App.css';

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
                height="100vh"
                projectID="09421f89-4de3-4c44-b608-408c2c371596"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}

        />
    );
}

export default App;