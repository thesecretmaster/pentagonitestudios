/*This code is intentionally left off the nightbot.html list*/
if(user=="Gemhunter178"&&text!="override"){
	let opt=text.split(' ');
	switch(opt[0]){
		case "wave":
		"Gem says hi and apologizes if she missed someone!";
		break;
		
		case "typo":
		msg="Gem would like to apologize for her typos";
		words = msg.split(' ');
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
		msg=words.join(' ')+ " abbybaPensive";
		msg;
		break;
		
		default:
		"Hiya Gem! maizWave";
		break;
	}
}else{
	"This is the temporary override/other user text";
}