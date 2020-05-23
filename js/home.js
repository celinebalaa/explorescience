console.log("linked");
var name = prompt("Please enter your name.");
console.log(name);
window.onload = function search() {
  const sciences = document.getElementsByTagName('a');
  console.log(sciences);
  console.log(sciences[1]);
  const searchHere = document.getElementById('searchBox');
  searchHere.addEventListener('keyup', function(event) {
    console.log(event.target.value);
    if (event.keyCode === 13) {
      console.log("Enter is pressed");
      const term = event.target.value.toLowerCase();
      Array.from(sciences).forEach(function(science) {
        const x = science.textContent;
        console.log(x);
        if (x.toLowerCase().indexOf(term) != -1) {
          science.classList.add('active');
        } else {
          science.classList.remove('active');
          console.log("current class removed");
        }
      });
    }
  })

  var welcome = document.getElementById('nameHome');
  welcome.innerHTML += name;

  var nameLogin = document.getElementById('nameLogIn');
  nameLogin.innerHTML = name;

  var passLogin = document.getElementById('showPass');



  var mybutton = document.getElementById("myBtnH");
  window.onscroll = function() {
    scrollFunction()
  };
  console.log("scrolled");

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }
}

function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function showPassLogin() {
  if (passLogin.type === "password") {
    passLogin.type = "text";
  } else {
    passLogin.type = "password";
  }
};
