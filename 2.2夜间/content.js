let nightMode = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleNightMode") {
    nightMode = !nightMode;
    toggleNightMode(nightMode);
    sendResponse({ success: true });
  }
});

function toggleNightMode(enabled) {
  if (enabled) {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#FFF";
    const elements = document.querySelectorAll("a, h1, h2, h3, p");
    elements.forEach((element) => {
      element.style.color = "#FFF";
    });
  } else {
    document.body.style.backgroundColor = "#FFF";
    document.body.style.color = "#000";
    const elements = document.querySelectorAll("a, h1, h2, h3, p");
    elements.forEach((element) => {
      element.style.color = "#000";
    });
  }
}

// 根据系统时间自动切换模式
function checkTimeForAutoToggle() {
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) {
    nightMode = true;
    toggleNightMode(nightMode);
  }
}

checkTimeForAutoToggle();
