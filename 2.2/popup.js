document.getElementById("speed-button").addEventListener("click", () => {
  const speedValue = parseFloat(document.getElementById("speed-input").value);
  if (isNaN(speedValue) || speedValue <= 0) {
    alert("请输入有效的倍速");
    return;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      {
        action: "setSpeed",
        value: speedValue,
      },
      (response) => {
        if (response && response.success) {
          console.log("倍速设置成功");
        } else {
          console.error("设置倍速失败");
        }
      }
    );
  });
});

document.getElementById("toggleNightMode").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "toggleNightMode" },
      (response) => {
        if (response && response.success) {
          console.log("夜间模式切换成功");
        } else {
          console.error("切换夜间模式失败");
        }
      }
    );
  });
});
