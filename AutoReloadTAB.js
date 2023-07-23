// ==UserScript==
// @name     		TAB Auto Reload
// @version  		1
// @description Recharge les pages à rythme régulier
// @grant       none
// ==/UserScript==

// ZANDARIN Nicolas - 20/07/2023

 var numMinutes = 0.1;
// window.setTimeout("document.location.reload();", numMinutes*60*1000);

setTimeout(function(){location.reload(); }, numMinutes*60*1000);



