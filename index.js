console.log("Le fichier TypeScript est chargé !");
var liste = document.querySelector('.liste');
var input = document.querySelector('#activite');
var register = document.querySelector('.register');
var title = document.querySelector('.title');
var url = 'https://www.manga-place.fr/test.txt';
register.addEventListener("click", add);
function add() {
    var value = input.value;
    console.log(value);
    liste.innerHTML += "".concat(value, " <br>");
}
function getData() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // true for asynchronous 
    xmlHttp.send();
    return xmlHttp.responseText;
}
function addData(data) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url, false); // true for asynchronous 
    xmlHttp.setRequestHeader("Content-Type", "text/plain");
    xmlHttp.send(data);
    console.log("test");
}
title.textContent = getData();
addData("contenu");
