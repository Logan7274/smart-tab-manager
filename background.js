// 追踪標籤訪問時間
let tabAccessTimes = {};

// 監聽標籤激活事件
browser.tabs.onActivated.addListener(activeInfo => {
    tabAccessTimes[activeInfo.tabId] = Date.now();
});

// 監聽標籤更新事件
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        tabAccessTimes[tabId] = Date.now();
    }
});

// 監聽標籤關閉事件
browser.tabs.onRemoved.addListener(tabId => {
    delete tabAccessTimes[tabId];
});

// 定期清理過期數據
setInterval(() => {
    const now = Date.now();
    Object.keys(tabAccessTimes).forEach(tabId => {
        if (now - tabAccessTimes[tabId] > 7 * 24 * 60 * 60 * 1000) { // 7天
            delete tabAccessTimes[tabId];
        }
    });
}, 24 * 60 * 60 * 1000); // 每24小時執行一次 