const caption = document.getElementById('caption')
const carouselTrack = document.getElementById('carouselTrack')
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')
const autoPlayButton = document.getElementById('autoPlayButton')
const timerDisplay = document.getElementById('timerDisplay')

const carouselSlide = document.createElement('img')
carouselSlide.classList.add('carousel-slide')


const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

//  Initial Setup
let index = 0;
let play = false;
let autoPlayInterval;
let countdown;


function showImages() {
  carouselSlide.src = images[index].url;
  carouselSlide.width = 800;
  caption.textContent = images[index].caption; 
}

carouselTrack.appendChild(carouselSlide)
showImages()

nextButton.addEventListener("click", () => {
  index = (index + 1) % images.length;
  showImages();
});

prevButton.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  showImages();
});


// Auto Play 
autoPlayButton.addEventListener("click", () => {
  if (!play) {
    play = true;
    autoPlayButton.textContent = "Stop Auto Play";
    startAutoPlay();
  } else {
    play = false;
    autoPlayButton.textContent = "Start Auto Play";
    clearInterval(autoPlayInterval);
    clearInterval(countdown);
    timerDisplay.textContent = "";
  }
});

function startAutoPlay() {
  let timeLeft = 4;

  countdown = setInterval(() => {
    timerDisplay.textContent = `Next image in ${timeLeft}s`;
    timeLeft--;
    if (timeLeft < 0) timeLeft = 4;
  }, 1000);

  autoPlayInterval = setInterval(() => {
    index = (index + 1) % images.length;
    showImages();
    timeLeft = 4;
  }, 3000);
}

