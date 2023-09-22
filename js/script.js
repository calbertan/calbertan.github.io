const slideContainer = [...document.getElementsByClassName('slide-container')];
const nxtBtn = document.getElementsByClassName('nxt-btn');
const preBtn = document.getElementsByClassName('pre-btn');
const slider = document.getElementById("myBar");
var interval = 100 / 6;
var current_width = 0;

slideContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width ;
  let btnDisabled = false;

  const enableButton = () => {
    setTimeout(() => {
      nxtBtn.disabled = false;
      preBtn.disabled = false;
      btnDisabled = false;
    }, 400)
  }

  nxtBtn[i].addEventListener('click', () => {
    if (btnDisabled) {
      return;
    }

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

    nxtBtn.disabled = true;
    btnDisabled = true;
    enableButton();
  })

  preBtn[i].addEventListener('click', () => {
    if (btnDisabled) {
      return;
    }

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

    preBtn.disabled = true;
    btnDisabled = true;
    enableButton();
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

