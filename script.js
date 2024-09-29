// contact me emailJS 

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_092p65b';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


// Menu hide/show on scroll
var menuArea = document.querySelector(".menu-area");
var isMenuHidden = false;

document.addEventListener("mousemove", function() {
  if (isMenuHidden) {
      menuArea.classList.remove("hidden");
      isMenuHidden = false;
  }
});

window.addEventListener("scroll", function() {
  if (!isMenuHidden && window.scrollY > 100) {
      menuArea.classList.add("hidden");
      isMenuHidden = true;
  }
});

// back to top button
  const backTopBtn = document.querySelector("[data-back-to-top]");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      backTopBtn.classList.add("active");
    } else {
      backTopBtn.classList.remove("active");
    }
  });


// typing text
document.addEventListener("DOMContentLoaded", function () {
  const typedText = "Disath Damsutha"; 
  const typedName = document.getElementById('typed-name');
  let i = 0;
  let typingDelay = 200; 
  let repeatDelay = 2000; 
  
  function typeWriter() {
    if (i < typedText.length) {
      typedName.textContent += typedText.charAt(i); 
      i++;
      setTimeout(typeWriter, typingDelay); 
    } else {
      
      setTimeout(() => {
        i = 0; 
        typedName.textContent = ''; 
        typeWriter(); 
      }, repeatDelay); 
    }
  }

  typeWriter(); 
});




  document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".nav");
    const hamburger = document.querySelector(".hamburger-menu");

    // Toggle the menu when hamburger icon is clicked
    hamburger.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  });



