'use strict';

import img from './img.js';

const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const sliderContainer = document.querySelector('.slider__container');
const dotContainer = document.querySelector('.dot__container');

let numberOfImages = Object.keys(img).length;

const getImage = (id, source, title, name) => {
    const div = document.createElement('div');
    div.className = 'slide';
    div.innerHTML = `
    <div class="number">${id} / ${numberOfImages}</div>
    <img class="img__slide" src="${source}" 
    alt="${title}">
    <div class="name">${name}</div>`;
    sliderContainer.appendChild(div);
    return sliderContainer;
};

for (let i = 0; i < numberOfImages; i++) {
    getImage(img[i].id, img[i].source, img[i].title, img[i].name);
};

const getDots = () => {
    let elements = '';
    for (let i = 0; i < numberOfImages; i++) {
        elements += '<span class="dot"></span>';
    };
    dotContainer.innerHTML = elements;
    dotContainer.style.display = 'block';
    return dotContainer;
};

getDots();

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let indexOfSlide = 0;

const showImage = (index) => {
    slides.forEach((slide) => {
        slide.style.display = 'none';
            dots.forEach((dot) => {
            dot.classList.remove('active');
      })
    });
    slides[index].style.display = 'block';
    dots[index].classList.add('active');
  }

showImage(indexOfSlide);

const nextSlide = () => {
    indexOfSlide >= numberOfImages - 1 ? indexOfSlide = 0 : indexOfSlide++;
    showImage(indexOfSlide);
  }
  
const previousSlide = () => {
    indexOfSlide <= 0 ? indexOfSlide = numberOfImages - 1 : indexOfSlide--;
    showImage(indexOfSlide);
  }
  
nextButton.addEventListener('click', nextSlide);
previousButton.addEventListener('click', previousSlide);

setInterval(() => {
    nextSlide()
  }, 4000);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showImage(index);
    })
});

const images = document.querySelectorAll('.img__slide');

const resizeSlider = (height) => {
    sliderContainer.style.height = height + 'px';
    images.forEach(image => image.style.height = height + 'px');
}

resizeSlider(400);