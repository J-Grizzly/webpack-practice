export const loadMenuPage = function (target) {
  // title
  const titleEl = document.createElement("h1");
  titleEl.textContent = "Eat up fatty";
  // img
  const imgEl = document.createElement("img");
  //   imgEl.src =
  // "https://plus.unsplash.com/premium_photo-1664303218668-03fa4e612038?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // paragraph
  const textEl = document.createElement("p");
  textEl.textContent = "pancakes";

  //   appends
  target.appendChild(titleEl);
  target.appendChild(imgEl);
  target.appendChild(textEl);
};
