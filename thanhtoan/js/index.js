document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn form gửi dữ liệu ngay lập tức

  // Xóa các thông báo lỗi cũ
  document.querySelectorAll(".error-message").forEach((el) => el.remove());

  let isValid = true;

  // Lấy các trường dữ liệu
  const nameField = document.getElementById("name");
  const addressField = document.getElementById("address");
  const emailField = document.getElementById("email");
  const phoneField = document.getElementById("phone");
  const paymentField = document.getElementById("payment");

  // Hàm thêm thông báo lỗi
  const addError = (field, message) => {
    const error = document.createElement("span");
    error.textContent = message;
    error.classList.add("error-message");
    error.style.color = "red";
    error.style.fontSize = "12px";
    field.insertAdjacentElement("afterend", error);
  };

  // Kiểm tra tên
  if (!nameField.value.trim()) {
    isValid = false;
    addError(nameField, "Họ và tên không được để trống.");
  }

  // Kiểm tra địa chỉ
  if (!addressField.value.trim()) {
    isValid = false;
    addError(addressField, "Địa chỉ không được để trống.");
  }

  // Kiểm tra email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailField.value.trim() || !emailRegex.test(emailField.value)) {
    isValid = false;
    addError(emailField, "Email không hợp lệ.");
  }

  // Kiểm tra số điện thoại
  const phoneRegex = /^\d{10,11}$/;
  if (!phoneField.value.trim() || !phoneRegex.test(phoneField.value)) {
    isValid = false;
    addError(phoneField, "Số điện thoại phải gồm 10-11 chữ số.");
  }

  // Kiểm tra phương thức thanh toán
  if (!paymentField.value.trim()) {
    isValid = false;
    addError(paymentField, "Vui lòng chọn phương thức thanh toán.");
  }

  // Nếu tất cả thông tin hợp lệ
  if (isValid) {
    alert("Thanh toán thành công!");
    this.submit(); // Gửi form nếu mọi thứ ổn
  }
});
