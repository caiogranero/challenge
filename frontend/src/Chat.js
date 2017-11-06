import uuidv4 from 'uuid/v4'
import Handlebars from 'handlebars'
import faker from 'faker'

export default class Chat {
  constructor (chat) {
    this.id = uuidv4()
    this.name = chat.name,
    this.element = chat.element
    this.users = [],
    this.messages = []
  }

  /**
   * Create a new message in chat
   * @param {*message Class} message 
   * @param {*type String} self or machine type
   */
  addMessage (message, type) {
    if (this.isNewUser(message.user)) {
      this.addUser(message.user)
    }

    this.messages.push(message)

    // generate a handlebars template and insert in html
    const source = document.getElementById(`${type}-template`).innerHTML
    const template = Handlebars.compile(source)
    const html = template(message)

    this.element.insertAdjacentHTML('afterbegin', html)
  }

  /**
   * Check if the user already are part of the chat
   * @param {*User Class} user 
   */
  isNewUser (user) {
    return !this.users.find(el => el.id === user.id)
  }

  /**
   * Add a user in the chat
   * @param {*User Class} user 
   */
  addUser (user) {
    this.users.push(user)
  }

  /**
   * Remove a user from the chat
   * @param {*User Class} user 
   */
  removeUser (user) {
    this.users.filter(el => el.id !== user.id)
  }
}