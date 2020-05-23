console.log('linked');

function checkMe() {
  var name1 = document.getElementById('username1');
  var name2 = document.getElementById('username2');
  var alertusername = document.getElementById('userdiff');
  var password1 = document.getElementById('password1');
  var password2 = document.getElementById('password2');
  var alertpass = document.getElementById('passdiff');
  var success = document.getElementById('match')
  if (name1.value != name2.value) {
    alertusername.style.display = 'block';
    console.log('username not matched');
    return false;
  } else if (password1.value != password2.value) {
    alertpass.style.display = 'block';
    console.log('password not matched');
    return false;
  } else {
    alertusername.style.display = 'none';
    alertpass.style.display = 'none';
    success.style.display = 'block';
    console.log('ALl right');
  }
}

function addNotify() {
  var alertnotify = document.getElementById('nonotify');
  if (document.getElementById('yesNews').checked) {
    document.getElementById('wantNews').style.display = "inline";
    document.getElementById('typeNews').setAttribute('required', true);
    console.log("Want News");
    alertnotify.style.display = "block";
  } else if (document.getElementById('noNews').checked) {
    document.getElementById('wantNews').style.display = "none";
    document.getElementById('typeNews').removeAttribute('required');
    alertnotify.style.display = "none";
    console.log("Doesn't want news");
  }
}

function checkNotify() {
  var alertnotify = document.getElementById('nonotify');
  if (document.getElementById('emailnotify').checked || document.getElementById('emailnotify').checked) {
    console.log("checked");
    alertnotify.style.display = "none";
  } else {
    console.log("not checked");
    alertnotify.style.display = "block";

  }
}

function showPass() {
  if (password1.type === "password") {
    password1.type = "text";
  } else {
    password1.type = "password";
  }
}

function showPass2() {
  if (password2.type === "password") {
    password2.type = "text";
  } else {
    password2.type = "password";
  }
}


window.onload = function closealerts() {
  var close = document.getElementsByClassName("closebtnalert");
  console.log(close);
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var alertbox = this.parentElement;
      console.log("closed");
      alertbox.style.display = "none";
      setTimeout(function() {
        alertbox.style.display = "none";
        console.log("timed out");
      }, 100);
    }
  }
}
