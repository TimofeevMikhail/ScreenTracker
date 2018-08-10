window.onresize = () => {
  sendMessage(window.innerWidth);
};

window.onload = () => {
  sendMessage(window.innerWidth);
};

chrome.runtime.onMessage.addListener(request => {
  if(request.selectionChanged === "true") {
    sendMessage(window.innerWidth);
  }
});

function sendMessage(width) {
  if(width < 600) {
    chrome.runtime.sendMessage({windowSize : 'xs'});
  }
  else if(width < 960) {
    chrome.runtime.sendMessage({windowSize : 'sm'});
  }
  else if(width < 1280) {
    chrome.runtime.sendMessage({windowSize : 'md'});
  }
  else if(width < 1920) {
    chrome.runtime.sendMessage({windowSize : 'lg'});
  }
  else {
    chrome.runtime.sendMessage({windowSize : 'xl'});
  }
}