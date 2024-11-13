console.clear("");

let shoppingEle = document.getElementById("dathangdoan");

console.log(shoppingEle);

let xmarkEle = document.getElementById("xmarkk");
console.log(xmarkEle);

let giohangELe = document.getElementById("giohangdoan");

console.log(giohangELe);

giohangELe.style.display = "none";

xmarkEle.onclick = function () {
  giohangELe.style.display = "none";
};

shoppingEle.onclick = function () {
  giohangELe.style.display = "block";
};
