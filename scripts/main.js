var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function (){
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/fanta.jpg'){
    myImage.setAttribute('src','images/hqdefault.jpg');
  }
  else{
    myImage.setAttribute('src','images/fanta.jpg');
  }
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Vo sos la que va, '+ storedName;
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  var myName = prompt('Ingresa tu nombre walabin.');
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Vo sos la que va, '+ myName;
}
