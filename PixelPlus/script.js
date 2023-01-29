

document.getElementById("specification").addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById("specification").scrollIntoView({behavior: 'smooth'});
});

document.getElementById("contact").addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
});

var phoneNumber = document.getElementById("phone-number");
phoneNumber.style.cursor = "pointer";
phoneNumber.onclick = function() {
  window.location.href = "tel:" + this.innerText;
}


var emailAddress = document.getElementById("email-address");
  emailAddress.style.cursor = "pointer";
  emailAddress.onclick = function() {
  window.location.href = "mailto:" + this.innerText;
  }

  /*Corousel for pictures */
  const images = document.querySelectorAll('.images-container img');
  const dots = document.querySelectorAll('.dots .singleDots');
  
  let currentIndex = 0;
  
  images[currentIndex].style.display = 'block';
  images[currentIndex].style.transform = 'scale(1.3)';
  images[currentIndex].style.opacity = '100%';
  dots[currentIndex].style.backgroundColor = 'white';
  dots[currentIndex].style.transform = 'scale(1.3)';
  
  function carousel() {
      images[currentIndex].style.transform = 'scale(1)';
      images[currentIndex].style.opacity = '40%';
      dots[currentIndex].style.transform = 'scale(1)';
      dots[currentIndex].style.backgroundColor = 'white';
  
      currentIndex++;
      
      if(currentIndex >= images.length) {
        currentIndex = 0;
      }
  
      images[currentIndex].style.display = 'block';
      images[currentIndex].style.transform = 'scale(1.3)';
      images[currentIndex].style.opacity = '100%';
      dots[currentIndex].style.transform = 'scale(1.3)';
      dots[currentIndex].style.backgroundColor = 'white';
  }
  let timer = setInterval(carousel, 2000);
  

  // finish
  



  const currentFinish = "tan";  
const socket = document.getElementById('socketImg');
const tan = document.getElementById('tan');
const white = document.getElementById('white');
const brown = document.getElementById('brown');
const yellow = document.getElementById('yellow');
const wheat = document.getElementById('wheat');
const colors = document.querySelectorAll('.colors div');

socket.style.display = "block";
tan.style.display = "none";
white.style.display = "none";
brown.style.display = "none";
yellow.style.display = "none";
wheat.style.display = "none";

function changePicture(color) {
  if (color === "tan") {
    socket.src = tan.src;
  } else if (color === "white") {
    socket.src = white.src;
  } else if (color === "brown") {
    socket.src = brown.src;
  } else if (color === "yellow") {
    socket.src = yellow.src;
  } else if (color === "wheat") {
    socket.src = wheat.src;
  } 
}



  