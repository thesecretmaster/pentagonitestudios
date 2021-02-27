/* This code is intentionally left off the nightbot.html list */

// Tell ESLint that there will be the following gloabl variables
/* global user, text */

// These ESLint errors should be handled, but for now I just want to get it to pass
/* eslint-disable no-unused-expressions, no-case-declarations, no-unused-expressions */
if (user === 'Gemhunter178' && text !== 'override') {
  const opt = text.split(' ')
  switch (opt[0]) {
    case 'wave':
      'Gem says hi and apologizes if she missed someone!'
      break

    case 'typo':
      let msg = 'Gem would like to apologize for her typos'
      const words = msg.split(' ')
      for (let i = 0; i < words.length; i++) {
        const ltrs = words[i].split('')
        for (let j = 1; j < ltrs.length - 1; j++) {
          if (Math.random() < 0.15) {
            if (Math.random() < 0.7) {
              const tmp = ltrs[j]
              ltrs[j] = ltrs[j + 1]
              ltrs[j + 1] = tmp
              j++
            } else {
              ltrs[j] += ltrs[j]
            }
          }
        }
        words[i] = ltrs.join('')
      }
      msg = words.join(' ') + ' abbybaPensive'
      msg
      break

    default:
      'Hiya Gem! maizWave'
      break
  }
} else {
  'This is the temporary override/other user text'
}
