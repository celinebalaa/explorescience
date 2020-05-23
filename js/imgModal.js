window.onload = function tryModal() {
  console.log('linked');
var modal = document.getElementById("myModal");
console.log(modal);
var img = document.getElementById("myImg");
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");

img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
}
