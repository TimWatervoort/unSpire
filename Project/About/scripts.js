document.addEventListener('DOMContentLoaded', function() {

  let info = document.querySelector('#info');
  let collapse = document.querySelector('#accordionExample')

  function fadeMeIn(item) {
    let op = 0.01;
    let fadeIn = setInterval(function() {
      item.style.opacity = op;
      op += 0.02;
    }, 20);
    setTimeout(() => {
      item.style.opacity = 1;
      clearInterval(fadeIn);
    }, 1000);
  }


  fadeMeIn(info);
  setTimeout(()=>{fadeMeIn(collapse)}, 1000)

})
