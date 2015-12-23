chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {'message': 'clicked_browser_action'});
    });
});

chrome.runtime.onMessage.addListener(
    function(req, sender, sendResponse) {
        if (req.message === 'open_new_tab') {
            chrome.tabs.create({url: req.url});
        }
    }
);
