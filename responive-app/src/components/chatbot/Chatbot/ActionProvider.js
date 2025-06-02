import React from 'react';
import context from 'react-bootstrap/esm/AccordionContext';

const ActionProvider = ({ createChatBotMessage, setState, children,json_obj}) => {

    // const greet = (msg) => {
    //     const message = createChatBotMessage(msg);
    //     updateState(message)
    // }
    // console.log({json_obj})
    const description=json_obj.description
    const greet = async (msg) => {
        try {
            const response = await fetch('https://525b-34-168-162-31.ngrok-free.app/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_input: { msg }, context:description })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            const message = createChatBotMessage(data.response);
            updateState(message);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    
    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }))
    }

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        greet
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;