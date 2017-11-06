import User from './User'
import Controller from './Controller'
import faker from 'faker'

let user = null
const sendButton = document.getElementById('btn-send-message')

sendButton.addEventListener('click', (e) => {
  // Check if is a new user
  if (!user) {
    user = new User({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email()
    })
  }

  // Send message
  Controller.sendMessage(user, e)
})
