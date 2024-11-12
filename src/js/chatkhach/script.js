console.clear("");

const aiResponses = [
  "Cảm ơn bạn đã gửi tin nhắn! Tôi có thể giúp gì cho bạn nữa không?",
  "Ồ, thú vị đấy! Bạn có thể nói thêm không?",
  "Xin lỗi, tôi chưa hiểu rõ. Bạn có thể giải thích thêm được không?",
  "Đây là một thông tin hữu ích. Cảm ơn bạn!",
  "Tôi rất vui khi giúp được bạn. Có gì cần hỗ trợ thêm không?",
  "Bạn muốn biết thêm về điều gì khác nữa không?",
  "Rất tuyệt! Tôi sẽ giúp bạn ngay.",
  "Đó là một câu hỏi hay! Để tôi tìm hiểu thêm nhé.",
];

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const messageText = messageInput.value.trim();

  if (messageText !== "") {
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.innerHTML = `<p>${messageText}</p>`;

    const chatBox = document.getElementById("chatBox");
    chatBox.appendChild(userMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
    messageInput.value = "";

    setTimeout(() => {
      const aiMessage = document.createElement("div");
      aiMessage.classList.add("message", "ai");

      const randomResponse =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];
      aiMessage.innerHTML = `<p>${randomResponse}</p>`;

      chatBox.appendChild(aiMessage);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
  }
}

let iconchatEle = document.getElementById("icon__chat");
console.log(iconchatEle);

let chatKhachEle = document.querySelector(".chatkhach");
console.log(chatKhachEle);

chatKhachEle.style.display = "none";

iconchatEle.onclick = function () {
  chatKhachEle.style.display = "block";
};

let closeChatEle = document.getElementById("closeChat");

closeChatEle.onclick = function () {
  chatKhachEle.style.display = "none";
};
