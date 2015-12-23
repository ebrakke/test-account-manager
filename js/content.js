chrome.runtime.onMessage.addListener(
    function(req, sender, sendResponse) {
        if (req.message === 'clicked_browser_action') {
            var href = $("a[href^='http']").eq(0).attr("href");

            console.log(href);
            chrome.runtime.sendMessage({message: 'open_new_tab', url: href});
        }
    }
);
