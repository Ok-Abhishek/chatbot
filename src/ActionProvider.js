import fetchGeminiData from "./api";

class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage, stateRef, createCustomMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    handleJavascriptList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on Javascript:",
            {
                widget: "javascriptLinks",
            }
        );
        this.updateChatbotState(message);
        console.log("Hello world!");
    };

    handleMozillaList = () => {
        const message = this.createChatBotMessage(
            "Here's a great resource for learning Mozilla Js",
            {
                widget: "mozillajsguide",
            }
        );
        this.updateChatbotState(message);
    };

    handleFrontendList = () => {
        const message = this.createChatBotMessage(
            "This is a fantastic resource for Frontend Masters education.",
            {
                widget: "frontendmasters",
            }
        );
        this.updateChatbotState(message);
    };
    

    handleAPIRequest = async (query) => {
        console.log("handleAPIRequest method is being called with query:", query);
        const data = await fetchGeminiData(query);
        let message;
        if (data) {
            message = this.createChatBotMessage(`Here is the information I found: ${JSON.stringify(data)}`);
        } else {
            message = this.createChatBotMessage("Sorry, I couldn't fetch the information right now. Please try again later.");
        }

        this.updateChatbotState(message);
        console.log("Hello Boss!");
    };

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.");
        this.updateChatbotState(greetingMessage);
    }

    showHelpPrompt() {
        const helpMessage = this.createChatBotMessage("Oh!! Welcome Dear 😊 , If You want me to ask anything else feel free to ask 😎.");
        this.updateChatbotState(helpMessage);
      }

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }));
    }
}

export default ActionProvider;
