(window.onload = onLoad);

function onLoad() {
  setupHeader();
  showJoke();
}

// some hint to avoid buzzing in templates
function setupHeader() {
  var active = "blog-nav-item active";
  var usual = active.split(" ")[0];

  $about = document.getElementById("header-about");
  $content = document.getElementById("header-content");
  $home = document.getElementById("header-home");
  $reviews = document.getElementById("header-reviews");

  $about.className = usual; $content.className = usual; $home.className = usual;
  if (document.URL.match("http://.*/about/")) {
    $about.className += " active";
  } else if (document.URL.match("http://.*/toc/")) {
    $content.className += " active";
  } else if (document.URL.match("http://.*/reviews/")) {
    $reviews.className += " active";
  } else if ((document.URL == location.origin + "/") || (document.URL == location.origin + "/index.html")){
    $home.className += " active";
  }
}

function showJoke() {
  var s = $.getJSON("/assets/data/jokes.json", function(jokes) {
    i = Math.floor(Math.random() * jokes.dev.length);

    p = document.getElementById("p-joke");
    p.innerText = jokes.dev[i];
  });
}
