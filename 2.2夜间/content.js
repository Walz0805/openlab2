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
    document.documentElement.style.setProperty("--Wh0", "#000000");
    document.documentElement.style.setProperty("--graph_bg_thin", "#000000");
    document.documentElement.style.setProperty("--line_light", "#000000");
    document.documentElement.style.setProperty("--graph_bg_regular", "#000000");
    document.documentElement.style.setProperty("--bg2", "#000000");
    document.documentElement.style.setProperty("--line_regular", "#000000");
    document.documentElement.style.setProperty("--graph_bg_thick", "#000000");
    document.documentElement.style.setProperty("--bg1_float", "#000000");
    document.documentElement.style.setProperty("--bg3", "#000000");
    document.documentElement.style.setProperty("--Ga1", "#000000");
    document.documentElement.style.setProperty("--bg2_floa", "#000000");
    const elements = document.querySelectorAll("a, h1, h2, h3, p");
    elements.forEach((element) => {
      element.style.setProperty("color", "#FFF", "important");
    });
  } else {
    document.documentElement.style.setProperty("--Wh0", "#FFFFFF");
    document.documentElement.style.setProperty("--graph_bg_thin", "#FFFFFF");
    document.documentElement.style.setProperty("--line_light", "#FFFFFF");
    document.documentElement.style.setProperty("--graph_bg_regular", "#FFFFFF");
    document.documentElement.style.setProperty("--bg2", "#FFFFFF");
    document.documentElement.style.setProperty("--graph_bg_thick", "#FFFFFF");
    document.documentElement.style.setProperty("--line_regular", "#FFFFFF");
    document.documentElement.style.setProperty("--bg1_float", "#FFFFFF");
    document.documentElement.style.setProperty("--bg3", "#FFFFFF");
    document.documentElement.style.setProperty("--Ga1", "#FFFFFF");
    document.documentElement.style.setProperty("--bg2_floa", "#FFFFFF");
    const elements = document.querySelectorAll("a, h1, h2, h3, p");
    elements.forEach((element) => {
      element.style.setProperty("color", "#000", "important");
    });
  }
  const allElements = document.querySelectorAll("#page-index");
  allElements.forEach((element) => {
    element.style.setProperty("color", enabled ? "#FFF" : "#000", "important");
  });
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
