const skipLink = document.querySelector('.skip');

document.addEventListener('DOMContentLoaded', function(){
  skipLink.style.display = 'none';
});

const navLinks = document.querySelectorAll('.nav_item a');
navLinks.forEach(link => {
  link.addEventListener('focusin', function() {
    skipLink.style.display = 'block';
  });
});