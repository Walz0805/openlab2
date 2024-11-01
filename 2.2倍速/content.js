// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.playbackRate) {
    const video = document.querySelector("video");
    const speedList = document.querySelector(
      ".bpx-player-ctrl-playbackrate-menu"
    ); // 获取包含倍速的 ul 列表

    if (video) {
      video.playbackRate = request.playbackRate; // 设置视频倍速

      // 更新倍速列表
      if (speedList) {
        // 检查是否已存在该倍速选项
        const existingItem = Array.from(speedList.querySelectorAll("li")).find(
          (item) => item.textContent === `${request.playbackRate}x`
        );

        // 如果不存在，添加新选项
        if (!existingItem) {
          const listItem = document.createElement("li");
          listItem.textContent = `${request.playbackRate}x`;
          listItem.setAttribute("data-value", request.playbackRate);
          speedList.appendChild(listItem); // 添加倍速选项
        }
      }
    }
  }
});
