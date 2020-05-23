console.log("linked");
window.onload = function() {
  console.log("loaded");
  var heartBtn = document.getElementById('heart');
  var bookmarkBtn = document.getElementById('bookmark');
  console.log(heartBtn, bookmarkBtn);

  heartBtn.onclick = function hearted() {
    console.log("hearted");
    heartBtn.className = "fas fa-heart fa-lg ";
    var articleName = document.getElementById('title');
    console.log(articleName);
  }

  bookmarkBtn.onclick = function bookmarked() {
    console.log("bookmarked");
    bookmarkBtn.className = "fas fa-bookmark fa-lg ";
  }

  openNavBtn = document.getElementById('openSidepanel');
  sideNavigation = document.getElementById('mySideNav');
  console.log(sideNavigation);
  openNavBtn.onclick = function openNav() {
    sideNavigation.style.width = "250px";
    console.log("open side navigation");
  }

  closeNavBtn = document.getElementById('closeSidepanel');
  closeNavBtn.onclick = function closeNav() {
    sideNavigation.style.width = "0px";
    console.log("closed");
  }

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
