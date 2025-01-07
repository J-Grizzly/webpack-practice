import "./styles.css";
import { loadHomePage } from "./home";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact";

const html = document.getElementById("content");
const btns = [...document.getElementsByClassName("nav-btn")];
btns.forEach((btn) => {
  console.log(btn.textContent);
  btn.addEventListener("click", (e) => handleClick(e));
});

loadHomePage(html);

console.log(btns);

function handleClick(event) {
  console.log(event.target.textContent);
  html.innerHTML = "";
  if (event.target.textContent === "Home") {
    loadHomePage(html);
  } else if (event.target.textContent === "Menu") {
    loadMenuPage(html);
  } else if (event.target.textContent === "Contact") {
    loadContactPage(html);
  }
}
