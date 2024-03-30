let next = document.getElementById("next");
let prev = document.querySelector("#prev");
let save = document.querySelector("#save");
let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let hr = document.querySelector("hr");
let pO = document.getElementById("pOne");
let pT = document.getElementById("pTwo");
next.addEventListener("click", function () {
  pO.style.display = "none";
  pT.style.display = "block";
  c2.style.backgroundColor = " rgba(255, 255, 255, 0.885)";
  hr.style.backgroundColor = " rgba(255, 255, 255, 0.885)";
});
prev.addEventListener("click", function () {
  pO.style.display = "block";
  pT.style.display = "none";
  hr.style.backgroundColor = " #d7adb2";
  c2.style.backgroundColor = " #d7adb2";
});
