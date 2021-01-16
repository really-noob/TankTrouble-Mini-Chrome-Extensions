// Chrome Extension click listener
chrome.browserAction.onClicked.addListener(function (tab) {
	// Get current tab url
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true}, function (tabs) {
	    var url = tabs[0].url;
	    // Check if the domain is part of tanktrouble.com
	    if ((url.includes("https://tanktrouble.com/")) || (url.includes(".tanktrouble.com/"))) {
	    	// Execute javascript from script.js
	    	chrome.tabs.executeScript(tab.ib, {
	    		file: 'script.js'
	    	});
	    } else {
	    	alert("This extension only supports TankTrouble domains.");
	    };
	});
});