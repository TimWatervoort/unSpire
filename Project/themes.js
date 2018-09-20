document.addEventListener('DOMContentLoaded', function() {

  const lightMode = document.querySelector('#lightMode');
  const darkMode = document.querySelector('#darkMode');
  const darkerMode = document.querySelector('#darkerMode');
  const adventureMode = document.querySelector('#adventureMode');
  const awfulMode = document.querySelector('#awfulMode');

  const cho = document.querySelector('#cho');
  const name = document.querySelector('#name');
  const welcome = document.querySelector('#welcome');
  const hello = document.querySelector('#hello');
  const body = document.querySelector('body');
  const navbar = document.querySelector('nav');
  const nameButton = document.querySelector('#nameButton');
  const nameForm = document.querySelector('#nameForm');
  const nameInput = document.querySelector('#nameInput');
  const choiceForm = document.querySelector('#choiceForm');
  const choiceButton = document.querySelector('#choiceButton');
  const corporate = document.querySelector('#corporate');
  const personal = document.querySelector('#personal');
  const naming = document.querySelector('#naming');
  const msg = document.querySelector('#message');
  const pic = document.querySelector('#pic');
  const cardthing = document.querySelector('#cardthing');
  const save = document.querySelector('#save');
  const holder = document.querySelector('#holder');

  let mode;

  //set modes
  lightMode.addEventListener('click', function() {
    mode = 'light'
    console.log('light mode');
    clear();
    body.style['font-family'] = '"Palatino Linotype", "Book Antiqua", Palatino, serif';
    body.style['background-color'] = '#82a7f2';
    body.style.color = 'black';
    navbar.classList.remove('bg-dark');
    navbar.classList.add('bg-primary');
    cho.classList.remove('bg-dark');
    cho.classList.add('bg-primary');
    choiceButton.classList.remove('bg-dark');
    choiceButton.classList.add('bg-primary');
    message.classList.add('text-white');
    save.classList.remove('bg-dark');
    save.classList.add('bg-primary');
    nameButton.classList.remove('bg-dark');
    nameButton.classList.add('bg-primary');
  })

  darkMode.addEventListener('click', function() {
    mode = 'dark'
    console.log('dark mode');
    clear();
    body.style['font-family'] = '"Palatino Linotype", "Book Antiqua", Palatino, serif';
    body.style['background-color'] = '#171918';
    body.style.color = 'white';
    navbar.classList.add('bg-dark');
    navbar.classList.remove('bg-primary');
    cho.classList.add('bg-dark');
    cho.classList.remove('bg-primary');
    choiceButton.classList.add('bg-dark');
    choiceButton.classList.remove('bg-primary');
    message.classList.remove('text-white');
    save.classList.add('bg-dark');
    save.classList.remove('bg-primary');
    nameButton.classList.add('bg-dark');
    nameButton.classList.remove('bg-primary');
  })

  darkerMode.addEventListener('click', function() {
    mode = 'darker'
    console.log('darker mode');
    clear();
    body.style['font-family'] = '"Palatino Linotype", "Book Antiqua", Palatino, serif';
    body.style['background-color'] = 'black';
    body.style.color = '#161616';
    nameButton.style['background-color'] = '#161616';
    nameButton.style.color = 'black';
    navbar.style['background-color'] = '#020202';
    navbar.style.color = '#161616';
    save.style['background-color'] = '#161616';
    save.style.color = 'black';
    choiceButton.style['background-color'] = '#161616';
    choiceButton.style.color = 'black';
  })

  adventureMode.addEventListener('click', function() {
    mode = 'adventure';
    console.log('adventure mode');
    clear();
    body.style['font-family'] = '"Palatino Linotype", "Book Antiqua", Palatino, serif';
    body.style['background-color'] = 'blue';
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
    console.log('awful mode');
    clear();
    name.classList.add('spinnyBoi');
    welcome.classList.add('spinnyBoi');
    body.style['background-color'] = 'yellow';
    body.style['font-family'] = '"Comic Sans MS", cursive, sans-serif';
    body.style.color = 'green';
    navbar.style['background-color'] = '#8e8301';
    makeMeAwful();
  });

  function clear() {
    body.style.color = '';
    body.style['font-family'] = '';
    nameButton.style['background-color'] = '';
    body.style['background-color'] = '';
    navbar.style['background-color'] = '';
    navbar.style.color = '';
    save.style['background-color'] = '';
    choiceButton.style['background-color'] = '';
    nameButton.classList.remove('bg-dark');
    nameButton.classList.remove('bg-primary');
    navbar.classList.remove('bg-dark');
    navbar.classList.remove('bg-primary');
    name.classList.remove('spinnyBoi');
    welcome.classList.remove('spinnyBoi');
    nameButton.style.color = 'white';
    choiceButton.style.color = 'white';
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

  function makeMeAwful() {
    document.addEventListener('mouseover', function(event) {
      event.target.style['font-size'] = '70px';
    });
    document.addEventListener('mouseout', function(event) {
      event.target.style['font-size'] = '';
    });
    document.addEventListener('click', function(event) {
      let item = event.target;
      fadeMeOut(item);
    });
  }
  
});
