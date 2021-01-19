// Get the global mute option
chrome.storage.local.get(['globalMute'], function (result) {
	// No result
	if (!result) {
		// Set the option to false
		chrome.storage.local.set({ globalMute: false }, function () { });
	// Global mute enabled
	} else if (result.globalMute) {
		// Change the icon to enabled
		chrome.browserAction.setIcon({path: "./icons/ON_32x32.png"});
	// Global mute disabled
	} else {
		// Change the icon to enabled
		chrome.browserAction.setIcon({path: "./icons/OFF_32x32.png"});
	}
});


// Chrome Extension click listener
chrome.browserAction.onClicked.addListener(function (tab) {
	// Get current tab url
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
		var url = tabs[0].url;
		// Check if the domain is part of tanktrouble.com
		if ((url.includes("https://tanktrouble.com/")) || (url.includes(".tanktrouble.com/"))) {
			// Reverse the enabled option
			chrome.storage.local.get(['globalMute'], function (result) {
				if (result.globalMute) {
					chrome.storage.local.set({ globalMute: false }, function () { });

					// Change the icon to enabled
					chrome.browserAction.setIcon({path: "./icons/OFF_32x32.png"});
					// Execute javascript from scriptDisabled.js
					chrome.tabs.executeScript({
						file: 'scriptDisabled.js'
					});
				} else {
					chrome.storage.local.set({ globalMute: true }, function () { });
					// Change the icon to enabled
					chrome.browserAction.setIcon({path: "./icons/ON_32x32.png"});
					// Execute javascript from scriptEnabled.js
					chrome.tabs.executeScript({
						file: 'scriptEnabled.js'
					});
				}
			});

		} else {
			alert("This extension only supports TankTrouble domains.");
		}
	});
});