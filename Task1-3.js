1.
function reverse(str) {
    return str.split(' ').reverse().join(' ');
}

2.
function getAverage(numbers) {
	var total = 0;

    for (var i = 0; i < numbers.length; i++) {
      total += marks[i];
    }

    return Math.floor(total / numbers.length);
}

3.
function squareDigits(number) {
	let numToStr = number + "";
	let total = "";

	for (let i in numToStr) {
	  total += (parseInt(numToStr[i])**2 + "");
	}

	return parseInt(total);
}