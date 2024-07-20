let startTime = 85;

let timerInterval = setInterval(() => {
    let minutes = Math.floor(startTime / 60);
    let seconds = startTime % 60;
    
    if (startTime <= 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').textContent = 'Час вийшов!';
    } else {
        document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        startTime--;
    }
}, 1000);
