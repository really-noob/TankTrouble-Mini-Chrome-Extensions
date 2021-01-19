(function() {
	// Get the global mute option
	chrome.storage.local.get(['globalMute'], function (result) {
		// Same as the scriptEnabled.js file
		var scriptEnabled = "var globalMuteElement=document.getElementById(\"globalMuteSupport\");if(globalMuteElement){globalMuteElement.innerHTML=\"\";globalMuteElement.remove();};var globalMuteSupport=document.createElement(\"script\");globalMuteSupport.innerHTML=\"TankTrouble.ChatBox.addGlobalChatMessage=function(from,message,chatMessageId){console.log(String(from)+\\\": \\\"+message)};TankTrouble.ChatBox.addSystemMessage(0, \\\"Global Chat Muter Enabled!\\\");\";globalMuteSupport.id=\"globalMuteSupport\";document.head.appendChild(globalMuteSupport);";
		// Same as the scriptDisabled.js file
		var scriptDisabled = "var globalMuteElement=document.getElementById(\"globalMuteSupport\");if(globalMuteElement){globalMuteElement.innerHTML=\"\";globalMuteElement.remove()};var globalMuteSupport=document.createElement(\"script\");globalMuteSupport.innerHTML=\"TankTrouble.ChatBox.addGlobalChatMessage=function(from,message,chatMessageId){var playerIds=from;this._lookUpUsernamesAndAddChatMessage(from,null,false,\\\"#68c5ff\\\",\\\"#333333\\\",message,chatMessageId);};TankTrouble.ChatBox.addSystemMessage(0, \\\"Global Chat Muter Disabled!\\\");\";globalMuteSupport.id=\"globalMuteSupport\";document.head.appendChild(globalMuteSupport);";
		// Create a new script element
		var globalMuteSupport = document.createElement("script");
		if (result.globalMute) {
			// Set the script to the enabled script
			globalMuteSupport.innerHTML = scriptEnabled;
		} else {
			// Set the script to the disabled script
			globalMuteSupport.innerHTML = scriptDisabled;
		}
		// Give it an id
		globalMuteSupport.id = 'globalMuteSupport';
		// Wait 2s then add it to the document
		setTimeout(function() { document.head.appendChild(globalMuteSupport); }, 2000);
	});
})();