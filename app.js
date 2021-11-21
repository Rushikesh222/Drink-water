const Smallcups = document.querySelectorAll(".cup-small");
const listers = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
upadtebigcups();

Smallcups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});
function highlightCups(idx) {
  if (
    Smallcups[idx].classList.contains("full") &&
    !Smallcups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  Smallcups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  upadtebigcups();
}
function upadtebigcups() {
  const fullcups = document.querySelectorAll(".cup-small.full").length;
  const totalcups = Smallcups.length;
  if (fullcups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullcups / totalcups) * 330}px`;
    percentage.innerText = `${(fullcups / totalcups) * 100}%`;
  }
  if (fullcups === totalcups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    listers.innerText = `${2 - (250 * fullcups) / 1000}L`;
  }
}
