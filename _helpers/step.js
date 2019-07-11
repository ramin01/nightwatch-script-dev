/*
Credit for this goes to Markus Oberlehner
https://markus.oberlehner.net/blog/crazy-powerful-nightwatch-cucumber-step-definitions/
*/

const { defineStep } = require('cucumber')

const stepDefinitions = []

function register(pattern, callback) {
  stepDefinitions.push({ pattern, callback })

  return defineStep(pattern, callback)
}

function run(stepDescription) {
    stepDefinitions.some(({ pattern, callback }) => {
    const match = stepDescription
      .replace(/^(Given|When|Then|And) /, '')
      .match(pattern)

    if (!match) return false

    const parameters = match.slice(1)
    callback(...parameters)

    return true
  })
}

module.exports = {
  Given: register,
  When: register,
  Then: register,
  register,
  run,
}