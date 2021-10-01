
function findDigits(n) {
    // Write your code here

    let value = n;
    let countDivisors = 0;
    do{
        let remainder = value % 10;
        value = parseInt( value / 10 + '');

        if((n % remainder) === 0){
            countDivisors++;
        }
    }while (value > 0)

    // console.log(countDivisors);
    return countDivisors;
}

findDigits(10);
