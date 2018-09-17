document.addEventListener('DOMContentLoaded', function() {

  let cardthing = document.querySelector('#cardthing');
  cardthing.style['background-color'] = 'black';
  cardthing.style.border = '3px solid grey';

  let pic = document.querySelector('#pic');
  let message = document.querySelector('#message');
  let next = document.querySelector('#next');
  let prev = document.querySelector('#prev');

  let itemNo = 0;

  let text = localStorage.getItem(itemNo).split(',')[0];
  let img = localStorage.getItem(itemNo).split(',')[1];

  pic.setAttribute('src', img);
  if (text.length === 0) {
    message.innerText = 'You have not selected any favorites yet!';
  } else {
    message.innerText = text;
  }

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
  }, 1000)
  setTimeout(() => {
    fadeMeIn(prev);
  }, 1000);

  //set functionality for next button
  next.addEventListener('click', goNext);

  function goNext() {
    if (itemNo === localStorage.length - 1) {
      itemNo = -1;
    }
    itemNo++;
    text = localStorage.getItem(itemNo).split(',')[0];
    img = localStorage.getItem(itemNo).split(',')[1];
    pic.setAttribute('src', img);
    message.innerText = text;

  }

  //set functionality for previous button
  prev.addEventListener('click', goBack);

  function goBack() {
    if (itemNo === 0) {
      itemNo = localStorage.length;
    }
    itemNo--;
    text = localStorage.getItem(itemNo).split(',')[0];
    img = localStorage.getItem(itemNo).split(',')[1];
    pic.setAttribute('src', img);
    message.innerText = text;
  }


})
