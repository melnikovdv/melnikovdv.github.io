/*
 * some hint to avoid buzzing in templates
 */

(window.onload = function () {  
  var active = "blog-nav-item active";
  var usual = active.split(" ")[0];
  
  $about = document.getElementById("header-about");
  $content = document.getElementById("header-content");
  $home = document.getElementById("header-home")

  $about.className = usual; $content.className = usual; $home.className = usual;
  if (document.URL.match("http://.*/about/")) {
    $about.className += " active"
  } else if (document.URL.match("http://.*/toc/")) {
    $content.className += " active"
  } else {
    $home.className += " active"
  }  
});
