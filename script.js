function updateCountdown() {
    const eventDate = new Date("November 4, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML =
            "<h2>JET DAY IS HERE!</h2>";
        return;
    }

    document.getElementById("days").textContent =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((difference / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").textContent =
        Math.floor((difference / (1000 * 60)) % 60);

    document.getElementById("seconds").textContent =
        Math.floor((difference / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);
function updateDigitalClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString();

    document.getElementById("date").textContent =
        now.toDateString();
}

updateDigitalClock();
setInterval(updateDigitalClock, 1000);
function animateCounter(id, target) {
    let count = 0;
    const element = document.getElementById(id);
    const speed = 30;

    const timer = setInterval(() => {
        count++;
        element.textContent = count.toString().padStart(2, "0");

        if (count >= target) {
            clearInterval(timer);
        }
    }, speed);
}

animateCounter("projectCount", 25);
animateCounter("studentCount", 100);