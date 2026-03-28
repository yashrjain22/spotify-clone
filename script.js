console.log("Hello, lets get started with js");

async function main() {


    let song = await fetch("http://127.0.0.1:3000/songs");
    let response = await song.text();
    console.log(response);
    let element = document.createElement("div");
    div.innerHtml = response;
    let tds = div.getElementByTagName("td")
    console.log(tds)
}
main(); 