window.onload = function search() {
  var articles = document.getElementsByClassName("captionNews");
  console.log(articles);
  console.log(articles[1]);
  articles = Array.from(articles);
  console.log(articles);
  const searchArt = document.getElementById('searchBox');
  var close = document.getElementsByClassName("closebtn");
  searchArt.addEventListener('keyup', function(event) {
    console.log(event.target.value);
    if (event.keyCode === 13) {
      const term = event.target.value.toLowerCase();
      for (var j = 0; j < articles.length; j++) {
        const y = articles[j].textContent;
        console.log(y);
        if (y.toLowerCase().indexOf(term) < 0) {
          console.log("Not on this page");
          noResult = document.getElementById('noSuccess');
          noResult.style.display = "block";
          articles[j].style.opacity = 0;
          articles[j].classList.remove("blink-image");
          for (var i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement;
              div.style.opacity = "0";
              setTimeout(function() {
                div.style.display = "none";
              }, 600);
            }
          }
        } else {
          articles[j].style.opacity = 1;
          articles[j].classList.add("blink-image");
          console.log("it's on this page");
          noResult = document.getElementById('noSuccess');
          noResult.style.display = "none";
          break
        }
      }
    }
  });
  console.log(name);
  var nameArticle = document.getElementById('namePage');
  nameArticle.innerHTML += name;
  console.log(nameArticle);
}
