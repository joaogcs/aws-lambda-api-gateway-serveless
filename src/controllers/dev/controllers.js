class MathController {
  sum (...args) {
    return args.reduce((prev, next) => Number(prev) + Number(next), 0)
  }
}

module.exports = MathController
