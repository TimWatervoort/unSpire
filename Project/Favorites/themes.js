document.addEventListener('DOMContentLoaded', function() {

  const lightMode = document.querySelector('#lightMode');
  const darkMode = document.querySelector('#darkMode');
  const darkerMode = document.querySelector('#darkerMode');
  const adventureMode = document.querySelector('#adventureMode');
  const awfulMode = document.querySelector('#awfulMode');

  const body = document.querySelector('body');
  const navbar = document.querySelector('nav');
  const next = document.querySelector('#next');
  const prev = document.querySelector('#prev');

  let mode;

  //set modes
  lightMode.addEventListener('click', function() {
    mode = 'light'
    console.log('light mode');
    body.style['background-color'] = '#82a7f2';
    body.style.color = 'black';
    navbar.classList.remove('bg-dark');
    navbar.classList.add('bg-primary');
    next.classList.remove('bg-dark');
    next.classList.add('bg-primary');
    prev.classList.remove('bg-dark');
    prev.classList.add('bg-primary');
  })

  darkMode.addEventListener('click', function() {
    mode = 'dark'
    console.log('dark mode');
    clear();
    body.style['background-color'] = '#171918';
    body.style.color = 'white';
    navbar.classList.add('bg-dark');
    navbar.classList.remove('bg-primary');
    next.classList.add('bg-dark');
    next.classList.remove('bg-primary');
    prev.classList.add('bg-dark');
    prev.classList.remove('bg-primary');
  })

  darkerMode.addEventListener('click', function() {
    mode = 'darker'
    console.log('darker mode');
    clear();
    navbar.classList.remove('bg-dark');
    navbar.classList.remove('bg-primary');
    navbar.style['background-color'] = '#020202';
    navbar.style.color = '#161616';
    body.style['background-color'] = 'black';
    body.style.color = '#161616';
  })

  adventureMode.addEventListener('click', function() {
    mode = 'adventure';
    console.log('adventure mode');
    let adv = setInterval(function() {
      body.style['background-color'] = 'red';
      setTimeout(function() {
        body.style['background-color'] = 'blue';
      }, 250);
    }, 500);
    darkMode.addEventListener('click', () => {
      clearInterval(adv)
    });
    lightMode.addEventListener('click', () => {
      clearInterval(adv)
    });
    darkerMode.addEventListener('click', () => {
      clearInterval(adv)
    });
    awfulMode.addEventListener('click', () => {
      clearInterval(adv)
    });
  })

  awfulMode.addEventListener('click', function() {
    mode = 'awful';
    body.style['background-color'] = 'yellow';
    body.style['font-family'] = '"Comic Sans MS", cursive, sans-serif';
    body.style.color = 'green';
    navbar.classList.remove('bg-dark');
    navbar.classList.remove('bg-primary');
    navbar.style['background-color'] = '#8e8301';
    next.classList.remove('bg-dark');
    next.classList.remove('bg-primary');
    prev.classList.remove('bg-dark');
    prev.classList.remove('bg-primary');
    next.style['background-color'] = 'green';
    prev.style['background-color'] = 'green';
    setInterval(function() {
      alert('Awful mode');
    }, 5000)
  })

  function clear() {
    body.style.color = '';
    navbar.style['background-color'] = '';
    navbar.style.color = '';
  }

  //Fade-out function
  function fadeMeOut(item) {
    let op = 1;
    item.style.opacity = 1;
    let fadeOut = setInterval(function() {
      item.style.opacity = op;
      op -= 0.02;
    }, 25);
    if (item.style.opacity === 0.1) {
      item.style.opacity = 0;
      clearInterval(fadeOut)
    }
  }

  document.addEventListener('click', function(event) {
    if (mode === 'awful') {
      let item = event.target;
      fadeMeOut(item);
    }
  })

})
