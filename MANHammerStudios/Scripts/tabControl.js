


var modal = document.getElementById('freebladeModal');

var img = document.getElementById('FreebladeEx');
var modalImg = document.getElementById("freeblade01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
}

var modal2 = document.getElementById('flamerModal');

var img2 = document.getElementById('FlamerEx');
var modalImg2 = document.getElementById("flamer01");
var captionText2 = document.getElementById("fcaption");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
}

var span2 = document.getElementsByClassName("close")[1];
span2.onclick = function () {
  modal2.style.display = "none";
}


function submitContact() {
  document.getElementById("contactCol").submit();
}
