// ==UserScript==
// @name        Hello World
// @namespace   https://nico.las
// @include https://*.google.be/*
// @version     1
// ==/UserScript==

var input=document.createElement("input");
input.type="button";
input.value="Btn NZ";
input.onclick = showAlert;
input.setAttribute("style", "font-size:18px;position:absolute;top:60px;left:20px;");
document.body.appendChild(input); 
 
function showAlert(){
    // alert("Vous venez d'appuyer sur le bonton!");
    alert(testNum(-5));
}

function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positif';
  } else {
    result = 'Négatif';
  }
  return result;
}

console.log(testNum(-5));
