const N = parseInt(prompt("Введіть ціле число N:"));

if (isNaN(N)) {
    console.log("Введене значення не є числом.");
} else {
    console.log(`Цілі числа від 1 до 100, квадрат яких не перевищує числа ${N}:`);
    
    for (let i = 1; i <= 100; i++) {
        const square = i * i;
        
        if (square <= N) {
            console.log(i);
        } else {
            break;
        }
    }
}
