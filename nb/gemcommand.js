/* This code is intentionally left off the nightbot.html list */

// Tell ESLint that there will be the following gloabl variables
/* global user, text */

// These ESLint errors should be handled, but for now I just want to get it to pass
/* eslint-disable no-unused-expressions, no-case-declarations, no-unused-expressions */

const messages = [
  'does art, grows cacti, and knows a lot of fun facts! smolCool',
  'wrangles with nightbot more often than not smolFite',
  'is looking for that one missing semicolon in her code smolThink',
  'makes overly complcated commands for simple tasks (like this one) cbcFacepalm',
  'can also do woodwork and make cabochons gems lycelCool',
  'thinks Gabo should probably go to sleep maizNap',
  'is hoping everyone is having a good day lycelComfy',
  'has attempted flameworking glass before, semi-successfully lycelIdk',
  'has a rather extensive rock and mineral collection abbybaCool',
  'thinks Shirley Temples (drink) are amazing! (she does not kow enough about the person) 🍷',
  'exists in EST/EDT 🕛',
  'can do traditional and digital art, both in 2D and 3D abbybaPaint',
  'probably plays too much ACNH #notsponsored',
  'is taking commissions on a per-request basis smolCash',
  'literally has a few hundred, maybe thousand cacti and succulents 🌵',
  'plays piano and flute but also knows some guitar, ukulele, and general percussion smolJam',
  'wants to remind chat that they are all cuties! elizab34Uwu',
  'say Trans Rights! smolPride kaestr1Pride lycelPride abbybaPride maizPride',
  'is hoping this array is long enough to provide a good variation of messages lycelW',
  'also takes care of a good number of airplants 🍃',
  'can do imtermediate origami 🏵️',
  'has been to active mines for rocks! 🪨',
  'has all 7 continents representing in her rock collection! smolWow',
  'is attempting to help out with endangered cacti breeding 🌵',
  'probably needs more sleep smolNap',
  'can help out with making nightbot commands! lycelYay',
  'knows how to bake and decorate cakes! abbybaNom'
];

const promo = [
  'twitter! https://twitter.com/gemhunter178',
  'insta! https://www.instagram.com/gemhunterdoesart/',
  'twitch!...eventually https://www.twitch.tv/gemhunter178'
];

let prmNum = 0;
if (Math.random() > 0.7) {
  prmNum = 1 + Math.floor(Math.random() * (promo.length - 1));
}

let msg = 'one of our mods - Gem (she/them) - ' + messages[Math.floor(Math.random() * messages.length)] + ' Follow her ' + promo[prmNum];

if (user === 'Gemhunter178') {
  const opt = text.split(' ');
  switch (opt[0]) {
    case 'wave':
      'Gem says hi and apologizes if she missed someone!';
      break;

    case 'typo':
      msg = 'Gem would like to apologize for her typos';
      /* just the function from typo_0.json */
      const words = msg.split(' ');
      for (let i = 0; i < words.length; i++) {
        const ltrs = words[i].split('');
        for (let j = 1; j < ltrs.length - 1; j++) {
          if (Math.random() < 0.15) {
            if (Math.random() < 0.7) {
              const tmp = ltrs[j];
              ltrs[j] = ltrs[j + 1];
              ltrs[j + 1] = tmp;
              j++;
            } else {
              ltrs[j] += ltrs[j];
            }
          }
        }
        words[i] = ltrs.join('');
      }
      msg = words.join(' ') + ' abbybaPensive';
      msg;
      break;

    case 'override':
      msg;
      break;

    case 'spicy':
      'abbybaSpicy lycelChaos abbybaSpicy_HF';
      break;

    default:
      'Hiya Gem! maizWave';
      break;
  }
} else {
  msg;
}
