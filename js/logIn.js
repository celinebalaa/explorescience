console.log("linked");
console.log(name);
let namehere = name;
window.onload = function displayName(name) {
  let yourName = document.getElementById("nameLogIn");
  console.log(name);
  yourName.innerHTML += namehere;
  var passLogin = document.getElementById('passLogin');
  passLogin.addEventListener("onclick", function (passLogin){
    if (passLogin.type === "password") {
      passLogin.type = "text";
    } else {
      passLogin.type = "password";
    }
  });
  console.log("it worked");
}
