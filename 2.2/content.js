let nightMode = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setSpeed") {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = request.value;
      sendResponse({ success: true });
    } else {
      sendResponse({ success: false });
    }
  } else if (request.action === "toggleNightMode") {
    nightMode = !nightMode;
    if (nightMode) {
      document.body.classList.add("night-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
    sendResponse({ success: true });
  }
});
