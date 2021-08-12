'use strict'

module.exports = async (event, context) => {
  const input = event.body.text.split(' ')

  const command = input.shift()
  const payload = input.join(' ')

  let message
  if (command === 'deploy') {
    message = `deploying ${payload} :partyparrot:`
  }

  return context
    .status(200)
    .succeed(message)
}
