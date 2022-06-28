const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const items = document.querySelector(".slider__list");

let currentRight = 0;

rightBtn.addEventListener("click", e => {
  e.preventDefault();

  if (currentRight < 500) {
    currentRight += 100;
    items.style.right = `${currentRight}px`;
  }
  

});

leftBtn.addEventListener("click", e => {
  e.preventDefault();
  
  if (currentRight > 0) {
    currentRight -= 100;
    items.style.right = `${currentRight}px`;
  }
  
});