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
    let text = localStorage.getItem(localStorage.key(itemNo)).split(',')[0];
    let img = localStorage.getItem(localStorage.key(itemNo)).split(',')[1];
    message.innerHTML = text;
    pic.setAttribute('src', img);
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
    if (!localStorage.getItem(localStorage.key(itemNo))){
      itemNo = 0;
    }
    text = localStorage.getItem(localStorage.key(itemNo)).split(',')[0];
    img = localStorage.getItem(localStorage.key(itemNo)).split(',')[1];
    pic.setAttribute('src', img);
    message.innerHTML = text;
  }

  //set listener for previous button
  prev.addEventListener('click', goBack);

  //set functionality for back button
  function goBack() {
    itemNo--;
    if (!localStorage.getItem(localStorage.key(itemNo))){
      itemNo = localStorage.length-1;
    }
    text = localStorage.getItem(localStorage.key(itemNo)).split(',')[0];
    img = localStorage.getItem(localStorage.key(itemNo)).split(',')[1];
    pic.setAttribute('src', img);
    message.innerText = text;
  }

  //function to get the key of local storage from the current value
  function getKey(value) {
    return Object.keys(localStorage).find((key) => {
      return localStorage[key] === value;
    });
  }

  //set functionality for remove button
  remove.addEventListener('click', function() {
    let currentText = message.innerText;
    let currentImg = pic.getAttribute('src');
    let currentValue = `${currentText},${currentImg}`;
    localStorage.removeItem(getKey(currentValue));
    message.innerText = 'Removed!';
    pic.setAttribute('src', '');
  });


})
