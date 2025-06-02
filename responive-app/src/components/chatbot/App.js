import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './Chatbot/config';
import ActionProvider from './Chatbot/ActionProvider';
import MessageParser from './Chatbot/MessageParser';
import './App.css'


function Bot({json_obj}) {
  // console.log({json_obj})
  return (
    <div className="Bot">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={(props) => <ActionProvider {...props} json_obj={json_obj} />}
        
      />
    </div>
  );
}

export default Bot;
