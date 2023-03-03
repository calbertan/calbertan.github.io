const slideContainer = [...document.querySelectorAll('.slide-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const slider = document.getElementById("myBar");
var interval = 100 / 6;
var current_width = 0;

slideContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width ;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth
    var target = current_width + interval
    console.log(target);
    if(target > 100) target = 100;
    var id = setInterval(frame, 10)
        
    function frame() {
      if (current_width >= target) {
        clearInterval(id);
      } else {
        current_width++; 
        slider.style.width = current_width + '%'; 
      }
    }
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth

    var target = current_width - interval
    if(target < 0) target = 0;
    var id = setInterval(frame, 10)
        
    function frame() {
      if (current_width <= target) {
        clearInterval(id);
      } else {
        current_width--; 
        slider.style.width = current_width + '%'; 
      }
    }
  })
})

function frame() {
  if (current_width >= current_width + 10) {
    clearInterval(id);
  } else {
    current_width++; 
    slider.style.width = current_width + '%'; 
  }
}

