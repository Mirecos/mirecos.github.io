console.log("Le fichier TypeScript est chargé !");

const liste = <HTMLInputElement>document.querySelector('.liste');
const input = <HTMLInputElement>document.querySelector('#activite');
const register = <HTMLInputElement>document.querySelector('.register');
const title = <HTMLInputElement>document.querySelector('.title');

const url='https://www.manga-place.fr/test.txt';

register.addEventListener("click",add)



function add(){
    const value = input.value;
    console.log(value);
    

    liste.innerHTML+=`${value} <br>`
}

function getData() {
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", url, false); // true for asynchronous 
    xmlHttp.send();
    return xmlHttp.responseText

}

function addData(data : string) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url, false); // true for asynchronous 
    xmlHttp.setRequestHeader("Content-Type", "text/plain");
    xmlHttp.send(data);
    console.log("test");
    
}

title.textContent = getData()
addData("contenu")