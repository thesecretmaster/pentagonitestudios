---
description: Returns a number after the word "run[number]" as "_runTimes_", requires an input "_text_". Also gives a "_firstWord_" variable
variables:
  - text
  - runTimes
  - firstWord
tag: functions
order: 2
---
var runTimes = 1;
var firstWord = text.replace(/ .*/,'');
if(firstWord.replace(/[0-9]/g,'')=="run"){
	let value = firstWord.match(/\d+$/);
	if(value){
		runTimes = parseInt(value);
		if(isNaN(runTimes)){
			runTimes=1;
		}
		text = text.substr(text.indexOf(" ") + 1);
	}
}

if(text.length==0){
	text="We need an input!";
} else if(/^help$|^\\?$|^info$/.test(text)){
	text="Gem's runTimes algo, returns a var 'runTimes' based on first word of text: 'run3' returns 3";
	runTimes=0;
}