chrome.webRequest.onBeforeRequest.addListener(
    function (info) {
        const matches = info.url.match(/^https:\/\/www.google.com\/search\?q=?[^&]*/);
        if (matches.length) {
            const matchedString = matches[0];
            if (matchedString.includes('-site%3Aquora.com')) {
                return;
            } else {

                const redirectUrl = matches + '+-site%3Aquora.com' + info.url.substring(matchedString.length);

                return { redirectUrl };
            }

        }
        return;

    },

    {
        urls: [
            "https://*.google.com/*"
        ],
        types: ['main_frame']
    },

    ["blocking"]
);
