// GETS THE NEEDED CLASSES
const barBtn = document.querySelector(".bar-icon");
const closeBtn = document.querySelector(".close-icon");
const navBar = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

console.log(overlay.style);

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
  navBar.style.right = "-30rem";
});

// GETS OVERLAY MAKES THE NAV CLOSE WHEN IT IS CLICKED ON
// WORKS JUST LIKE closeBtn
overlay.addEventListener("click", () => {
  closeBtn.style.display = "none";
  barBtn.style.display = "block";
  overlay.style.display = "none";
  // RETURNS NAVBAR OUT OF VIEW
  navBar.style.right = "-30rem";
});
