import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';



const config = {
    botName: "Annapurna",
    initialMessages: [createChatBotMessage(`Annapurna says Hi!`)],
    customComponents: {
        botAvatar: (props) => <Avatar {...props} />,
    }
    
};

export default config;