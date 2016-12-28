'use strict';

function solve (args) {
    let number = +args[0],
        result = '',
        onesLow = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
	    onesUp = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
	    tensLow = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',],
	    tensUp = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety',],
	    teensLow = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
	    teensUp = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'],
        hundreds = number / 100 | 0,	
	    tens = (number / 10) % 10 | 0,	
	    ones = number % 10;

    if (hundreds === 0 && tens === 0) {
		result = onesUp[ones];
	} else if (hundreds === 0) {
		if (tens === 1) {
			result = teensUp[ones];
		} else {
			if (ones === 0) {
				result = tensUp[tens];
			}
			else {
				result = tensUp[tens] + ' ' + onesLow[ones];
			}	
		}
	} else {
		if (tens === 0 && ones === 0) {
			result = onesUp[hundreds] + ' hundred';
		} else if (ones === 0) {
			result = onesUp[hundreds] + ' hundred' + ' and ' + tensLow[tens];
		} else if (tens === 0){
			result = onesUp[hundreds] + ' hundred' + ' and ' + onesLow[ones];
		} else {
			if (tens === 1 && ones >= 1) {
				result = onesUp[hundreds] + ' hundred' + ' and ' + teensLow[ones];
			} else {
				result = onesUp[hundreds] + ' hundred' + ' and ' + tensLow[tens] + ' ' + onesLow[ones];
			}
		}
	}

    console.log(result);
}

solve(['19']);
solve(['273']);