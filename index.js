var menu = document.getElementById("menu");
var ham = document.getElementById("ham");

ham.addEventListener("click", () => {
  menu.classList.toggle("show");
  menu.classList.add("mob");
  if (menu.classList[1] !== "show") {
    menu.classList.remove("mob");
  }
});
