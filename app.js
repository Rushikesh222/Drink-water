const Smallcups = document.querySelectorAll(".cup-small");
const listers = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

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
}
