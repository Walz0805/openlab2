chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.playbackRate) {
    let adjustedPlaybackRate = request.playbackRate;

    // 如果倍速是整数，转换为小数点后一位的形式
    if (Number.isInteger(request.playbackRate)) {
      adjustedPlaybackRate = parseFloat(request.playbackRate).toFixed(1);
    }

    const video = document.querySelector("video");
    const speedList = document.querySelector(
      ".bpx-player-ctrl-playbackrate-menu"
    ); // 获取包含倍速的 ul 列表

    if (video) {
      video.playbackRate = parseFloat(adjustedPlaybackRate); // 设置视频倍速

      // 更新倍速列表
      if (speedList) {
        // 检查是否已存在该倍速选项
        const existingItem = Array.from(speedList.querySelectorAll("li")).find(
          (item) => item.textContent === `${adjustedPlaybackRate}x`
        );

        // 如果不存在，添加新选项
        if (!existingItem) {
          const listItem = document.createElement("li");
          listItem.textContent = `${adjustedPlaybackRate}x`;
          listItem.setAttribute("data-value", adjustedPlaybackRate);
          listItem.style.cursor = "pointer";
          speedList.appendChild(listItem); // 添加倍速选项
        }
      }
    }
  }
});
