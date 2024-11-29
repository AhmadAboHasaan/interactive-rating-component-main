const thankYouState = document.body.querySelector(".Thank-you-state");
const componantState = document.body.querySelector(".Rating-state");
const submetBtn = document.body.querySelector(".btn");
const ratings = document.body.querySelectorAll(".rating");
let selectedRating;
addEventListener("click", (event) => {
  if (event.target.classList.contains("rating")) {
    ratings.forEach((elm) => {
      elm.classList.remove("active");
    });
    event.target.classList.add("active");
    selectedRating = event.target;
  }
});

submetBtn.addEventListener(`click`, () => {
  if (selectedRating) {
    document.body.querySelector(".selected-rating").textContent =selectedRating.textContent;
    thankYouState.style.display = "flex";
    componantState.style.display = "none";
  } else {
    alert("select rating");
  }
});
