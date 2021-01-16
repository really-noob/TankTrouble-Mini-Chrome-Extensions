// Create HTML script element
var globalMuteSupport = document.createElement("script");
// Add JavaScript
globalMuteSupport.innerHTML = "TankTrouble.ChatBox.addGlobalChatMessage=function(from,message,chatMessageId){console.log(String(from)+\": \"+message)};alert(\"Global Chat is now muted. Refresh the page to disable this mute.\");";
// Set ID
globalMuteSupport.id = "globalMuteSupport";
// Append the script
document.head.appendChild(globalMuteSupport);