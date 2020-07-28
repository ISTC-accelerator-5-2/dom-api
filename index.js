// Books
// https://javascript.info/
// https://eloquentjavascript.net/

// https://github.com/getify/You-Dont-Know-JS -- advanced

// document.write('<h1>hello</h1>');

// for (let i = 0; i < 100; i++)
//   document.write(i, ' ');

// const randomColor = () => Math.floor(Math.random() * 255);
const catPicture =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.washingtonian.com%2Fwp-content%2Fuploads%2F2019%2F02%2Fmilada-vigerova-1295750-unsplash-2048x3072.jpg&f=1&nofb=1";

// const titleElement = document.createElement('title');
// titleElement.innerHTML = 'DOM API';
// document.head.appendChild(titleElement);

// const h1Element = document.createElement('h1');
// h1Element.innerHTML = '123';

const imgElement = document.createElement("img");
imgElement.setAttribute("src", catPicture);
imgElement.classList = "box";
// document.body.appendChild(imgElement);

// const divElement = document.createElement('div');
// divElement.classList = 'box container';
// document.body.appendChild(divElement);
// // divElement.appendChild(h1Element);

// // className selector
// const blueContainer = document.getElementsByClassName('blue-container')[0];
// // blueContainer.appendChild(h1Element);

// // id selector
// const containerDiv = document.getElementById('container-div');
// containerDiv.classList = 'box';

// const randomRed = randomColor();
// const randomGreen = randomColor();
// const randomBlue = randomColor();

// const randomStyle = `background-color: rgb(${randomRed}, ${randomGreen}, ${randomBlue});`;
// containerDiv.setAttribute('style', randomStyle);

// const divElement = document.getElementById("classListExample");
// console.log(divElement.className);

// divElement.classList.add("random-class-name");
// divElement.classList.remove("other-class-1");
// console.log(divElement.classList.contains("random-class-name"));
// console.log(divElement.classList.contains("random-class-name-1"));

// divElement.classList.toggle("random-class-name");
// console.log(divElement.classList);
// divElement.classList.toggle("random-class-name");
// console.log(divElement.classList);
// divElement.classList.toggle("random-class-name");
// console.log(divElement.classList);
// divElement.classList.toggle("random-class-name");
// console.log(divElement.classList);

const container = document.createElement("div");

const otherContainer = document.createElement("div");

otherContainer.appendChild(imgElement);

container.appendChild(otherContainer);

document.body.appendChild(container);
