chrome.action.onClicked.addListener((tab) => {
  console.log('Extension icon clicked. Attempting to inject content script.');
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  }, () => {
    if (chrome.runtime.lastError) {
      console.error('Error injecting script: ', chrome.runtime.lastError.message);
    } else {
      console.log('Content script injected successfully.');
    }
  });
});