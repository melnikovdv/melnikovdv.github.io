function onLoad() {    
  setupHeader();
  showJoke();
};

(window.onload = onLoad);

// some hint to avoid buzzing in templates
function setupHeader() {
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
  } else if ((document.URL == location.origin + "/") || (document.URL == location.origin + "/index.html")){
    $home.className += " active"
  }  
};

function showJoke() {    
  var s = $.getJSON("/assets/data/jokes.json", function(jokes) {
    i = Math.floor(Math.random() * jokes.dev.length);

    var div = document.createElement("div");
    div.className = "sidebar-module sidebar-module-inset";
    
    var p = document.createElement("h4");
    p.innerText = "Dev humour";
    div.appendChild(p);

    p = document.createElement("p");    
    p.innerText = jokes.dev[i];
    div.appendChild(p);    

    document.getElementById("sidebar").appendChild(div);    
  });
  
};


