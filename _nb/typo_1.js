---
description: requires an input string "_text_" that will then be output with a random number of typos. Added functionality: if the first word is "run[number]" it will run [number] times* (*up to 9.) Does not auto-output text.
variables:
  - words
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
		} else if(runTimes>9){
			runTimes=9;
		}
		text = text.substr(original.indexOf(" ") + 1);
	}
}

if(text.length==0){
	text="You gotta enter a sentence to typo, silly!";
} else if(/^help$|^\\?$|^info$/.test(text)){
	"Gem's typo algorithm v1! type run# as the first input word to run recursively (up to 9) example: 'run3 [sentence]' *note some commands may not allow this";
}

for (i = 1; i <= runTimes; i++){
	words = text.split(' ');
	for(i=0;i<words.length;i++){
		ltrs = words[i].split('');
		for(j=1;j<ltrs.length-1;j++){
			if(Math.random()<0.15){
				if(Math.random()<0.7){
					tmp=ltrs[j];
					ltrs[j]=ltrs[j+1];
					ltrs[j+1]=tmp;
					j++;
				}else{
					ltrs[j]+=ltrs[j];
				}
			}
		}
		words[i]=ltrs.join('');
	}
	text=words.join(' ');
}
