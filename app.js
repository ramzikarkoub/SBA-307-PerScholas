const hamburgerMenu = document.getElementById("mobilMenu");
const headerNavMobile = document.querySelector(".headerNavMobile");
hamburgerMenu.addEventListener("click", () => {
  headerNavMobile.classList.toggle("active");
});
