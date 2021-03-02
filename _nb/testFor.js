---
description: requires an input string "_text_" and array "_testFor_" that "_text_" will be tested against. Outputs "_trg_" that is true if triggered. Uses regex, case insensitive.
variables:
  - trg
  - text
  - testFor
  - regTest
tag: functions
order: 3
---
var trg = false;
/*original regex solution from jfriend00 on stackoverflow */
var regTest = new RegExp(testFor.join("|"), "i");
if (regTest.test(text)){
	trg=true;
} 