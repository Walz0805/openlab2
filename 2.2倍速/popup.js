// popup.js
document
  .getElementById("setSpeedButton")
  .addEventListener("click", function () {
    const speedInput = document.getElementById("speedInput");

    const speed = parseFloat(speedInput.value);
    if (speed > 0) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { playbackRate: speed }); // 发送倍速信息
      });

      speedInput.value = ""; // 清空输入框
    } else {
      alert("请输入一个有效的倍速值！");
    }
  });
