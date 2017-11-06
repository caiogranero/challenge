import Chat from './Chat'
import Message from './Message'
import moment from 'moment'
import faker from 'faker'
import Handlebars from 'handlebars'

const Controller = {
  chat: null,
  
  /**
   * Send message action from enter
   * @param {*user Class} user instance
   * @param {*machine Class} user instance
   */
  sendMessage: (user, machine) => {
    // need to create a new chat instance
    if (!Controller.chat) {
      Controller.chat = new Chat({
        name: faker.internet.userName(),
        element: document.getElementsByClassName('chat')[0]
      })
    }
    
    // Send user typed text
    const text = document.getElementById('message-text').value
    const timestamp = moment().format('DD/MM/YYYY HH:mm:ss')
    Controller.chat.addMessage(new Message({ user, text, timestamp }), 'self')

    // Create a random message from machine
    window.setTimeout(() => {
      let message = {
        text: faker.hacker.phrase,
        timestamp: moment().format('DD/MM/YYYY HH:mm:ss')
      }

      Controller.chat.addMessage(new Message(message), 'machine')

      const source = document.getElementById('user-title-template').innerHTML
      const template = Handlebars.compile(source)
      const html = template(Object.assign(message, {user: machine.firstName}))
      document.getElementsByClassName('menu')[0].innerHTML = html
    }, 500)
  },

  /**
   * Close the chat 
   */
  close: () => {
    chat = null
  }
}

export default Controller