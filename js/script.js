const slideContainer = [...document.querySelectorAll('.slide-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

console.log(slideContainer)
slideContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width ;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth
  })
})

