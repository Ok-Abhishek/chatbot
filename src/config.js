import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions";
import LinkList from "./components/LinkList";

const config = {
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", { widget: "learningOptions" }),
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#376B7E" },
    chatButton: { backgroundColor: "#376B7E" },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "mozillajsguide",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: 
        [
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "frontendmasters",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
  ],
};


export default config;