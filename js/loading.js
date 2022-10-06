const dots = document.querySelector('.loading__dots')

const addAnimate = () =>{
  /* add animate class thingy */ 
  dots.classList.add('animate')
  
  setTimeout(() =>{
    /* remove animated class thingy */
    dots.classList.remove('animate')
  }, 2600)
}
addAnimate()
