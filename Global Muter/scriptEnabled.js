// Get the globalMuteScript
var globalMuteElement = document.getElementById("globalMuteSupport");

if (globalMuteElement) {
	// Modify the script
	globalMuteElement.innerHTML = "";
	globalMuteElement.remove();
} else {
	// Do nothing...
};

var globalMuteSupport = document.createElement("script");
// Add JavaScript
globalMuteSupport.innerHTML = "TankTrouble.ChatBox.addGlobalChatMessage=function(from,message,chatMessageId){console.log(String(from)+\": \"+message)};TankTrouble.ChatBox.addSystemMessage(0, \"Global Chat Muter Enabled!\");";
// Set ID
globalMuteSupport.id = "globalMuteSupport";
// Append the script
document.head.appendChild(globalMuteSupport);