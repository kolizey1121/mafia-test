const branches = {
  nizh: {
    title: "Филиал: Нижневартовск",
    bookings: 74,
    checkins: 61,
    revenue: 60390,
    royaltyRate: 15
  },
  strj: {
    title: "Филиал: Стрежевой",
    bookings: 42,
    checkins: 35,
    revenue: 34650,
    royaltyRate: 12
  },
  surgut: {
    title: "Филиал: Сургут",
    bookings: 96,
    checkins: 82,
    revenue: 81180,
    royaltyRate: 18
  }
};

const formatRub = (value) => `${value.toLocaleString("ru-RU")} ₽`;

function renderBranch(id) {
  const branch = branches[id];
  const royalty = Math.round(branch.revenue * branch.royaltyRate / 100);
  const net = branch.revenue - royalty;

  document.querySelector("#branchTitle").textContent = branch.title;
  document.querySelector("#metricBookings").textContent = branch.bookings;
  document.querySelector("#metricCheckins").textContent = branch.checkins;
  document.querySelector("#metricRevenue").textContent = formatRub(branch.revenue);
  document.querySelector("#metricRoyalty").textContent = formatRub(royalty);
  document.querySelector("#flowGross").textContent = formatRub(branch.revenue);
  document.querySelector("#flowRoyalty").textContent = formatRub(royalty);
  document.querySelector("#flowNet").textContent = formatRub(net);
}

document.querySelectorAll(".branch").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".branch").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderBranch(button.dataset.branch);
  });
});
