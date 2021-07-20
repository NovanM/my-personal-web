

// Three js 
const clock = new THREE.Clock()
const loader = new THREE.TextureLoader()



// Content Personal Web
window.onscroll = () => myNav();

var navbar = document.querySelector(".navbar");
var navlink = document.querySelectorAll(".nav-link");
var navbrand = document.querySelector(".navbar-brand")
var stickyPos = navbar.offsetTop;

function myNav() {
  if (window.pageYOffset > stickyPos) {
    navbar.classList.add("sticky");
    navbrand.classList.add("text-dark")
    for (let i = 0; i < navlink.length; i++) {
      navlink[i].classList.add("text-dark");
    }

  } else {
    navbar.classList.remove("sticky");
    navbrand.classList.remove("text-dark")
    for (let i = 0; i < navlink.length; i++) {
      if (navlink[i].classList.contains("text-dark")) {
        navlink[i].classList.remove("text-dark");
      }
    }
  }
}



const modalNew = document.getElementById('modalNew');
console.log(modalNew);
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
modalNew.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.classList.add('modal-content');
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        
        lightbox.appendChild(img);

        const caption = document.createElement('div');
        caption.id = 'caption';
        caption.innerHTML = image.alt;
        lightbox.appendChild(caption);
    });
});



lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active');
});


