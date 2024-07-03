const buttonContainer = document.getElementById('buttonContainer');

buttonContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn')) {
        const buttonClicked = event.target.textContent;
        alert(`Клікнуто на кнопку: ${buttonClicked}`);
    }
});
