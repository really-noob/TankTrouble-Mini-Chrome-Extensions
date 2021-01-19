// Get the globalMuteScript
var globalMuteElement = document.getElementById("globalMuteSupport");

if (globalMuteElement) {
    // Modify the script
    globalMuteElement.innerHTML = "";
    globalMuteElement.remove()
} else {
	// Do nothing
};

var globalMuteSupport = document.createElement("script");
// Add JavaScript
globalMuteSupport.innerHTML = "TankTrouble.ChatBox.addGlobalChatMessage=function(from,message,chatMessageId){var playerIds=from;this._lookUpUsernamesAndAddChatMessage(from,null,false,\"#68c5ff\",\"#333333\",message,chatMessageId);};TankTrouble.ChatBox.addSystemMessage(0, \"Global Chat Muter Disabled!\");";
// Set ID
globalMuteSupport.id = "globalMuteSupport";
// Append the script
document.head.appendChild(globalMuteSupport);