let myImage = document.querySelector('img');

myImage.onclick = function() {
let mySrc = myImage.getAttribute('src');
if(mySrc === '../images/cover-twitter.png') {
myImage.setAttribute('src', '../images/logo1.png');
} else {
myImage.setAttribute('src', '../images/cover-twitter.png')
}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('הכנס שם משתמש');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `פיגומים, ${myName}`;
    }
  }
  
  myButton.onclick = function() {
    setUserName();
  }