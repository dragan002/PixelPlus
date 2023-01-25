

// function changePicture(color) {
// const socket = document.getElementById('socketImg');
// const tan = document.getElementById('tan');
// const white = document.getElementById('white');
// const brown = document.getElementById('brown');
// const yellow = document.getElementById('yellow');
// const wheat = document.getElementById('wheat');

// let colorNameElement = document.getElementById("color-name");
//   colorNameElement.innerHTML = color;

// socket.style.display="block";
// tan.style.display = "none";
// white.style.display = "none";
// brown.style.display = "none";
// yellow.style.display = "none";
// wheat.style.display = "none";


// if (color === "tan") {
//     socket.src = tan.src;
//   } else if (color === "white") {
//     socket.src = white.src;
//   } else if (color === "brown") {
//     socket.src = brown.src;
//   } else if (color === "yellow") {
//     socket.src = yellow.src;
//   } else if (color === "wheat") {
//     socket.src = wheat.src;
//   }
// }




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
  



  let currentFinish = "tan";
  let colorNameElement = document.getElementById("color-name");
  colorNameElement.innerHTML = currentFinish;
  
  const socket = document.getElementById('socketImg');
  const tan = document.getElementById('tan');
  const white = document.getElementById('white');
  const brown = document.getElementById('brown');
  const yellow = document.getElementById('yellow');
  const wheat = document.getElementById('wheat');
  const colors = document.querySelectorAll('.colors div');

  let currentIndexColor = 0;
  colors[currentIndexColor].style.transform = 'scale(1.3)';
  
  socket.style.display = "block";
  tan.style.display = "none";
  white.style.display = "none";
  brown.style.display = "none";
  yellow.style.display = "none";
  wheat.style.display = "none";
  
  function changePicture() {
    if (currentFinish === "tan") {
      socket.src = tan.src;
      currentFinish = "white";
    } else if (currentFinish === "white") {
      socket.src = white.src;
      currentFinish = "brown";
    } else if (currentFinish === "brown") {
      socket.src = brown.src;
      currentFinish = "yellow";
    } else if (currentFinish === "yellow") {
      socket.src = yellow.src;
      currentFinish = "wheat";
    } else if (currentFinish === "wheat") {
      socket.src = wheat.src;
      currentFinish = "tan";
    }
    
  }

  colors[currentIndex].style.transform = 'scale(1.3)';
  function changeFinish() {
    colors.forEach(color => {
      color.style.transform = 'scale(1)';
    });
  
  
    colors[currentIndex].style.transform = 'scale(1.3)';
  
   
    socketImg.src = `img/${colorNames[currentIndex]}.jpg`;
  
    currentIndex++;
    if(currentIndex >= colors.length) {
      currentIndex = 0;
    }
    
    colors[currentIndex].style.transform = 'scale(1.3)';
  }
  setInterval(changeFinish, 2000);
  setInterval(changePicture, 2000);

  

  