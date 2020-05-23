console.log('linked');
var modal = document.getElementsByClassName("myModal");
Array.from(modal);
console.log(modal);

var img = document.getElementsByClassName("myImg");
Array.from(img);
console.log(img);

var modalImg = document.getElementsByClassName("imgModal");
Array.from(modalImg);
console.log(modalImg);

var captionText = document.getElementsByClassName("caption");
Array.from(captionText);
console.log(captionText);

for (var i = 0; i < modal.length; i++) {
  img.onclick=function() {
    modal[i].style.display = "block";
    modalImg[i].src = this.src;
    captionText[i].innerHTML = this.alt;
    console.log("The image will appear");
  }
}

for (var j = 0; j < 20; j++) {
  var span = document.getElementsByClassName("close")[j];

  span.onclick=function () {
    modal[i].style.display = "none";
    console.log("closed");
  }
}
