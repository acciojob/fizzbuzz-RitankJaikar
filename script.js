//your JS code here. If required.
let arr= Array(100).fill(0).map((item, i) => i+1);
//console.log(arr);

arr= arr.map(num => {
	if(num%3===0 && num%5===0) {
		return "FizzBuzz";
	}
	else if(num%3===0) {
		return "Fizz";
	}
	else if(num%5===0) {
		return "Buzz";
	}
	return num;
})

//console.log(arr);

alert(arr)