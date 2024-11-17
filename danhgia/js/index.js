document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn form gửi dữ liệu ngay lập tức

  // Xóa các thông báo lỗi cũ
  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  let isValid = false;

  // Lấy các trường dữ liệu
  const ratingInputs = document.getElementsByName("rating");
  const commentField = document.getElementById("comment");

  // Kiểm tra đánh giá (rating)
  let isRatingSelected = false;
  for (const input of ratingInputs) {
    if (input.checked) {
      isRatingSelected = true;
      break;
    }
  }

  // Kiểm tra nếu ít nhất một trong hai được điền
  if (isRatingSelected || commentField.value.trim()) {
    isValid = true;
  } else {
    const form = document.querySelector("form");
    const error = document.createElement("span");
    error.textContent = "Vui lòng chọn số sao hoặc nhập nhận xét.";
    error.classList.add("error-message");
    error.style.color = "red";
    error.style.fontSize = "12px";
    form.appendChild(error);
  }

  // Nếu thông tin hợp lệ
  if (isValid) {
    alert("Đánh giá thành công!");
    this.submit(); // Gửi form nếu mọi thứ ổn
  }
});
