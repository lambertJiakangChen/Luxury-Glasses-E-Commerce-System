import React from 'react'

import SectionHeading from './section-heading'
import './chat-bot.css'

const ChatBot = (props) => {
  return (
    <div id="chatbot" className="chat-bot-chat-bot">
      <SectionHeading
        heading="Contact us"
        subtitle="Use our chat bot for help"
        rootClassName="section-heading-root-class-name8"
      ></SectionHeading>
      <button className="chat-bot-button button">
        <span>
          <span>Chat Bot</span>
          <br></br>
        </span>
      </button>
    </div>
  )
}

export default ChatBot
