
const plusOne = digits => {
    const number = parseInt(digits.join('')) + 1;
    return number.toString().split('').map(string => parseInt(string));
};

module.exports = plusOne;