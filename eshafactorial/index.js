exports.factorial=function(n){
    if (n === 0 || n === 1) {
        return 1;
    } else if (n < 0) {
        return "Factorial is not defined for negative numbers";
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

}