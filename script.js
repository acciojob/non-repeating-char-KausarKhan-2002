function firstNonRepeatedChar(str) {
 // Write your code here
	 let obj = {};
  for (let chr of str) {
    if (obj[chr]) obj[chr] += 1;
    else obj[chr] = 1;
  }

  for (let val in obj) {
    // console.log(obj[val]);

    if (obj[val] == 1) return val;
  }
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
