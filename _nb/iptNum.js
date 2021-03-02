---
description: Returns a number after the word "num[number]" as "_iptNum_" if it is the first word. Requires an input "_text_". Also gives a "_firstWord_" variable
variables:
  - text
  - iptNum
  - firstWord
tag: functions
order: 2
---
var iptNum = 1;
var firstWord = text.replace(/ .*/,'');
if(firstWord.replace(/[0-9]/g,'')=="num"){
	let value = firstWord.match(/\d+$/);
	if(value){
		iptNum = parseInt(value);
		if(isNaN(iptNum)){
			iptNum=1;
		}
		text = text.substr(text.indexOf(" ") + 1);
	}
}

if(text.length==0){
	text="We need an input!";
} else if(/^help$|^\\?$|^info$/.test(text)){
	text="Gem's inputNum algo, returns a var 'iptNum' based on first word of text: 'run3' returns 3";
	iptNum=0;
}