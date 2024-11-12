console.clear("");

function sanpham() {
  let sanPhamEle = document.getElementById("spdoan");
  sanPhamEle.style.display = "block";
  document.getElementById("sp").onmouseleave = function () {
    sanPhamEle.style.display = "none";
  };
  let headerContaiELe = document.querySelector(".header-container");
  headerContaiELe.addEventListener("mouseleave", function () {
    sanPhamEle.style.display = "none";
  });
  let gtEle = document.getElementById("gt");
  gtEle.onmouseenter = function () {
    sanPhamEle.style.display = "none";
  };
}
