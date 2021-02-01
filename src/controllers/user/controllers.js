class UserController {
  doSomething (...args) {
    return {
      id: args.id,
      firstName: 'Joao',
      lastName: 'Soares',
      github: {
        profile: 'joaogcs',
        link: 'https://github.com/joaogcs'
      }
    }
  }
}

module.exports = UserController
