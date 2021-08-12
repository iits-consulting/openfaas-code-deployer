'use strict'

const _ = require('lodash')
const axios = require('axios')

const config = {
  faas: {
    baseUrl: 'https://dfd-openfaas.iits.tech'
  }
}

const commands = {
  DEPLOY: 'DEPLOY',
  RUN: 'RUN',
}

const languages = {
  JAVASCRIPT: 'JAVASCRIPT',
}

module.exports = async (event, context) => {
  const input = event.body.text
  let message

  try {
    const command = determineCommand(input)
    if (command === commands.DEPLOY) {
      const language = determineLanguage(input)
      const payload = determinePayload(input)
      message = `deploying your ${language} function ${payload} :partyparrot:`
    } else if (command === commands.RUN) {
      const functionName = determineFunctionName(input)
      const payload = determinePayload(input)
      message = `running ${functionName} with payload ${payload} :partyparrot:`
      const {data} = await axios.post(`${config.faas.baseUrl}/function/${functionName}`, payload)

      message += "\n" + JSON.stringify(data)

    } else {
      message = `unknown command ${command}`
    }
  } catch (error) {
    message = error.message
  }

  return context
    .status(200)
    .succeed(message)
}


const determineCommand = (input) => {
  const command = input.split(' ').shift().toUpperCase()

  if (Object.keys(commands).includes(command) === false) {
    throw new Error(`unknown command ${command}`)
  }

  return command
}

const determineLanguage = (input) => {
  const language = input.split(' ')[1].toUpperCase()

  if (Object.keys(languages).includes(language) === false) {
    throw new Error(`unknown language ${language}`)
  }

  return language
}

const determineFunctionName = (input) => {
  return input.split(' ')[1]
}

const determinePayload = (input) => {
  return input.split(' ')[2]
}

const deploy = (language, code) => {
}
const run = (functionName, args) => {
}
