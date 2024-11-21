function startRecognition() {
  if ("webkitSpeechRecognition" in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "vi-VN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = function (event) {
      document.getElementById("searchInput").value =
        event.results[0][0].transcript;
    };

    recognition.onerror = function (event) {
      console.error("Lỗi nhận diện giọng nói:", event.error);
    };

    recognition.start();
  } else {
    alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói.");
  }
}

function startRecognition() {
  if ("webkitSpeechRecognition" in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "vi-VN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = function (event) {
      document.getElementById("messageInput").value =
        event.results[0][0].transcript;
    };

    recognition.onerror = function (event) {
      console.error("Lỗi nhận diện giọng nói:", event.error);
    };

    recognition.start();
  } else {
    alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói.");
  }
}

const imageLink = document.getElementById("imageLink");
const fileInput = document.getElementById("fileInput");

// Trigger file input click when the icon is clicked
imageLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default behavior of the <a> tag
  fileInput.click(); // Trigger the hidden file input's click event
});

// Handle the file input change event
fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  if (file) {
    // You can do something with the selected file, e.g., show the image in an <img> tag
    const reader = new FileReader();
    reader.onload = function (e) {
      const imgElement = document.createElement("img");
      imgElement.src = e.target.result;
      document.body.appendChild(imgElement); // This will add the image to the page
    };
    reader.readAsDataURL(file);
  }
});
