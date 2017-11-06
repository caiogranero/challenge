import uuidv4 from 'uuid/v4'

export default class Message {
  constructor (message) {
    this.id = uuidv4()
    this.text = message.text
    this.user = message.user
    this.timestamp = message.timestamp
  }  
}