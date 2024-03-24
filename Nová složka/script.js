const slideshow = document.getElementById("slideshow");

const images = slideshow.getElementsByTagName("img");
let currentImage = 0;

setInterval(() => {
	for (let i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	}

	images[currentImage].style.display = "block";
	currentImage = (currentImage + 1) % images.length;
}, 3000);

var modal = document.getElementById("myModal");
        

var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
  }
}

function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

var database = [
  "pepe.545",
  "vavo.45",
]

function login() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value
  var loginData = username + "." + password

  for (let i = 0; i < database.length; i++) {
    if(loginData == database[i]) {
        console.log("Login sucessful")
        break;
    } else if(i == database.length - 1){
        console.log("Incorrect input")
    }
  }
}