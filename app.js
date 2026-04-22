const screens = [...document.querySelectorAll(".screen")];
const tabs = [...document.querySelectorAll(".tab")];
const targets = [...document.querySelectorAll("[data-screen-target]")];
const bookingButtons = [...document.querySelectorAll("[data-open-booking]")];
const seatCount = document.querySelector("#seatCount");
const steppers = [...document.querySelectorAll("[data-step]")];

let seats = Number(seatCount.textContent);

function showScreen(name) {
  screens.forEach((screen) => {
    const active = screen.dataset.screen === name;
    screen.classList.toggle("active", active);

    if (active) {
      screen.querySelectorAll(".reveal").forEach((item) => {
        item.style.animation = "none";
        item.offsetHeight;
        item.style.animation = "";
      });
    }
  });

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.screenTarget === name);
  });
}

targets.forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.screenTarget));
});

bookingButtons.forEach((button) => {
  button.addEventListener("click", () => showScreen("booking"));
});

steppers.forEach((button) => {
  button.addEventListener("click", () => {
    seats = Math.max(1, Math.min(8, seats + Number(button.dataset.step)));
    seatCount.textContent = seats;
  });
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
  });
});
