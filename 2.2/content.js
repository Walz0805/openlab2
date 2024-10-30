let nightMode = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setSpeed") {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = request.value;
    }
  } else if (request.action === "toggleNightMode") {
    nightMode = !nightMode;
    document.body.style.backgroundColor = nightMode ? "black" : "white";
    document.body.style.color = nightMode ? "white" : "black";
  }
});
