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

let sanPhamEle = document.getElementById("spdoan");
console.log(sanPhamEle);

sanPhamEle.style.display = "none";
sPELe.onmouseenter = function () {
  sanPhamEle.style.display = "block";
};

let headerContaiELe = document.querySelector(".header-container"); // Sửa thành headerContaiELe
console.log(headerContaiELe);

headerContaiELe.addEventListener("mouseleave", function () {
  sanPhamEle.style.display = "none";
});

let gtEle = document.getElementById("gt");

gtEle.onmouseenter = function () {
  sanPhamEle.style.display = "none";
};
