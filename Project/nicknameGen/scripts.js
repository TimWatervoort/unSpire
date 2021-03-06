const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const welcome = document.querySelector('#welcome');
const welcome2 = document.querySelector('#welcome2');
const welcome3 = document.querySelector('#welcome3');
const body = document.querySelector('body');
const navbar = document.querySelector('nav');
const msg = document.querySelector('#message');
const pic = document.querySelector('#pic');
const cardthing = document.querySelector('#cardthing');
const nameForm = document.querySelector('#nameForm');
const receive = document.querySelector('#nameButton');

fadeMeIn(welcome);
setTimeout(() => {
  fadeMeIn(welcome2);
}, 1000);
setTimeout(() => {
  fadeMeIn(welcome3);
}, 2000);
setTimeout(() => {
  fadeMeIn(nameForm);
}, 3000);

function setMessage(x, y) {
  return `${x} "${getNickname()}" ${y}`
}

//Set the nickname
function getNickname() {
  let advInd = Math.floor(Math.random() * adverbs.length);
  let verInd = Math.floor(Math.random() * verbs.length);
  let adj1Ind = Math.floor(Math.random() * adjectives.length);
  let nouInd = Math.floor(Math.random() * nouns.length);
  let verb = verbs[verInd];
  let altVerb;

  if (!/[hsz]$/.test(verb)) {
    altVerb = `${verb.replace(/y$/, 'ie')}s`;
  } else {
    altVerb = `${verb}es`
  }

  let original = [adverbs[advInd], altVerb, adjectives[adj1Ind], nouns[nouInd]];
  let num = Math.floor(Math.random() * 2);
  if (num === 0) {
    nickname = `${capitalize(original[1])} ${capitalize(original[0])}`
  } else {
    nickname = `${capitalize(original[2])} ${capitalize(original[3])}`
  }
  return nickname
}

nameForm.addEventListener('submit', function(event) {
  event.preventDefault();
  msg.innerText = ''
  cardthing.style.opacity = 0;
  clear();
  fadeMeIn(cardthing);
  cardthing.style['background-color'] = 'black';
  cardthing.style.border = '3px solid grey';
  msg.innerText = setMessage(firstName.value, lastName.value);
  if (imgInput.value) {
    pic.setAttribute('src', imgInput.value);
  };
})

function capitalize(item) {
  let final;
  if (/\s/.test(item)) {
    let arr1 = item.split(' ');
    for (var i = 0; i < arr1.length; i++) {
      let arr2 = arr1[i].split('');
      let firstLetter = arr2[0].toUpperCase();
      arr2[0] = firstLetter;
      arr1[i] = arr2.join('');
    }
    final = arr1.join(' ')
  } else {
    let arr2 = item.split('');
    let firstLetter = arr2[0].toUpperCase();
    arr2[0] = firstLetter;
    final = arr2.join('');
  }
  return final;
}

function clear() {
  clearInterval(1);
  clearInterval(2);
  msg.innerText = '';
  pic.setAttribute('src', '')
}

function fadeMeIn(item) {
  let op = 0.01;
  let fadeIn = setInterval(function() {
    item.style.opacity = op;
    op += 0.02;
  }, 25);
  setTimeout(() => {
    item.style.opacity = 1;
    clearInterval(fadeIn);
  }, 1000);
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
