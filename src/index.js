module.exports = function check(str, bracketsConfig) {
  // your solution
	str=str.split(""); //split each character into an array
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
	//returns result to test
	return tmpArr.length==0&&str.length%2==0?true:false;
}