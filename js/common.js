(function() {
    window.ext = {}

    ext.Tools = {
        guid: function() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +s4() + '-' + s4() + s4() + s4();
        }
    }

    ext.i18n = function(key) {
        return chrome.i18n.getMessage(key);
    }

})();
