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
  navBar.style.right = "-100rem";
});

// GETS OVERLAY MAKES THE NAV CLOSE WHEN IT IS CLICKED ON
// WORKS JUST LIKE closeBtn
overlay.addEventListener("click", () => {
  closeBtn.style.display = "none";
  barBtn.style.display = "block";
  overlay.style.display = "none";
  // RETURNS NAVBAR OUT OF VIEW
  navBar.style.right = "-100rem";
});

// TO MAKE NAV ON MOBILE CLICKABLE AND NOT HOVER
function checkMediaQuery() {
  // If the inner width of the window is less or equal to 768px
  if (window.innerWidth <= 1180) {
    // Then log this message to the console
    console.log("Media Query Matched!");
    navWithDrop.forEach((element) => {
      element.addEventListener("click", () => {
        const closestLi = element.closest("li");
        const dropdown = closestLi.querySelector(".dropdown");
        const arrowUp = closestLi.querySelector(".arrow-up");
        const arrowDown = closestLi.querySelector(".arrow-down");
        dropdown.classList.toggle("block-display");
        arrowUp.classList.toggle("arrow-upp");
        arrowDown.classList.toggle("arrow-downn");
      });
    });
  }
}

// TO CHECK WHEN THE PAGE LOADS
window.onload = checkMediaQuery();

// TO CHECK WHEN WINDOW RESIZES
window.addEventListener("resize", checkMediaQuery);
