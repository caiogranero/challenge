import uuidv4 from 'uuid/v4'

export default class Chat {
  constructor (chat) {
    this.id = uuidv4()
    this.name = chat.name,
    this.element = chat.element
    this.users = []
  }

  /**
   * Create a new message in chat
   * @param {*Message Class} message 
   */
  addMessage (message) {
    if (this.isNewUser(message.user)) {
      this.addUser(message.user)
    }

    // TODO: use handlebars
    const element = document.createElement('li')
    const text = document.createTextNode(`[${message.timestamp}] - ${message.user.firstName}: ${message.text}`)

    element.appendChild(text)

    this.element.insertBefore(element, this.element.firstChild)
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