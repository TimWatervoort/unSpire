document.addEventListener('DOMContentLoaded', function() {

  let cardthing = document.querySelector('#cardthing');
  cardthing.style['background-color'] = 'black';
  cardthing.style.border = '3px solid grey';

  let pic = document.querySelector('#pic');
  let message = document.querySelector('#message');
  let next = document.querySelector('#next');
  let prev = document.querySelector('#prev');
  let remove = document.querySelector('#remove');

  let itemNo = 0;

  //set initial values for card
  if (localStorage.length > 0) {
    let text = Object.keys(localStorage)[itemNo];
    let img = localStorage.getItem(localStorage.key(itemNo));
    message.innerHTML = text;
    if (img === 'noPic') {
      pic.setAttribute('src', '');
    } else {
      pic.setAttribute('src', img);
    }
  } else {
    message.innerHTML = 'You have not selected any favorites yet!';
  }

  //fade in function
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

  //fade items in
  fadeMeIn(cardthing);
  setTimeout(() => {
    fadeMeIn(next);
    fadeMeIn(prev);
    fadeMeIn(remove);
  }, 1000)

  //set listener for next button
  next.addEventListener('click', goNext);

  //set functionality for next button
  function goNext() {
    itemNo++;
    if (!localStorage.getItem(localStorage.key(itemNo))) {
      itemNo = 0;
    }
    text = Object.keys(localStorage)[itemNo];
    img = localStorage.getItem(localStorage.key(itemNo));
    if (img === 'noPic') {
      pic.setAttribute('src', '');
    } else {
      pic.setAttribute('src', img);
    }
    message.innerHTML = text;
  }

  //set listener for previous button
  prev.addEventListener('click', goBack);

  //set functionality for back button
  function goBack() {
    itemNo--;
    if (!localStorage.getItem(localStorage.key(itemNo))) {
      itemNo = localStorage.length - 1;
    }
    text = Object.keys(localStorage)[itemNo];
    img = localStorage.getItem(localStorage.key(itemNo));
    if (img === 'noPic') {
      pic.setAttribute('src', '');
    } else {
      pic.setAttribute('src', img);
    }
    message.innerHTML = text;
  }

  //set functionality for remove button
  remove.addEventListener('click', function() {
    localStorage.removeItem(message.innerHTML);
    message.innerText = 'Removed!';
    pic.setAttribute('src', '');
  });


})
