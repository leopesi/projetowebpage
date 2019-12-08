
// Replace paragrath h1
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Empório do Ciclista.js';

// Image switcher code
let myImage = document.querySelector('img');
myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'projetowebpage/imagens/logo.gif') {
    myImage.setAttribute ('src','projetowebpage/imagens/logo2.gif');
  } else {
    myImage.setAttribute ('src','projetowebpage/imagens/logo.gif');
  }
}

// Pop-up early
let minhaVariavel = document.querySelector ('h1');
alert('hello!');

// Pop-up touch
document.querySelector('a').onclick = function() {
    alert('Ouch! Stop poking me!');
}
