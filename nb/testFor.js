var trg = false;
/*original regex solution from jfriend00 on stackoverflow */
var regTest = new RegExp(testFor.join("|"), "i");
if (regTest.test(text)){
	trg=true;
} 