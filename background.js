// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url && tab.url.includes("meet.google.com/")) {
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
          console.log(response);
      });
    }); 
  }
});