var number = prompt("Введіть ціле число:");

if(isNaN(number)) {
    console.log("Введіть коректне число.");
} else {
    number = parseInt(number);

    if(number <= 1) {
        console.log("Введіть число більше за 1.");
    } else {
        var isPrime = true;

        for(var i = 2; i <= Math.sqrt(number); i++) {
            if(number % i === 0) {
                isPrime = false;
                break;
            }
        }

        if(isPrime) {
            console.log(number + " є простим числом.");
        } else {
            console.log(number + " не є простим числом.");
        }
    }
}
