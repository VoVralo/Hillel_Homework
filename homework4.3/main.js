var yearOfBirth = prompt("Введіть рік вашого народження:");
var city = prompt("Введіть місто, де ви живете:");
var favoriteSport = prompt("Введіть ваш улюблений вид спорту:");

var currentYear = new Date().getFullYear();
var age = currentYear - parseInt(yearOfBirth);

var capitalCities = ["Київ", "Вашингтон", "Лондон"];
var isCapital = capitalCities.includes(city);

var message;
if (isCapital) {
    if (city === "Київ") {
        message = "Ти живеш у столиці України...";
    } else if (city === "Вашингтон") {
        message = "Ти живеш у столиці США...";
    } else if (city === "Лондон") {
        message = "Ти живеш у столиці Великої Британії...";
    }
} else {
    message = "Ти живеш у місті " + city + "...";
}

alert("Твій вік: " + age + " років.\n" + message + "\nТвій улюблений вид спорту: " + favoriteSport);
