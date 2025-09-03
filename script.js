// Hamburger toggle
function toggleMenu() {
  const menu = document.querySelector(".hamburger-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Countdown Timer
function startCountdown() {
  const endDate = new Date("Sep 10, 2025 23:59:59").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
}

startCountdown();
