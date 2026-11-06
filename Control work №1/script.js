const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
};

console.log(containsOnlyDigits("12345")); // true
console.log(containsOnlyDigits("12a45")); // false
console.log(containsOnlyDigits("123abc")); // false
console.log(containsOnlyDigits("")); // false