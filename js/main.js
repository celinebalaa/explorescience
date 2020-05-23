console.log("linked");
var myButton = document.getElementsByClassName("myBtn");
console.log(myButton);
Array.from(myButton);
console.log(myButton);
window.onscroll = function() {
  scrollFunction();
};
console.log("scrolled");
var navbar = document.getElementsByClassName("topnav");
console.log(navbar);

function scrollFunction() {
  for (var i = 0; i < myButton.length; i++) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myButton[i].style.display = 'block';
      navbar[i].classList.add('fixed');
    } else {
      myButton[i].style.display = 'none';
      navbar[i].classList.remove('fixed');
    }
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function responsivenav() {
  var x = document.getElementById("myTopnav");
  var btnNav = document.getElementById('topnavBtn');
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
