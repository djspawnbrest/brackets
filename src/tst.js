function check(str, bracketsConfig) {
  // your solution
	str=str.split(""); //split each character into an array
	//console.log(str);
	let tmpArr=[]; //work array
    //iterate over the charters and determine the truth
	str.forEach((one,i,str)=>{
		bracketsConfig.forEach((two,j,bracketsConfig)=>{
			if(str[i]==bracketsConfig[j][1]&&tmpArr[tmpArr.length-1]==bracketsConfig[j][0]){
				tmpArr.pop();
			}else if(str[i]==bracketsConfig[j][0]){
				tmpArr.push(str[i]);
			}
		});
	});
	//console.log(tmpArr);
	//returns result
	return tmpArr.length==0&&str.length%2==0?true:false;
}

//configs from test
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

//examples
console.log(check('()', config5));
console.log(check('())(', config1));
console.log(check('())(', config2));
console.log(check('())(', config3));
console.log(check('())(', config4));
console.log(check('())(', config5));
console.log(check('())(', config6));
console.log(check('())(', config7));