

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const clientPrev = document.querySelector('.client > .prev');
const clientNext = document.querySelector('.client > .next');
const images = document.querySelector('.slide').children;
const people = document.querySelector('.rating-container').children;
const totalImages = images.length;
const totalPeople = people.length;
let index = 0;

clientPrev.addEventListener('click', () => {
  nextImage(next, totalPeople, people);
})

clientNext.addEventListener('click', () => {
  nextImage(prev, totalPeople, people);
})

prev.addEventListener('click', () => {
    nextImage(next, totalImages, images);
})

next.addEventListener('click', () => {
    nextImage(prev, totalImages, images);
})

function nextImage(direction, totalItem, items) {
  if(direction == 'next') {
    index++;
    if(index == totalItem) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalItem - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < totalItem; i++) {
    items[i].classList.remove('active');
  }
  items[index].classList.add('active');
}

/*menu hide*/
function toggleMenu() {
  var menuBox = document.getElementById('menu-box');    
  if(menuBox.style.display == "none") {
    menuBox.style.display = "block";
  }
  else { 
    menuBox.style.display = "none";
  }
}

$("#menu-box").click(function(){
  $(this).hide();
});

//referes page
$('.header-logo').click(function() {
  $(location).attr('href', '');
});

//scroll trigger animation

gsap.registerPlugin(ScrollTrigger);

gsap.from(".title-anim", 2, {
  opacity: 0,
  y: -100,
  ease: "power3.inOut",
  delay: 0.1,
  stagger: {each: 0.35, from: "start"}
})

gsap.from(".card-container", 1, {
  scrollTrigger: ".about-card-container",
  opacity: 0,
  y: 100,
  ease: "power2.inOut",
  delay: 0.3,
  stagger: {each: 0.15, from: "start"}
})

gsap.from(".blog-box", 1, {
  scrollTrigger: ".item1",
  opacity: 0,
  x: 100,
  ease: "power2.inOut",
  delay: 0.3,
  stagger: {each: 0.35, from: "start"}
})

gsap.from(".container-item", 1, {
  scrollTrigger: ".container-item",
  x: 100,
  delay: .3,
  opacity: 0,
  ease: "power2.inOut",
},0);

gsap.from("a.button", {
  scrollTrigger: ".button",
  y: -100,
  delay: 2.3,
  opacity: 0,
  ease: "power2.inOut",
},0);

gsap.from(".header-logo", 1, {
  scrollTrigger: ".header-logo",
  y: -20,
  delay: .3,
  opacity: 0,
  ease: "power2.inOut",
},0);

gsap.from(".rating-box", 1, {
  scrollTrigger: ".rating-box",
  y: -30,
  delay: .3,
  opacity: 0,
  ease: "power2.inOut",
},0);

gsap.from(".discount p", 1, {
  scrollTrigger: ".discount p",
  y: -20,
  delay: .3,
  opacity: 0,
  ease: "power2.inOut",
},0);