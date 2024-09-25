let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.control');


setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  
  for (let i = 0; i < slides.length; i++) {
    if (i === currentSlide) {
      slides[i].style.display = 'block';
      controls[i].style.backgroundColor = 'yellow';
    } else {
      slides[i].style.display = 'none';
      controls[i].style.backgroundColor = 'black';
    }
  }
}, 2000);


document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;

  for (let i = 0; i < slides.length; i++) {
    if (i === currentSlide) {
      slides[i].style.display = 'block';
      controls[i].style.backgroundColor = 'yellow';
    } else {
      slides[i].style.display = 'none';
      controls[i].style.backgroundColor = 'black';
    }
  }
});


controls.forEach((control, i) => {
  control.addEventListener('click', () => {
    currentSlide = i;

    for (let j = 0; j < slides.length; j++) {
      if (j === currentSlide) {
        slides[j].style.display = 'block';
        controls[j].style.backgroundColor = 'yellow';
      } else {
        slides[j].style.display = 'none';
        controls[j].style.backgroundColor = 'black';
      }
    }
  });
});

for (let i = 0; i < slides.length; i++) {
  if (i === currentSlide) {
    slides[i].style.display = 'block';
    controls[i].style.backgroundColor = 'yellow';
  } else {
    slides[i].style.display = 'none';
    controls[i].style.backgroundColor = 'black';
  }
}
