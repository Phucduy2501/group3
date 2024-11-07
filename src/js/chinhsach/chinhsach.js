let chinhSachEle = document.getElementById("chinhsach");

console.log(chinhSachEle);

chinhSachEle.style.display = "none";

let cSELe = document.getElementById("cs");

console.log(cSELe);

cSELe.onmouseenter = function () {
  chinhSachEle.style.display = "block";
};

let hederContaiELe = document.querySelector(".header-container");
console.log(hederContaiELe);

hederContaiELe.addEventListener("mouseleave", function () {
  chinhSachEle.style.display = "none";
});

let lHELe = document.getElementById("lh");

lHELe.onmouseenter = function () {
  chinhSachEle.style.display = "none";
};

let sPELe = document.getElementById("sp");

sPELe.onmouseenter = function () {
  chinhSachEle.style.display = "none";
};
