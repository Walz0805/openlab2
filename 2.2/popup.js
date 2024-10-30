document.getElementById("setSpeed").addEventListener("click", () => {
  const speedValue = parseFloat(document.getElementById("speedSelect").value);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "setSpeed",
      value: speedValue,
    });
  });
});

document.getElementById("toggleNightMode").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleNightMode" });
  });
});
