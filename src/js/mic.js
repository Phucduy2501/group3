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
