// GETS THE NEEDED CLASSES
const barBtn = document.querySelector(".bar-icon");
const closeBtn = document.querySelector(".close-icon");
const navBar = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const navWithDrop = document.querySelectorAll(".nav-with-drop");

// GETS THE MENU IMG
barBtn.addEventListener("click", () => {
  barBtn.style.display = "none";
  closeBtn.style.display = "block";
  overlay.style.display = "block";
  // BRINGS NAVBAR INTO VIEW
  navBar.style.right = "0rem";
});

// GETS THE CLOSE IMG
closeBtn.addEventListener("click", () => {
  closeBtn.style.display = "none";
  barBtn.style.display = "block";
  overlay.style.display = "none";
  // RETURNS NAVBAR OUT OF VIEW
  navBar.style.right = "-150rem";
});

// GETS OVERLAY MAKES THE NAV CLOSE WHEN IT IS CLICKED ON
// WORKS JUST LIKE closeBtn
overlay.addEventListener("click", () => {
  closeBtn.style.display = "none";
  barBtn.style.display = "block";
  overlay.style.display = "none";
  // RETURNS NAVBAR OUT OF VIEW
  navBar.style.right = "-150rem";
});

// GETS NAV-WITH-DROP CLASS
navWithDrop.forEach((element) => {
  element.addEventListener("click", () => {
    // GETS THE li ELEMENT
    const closestLi = element.closest("li");
    const dropdown = closestLi.querySelector(".dropdown");
    const arrowUp = closestLi.querySelector(".arrow-up");
    const arrowDown = closestLi.querySelector(".arrow-down");
    dropdown.classList.toggle("block-display");
    arrowUp.classList.toggle("arrow-upp-display-block");
    arrowDown.classList.toggle("arrow-down-display-none");
  });
});
