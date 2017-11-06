import uuidv4 from 'uuid/v4'

export default class User {
  constructor (user) {
    this.id = uuidv4()
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.email = user.email
  }
}