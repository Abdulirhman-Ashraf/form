let next = document.getElementById("next");
let prev = document.querySelector("#prev");
let c2 = document.querySelector("#c2");
let hr = document.querySelector("hr");
let pO = document.getElementById("pOne");
let pT = document.getElementById("pTwo");
next.addEventListener("click", function () {
  pO.style.display = "none";
  pT.style.display = "block";
  c2.style.backgroundColor = " rgba(255, 255, 255, 0.985)";
  hr.style.backgroundColor = " rgba(255, 255, 255, 0.885)";
  hr.style.paddingRight = " 73.6% ";
  hr.style.height = " 10px ";
});
prev.addEventListener("click", function () {
  pO.style.display = "block";
  pT.style.display = "none";
  hr.style.paddingRight = " 0 ";
  hr.style.height = " 10px ";
  hr.style.backgroundColor = " #aab3c4";
  c2.style.backgroundColor = " #aab3c4";
});
