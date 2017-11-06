import User from './User'
import Controller from './Controller'
import faker from 'faker'

let user = null
let machine = null

const messageTextInput = document.getElementById('message-text')

function sendMessage () {
  if (messageTextInput.value !== '') {
    if (!user) {
      // Create the user instance
      user = new User({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
      })

      // Create a new user instance to simulate another user iteraction
      machine = new User({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
      })
    }

    // Send message
    Controller.sendMessage(user, machine)

    messageTextInput.value = ''
  }
}

document.getElementById('btn-send-text').onclick = (event) => {
  sendMessage()
}

messageTextInput.onkeyup = (event) => {
  // if press enter key, need to do same thing as click in send button
  if (event.keyCode === 13) {
    sendMessage()
  }
}