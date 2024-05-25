class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet()
        }

        if (lowerCaseMessage.includes("javascript")) {
            this.actionProvider.handleJavascriptList();
        }

        if (lowerCaseMessage.includes("mozilla")) {
            this.actionProvider.handleMozillaList();
        }

        if (lowerCaseMessage.includes("resources on frontend")) {
            this.actionProvider.handleFrontendList();
        }

        if (lowerCaseMessage.includes("thank you")) {
            this.actionProvider.showHelpPrompt();
        }

    }
}

export default MessageParser