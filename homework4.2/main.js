userNumber = prompt("Введить тризначне число")

if (userNumber[0] === userNumber[1] && userNumber[1] === userNumber[2] ) {
   alert('Всі цифри однакові')
} else if (userNumber[0] === userNumber[1] || userNumber[1] === userNumber[2] ){
   alert('Серед цифр є однакові')
} else{
   alert('Серед цифр нема однакових')
}