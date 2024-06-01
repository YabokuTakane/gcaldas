var oMenu = "../../assets/imgs/menu-hamburguer.png";
var cMenu = "../../assets/imgs/closed-menu.png";

function showMenu() {
  var x = document.querySelector(".mobile-menu");
  var icon = document.querySelector(".icon");
  if (x.style.display === "block") {
    x.style.display = "none";
    icon.src = oMenu;
  } else {
    x.style.display = "block";
    icon.src = cMenu;
  }
}