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
text