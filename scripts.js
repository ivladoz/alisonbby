window.onload = function() {
    // Countdown timer
    let countdownElement = document.getElementById('countdown');
    let time = 9 * 60 + 28; // 9 minutes and 28 seconds in seconds

    setInterval(function() {
        if (time > 0) {
            time--;
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            countdownElement.textContent = `${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;
        }
    }, 1000);

    // Location detection using IPinfo
    fetch('https://ipinfo.io/json?token=bca9478a501110')
        .then(response => response.json())
        .then(data => {
            let city = data.city || "Unknown City";
            document.getElementById('city').textContent = city;
            document.getElementById('stay-city').textContent = city; // Update the stay city
        })
        .catch(() => {
            document.getElementById('city').textContent = "Unable to determine location";
            document.getElementById('stay-city').textContent = "Unknown City"; // Handle error
        });
};

