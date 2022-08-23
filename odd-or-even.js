function oddishOrEvenish(num) {
    const stringArrayNum = num.toString().split('');
    const digitArray = stringArrayNum.map(Number);
    const totalValueOfDigits = digitArray.reduce(
        (previousValue, currentValue) => {
            return previousValue + currentValue;
        });
    if (totalValueOfDigits % 2 === 1) {
        return "Odd";
    } else if (totalValueOfDigits % 2 === 0) {
        return "Even"
    }
}

module.exports = oddishOrEvenish;