chrome.runtime.onMessage.addListener(request => {
  if(request.windowSize === 'xs') {
    chrome.browserAction.setIcon({
      path: {
        "48": './icons/icon_xs.png'
      }
    });
  }
  else if(request.windowSize === 'sm') {
    chrome.browserAction.setIcon({
      path: {
        "48": './icons/icon_sm.png'
      }
    });
  }
  else if(request.windowSize === 'md') {
    chrome.browserAction.setIcon({
      path: {
        "48": './icons/icon_md.png'
      }
    });
  }
  else if(request.windowSize === 'lg') {
    chrome.browserAction.setIcon({
      path: {
        "48": './icons/icon_lg.png'
      }
    });
  }
  else if(request.windowSize === 'xl') {
    chrome.browserAction.setIcon({
      path: {
        "48": './icons/icon_xl.png'
      }
    });
  }
});

chrome.tabs.onSelectionChanged.addListener(() => {
  chrome.tabs.query({active: true, currentWindow: true},tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {selectionChanged: "true"});
  });
});