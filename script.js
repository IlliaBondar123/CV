var nav = document.getElementById("links");
console.log(nav);
var links = nav.getElementsByClassName("link");
console.log(links);
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}