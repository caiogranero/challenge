import Chat from './Chat'
import Message from './Message'
import moment from 'moment'
import faker from 'faker'

const Controller = {
  chat: null,
  
  /**
   * Send message action from button
   */
  sendMessage: (user, e) => {
    // need to create a new chat instance
    if (!Controller.chat) {
      Controller.chat = new Chat({
        name: faker.internet.userName(),
        element: document.getElementsByClassName('message-list')[0]
      })
    }
    
    const chat = Controller.chat
    const text = document.getElementById('message-text').value
    const timestamp = moment().format('DD/MM/YYYY HH:mm:ss')
    chat.addMessage(new Message({ user, text, timestamp }))
  },

  /**
   * Close the chat 
   */
  close: () => {
    chat = null
  }
}

export default Controller