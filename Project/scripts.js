document.addEventListener('DOMContentLoaded', function() {

  //define DOM elements
  const name = document.querySelector('#name'); //name input
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
  const brand = document.querySelector('.navbar-brand');
  let url, nickname, author;

  //Set initial fade-in
  fadeMeIn(hello);
  setTimeout(() => {
    fadeMeIn(nameInput);
    fadeMeIn(nameButton);
  }, 1000);

  //Have the user input their name
  nameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!name.value) {
      console.log('no name');
    } else {
      spin(nameButton, 'key');
      fadeMeOut(nameForm);
      setTimeout(() => {
        welcomeMe();
        hideForm();
        fadeMeIn(welcome);
      }, 1000);
      setTimeout(() => {
        fadeMeIn(choiceForm);
      }, 2000);
      setTimeout(() => {
        fadeMeIn(choiceButton);
      }, 3000);
    }
  })

  //Welcomes you
  function welcomeMe() {
    welcome.style.opacity = 0.01;
    welcome.innerText = `Welcome, ${name.value}.`;
  }

  //Spins an item
  function spin(item, icon) {
    item.innerHTML = `<i class='fas fa-${icon}'></i>`;
    item.classList.add('spinnyBoi');
  }

  //Remove the welcome form
  function hideForm() {
    nameForm.removeChild(nameButton);
    nameForm.removeChild(nameInput);
    nameForm.removeChild(hello);
  }

  //The listener on the submit button that looks through the radio buttons
  choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    clear();
    if (corporate.checked) {
      corpFunc();
    } else if (naming.checked) {
      nameFunc();
    } else if (personal.checked) {
      persFunc();
    }
    spin(choiceButton, 'cog');
    setTimeout(() => {
      choiceButton.classList.remove('spinnyBoi');
      choiceButton.innerHTML = 'Inspire Me';
    }, 1500);
  })

  //Set the card for the corporate choice
  function corpFunc() {
    prepContent();
    getCorpBS();
    getPicture();
    cardIn();
    setTimeout(function() {
      fadeMeIn(cardthing);
      fadeMeIn(save);
    }, 1000);
  }

  //Set the card for the naming choice
  function nameFunc() {
    prepContent();
    getName();
    getFace();
    cardIn();
    setTimeout(function() {
      fadeMeIn(cardthing);
      fadeMeIn(save);
    }, 2000);
  }

  //Set the card for the personal choice
  function persFunc() {
    prepContent();
    getQuote();
    getAuthor();
    cardIn();
    setTimeout(function() {
      fadeMeIn(cardthing);
      fadeMeIn(save);
    }, 1000);
  }

  //Clear everything
  function clear() {
    clearInterval(1);
    clearInterval(2);
    msg.innerText = '';
    pic.setAttribute('src', '');
  }

  //Get the results ready to fade in
  function prepContent() {
    save.style.opacity = 0;
    cardthing.style.opacity = 0;
  }

  //Make the card visible
  function cardIn() {
    cardthing.style['background-color'] = 'black';
    cardthing.style.border = '3px solid grey';
  }

  //Set the phrase for the corporate choice
  function getCorpBS() {
    let advInd = Math.floor(Math.random() * adverbs.length);
    let verInd = Math.floor(Math.random() * verbs.length);
    let adjInd = Math.floor(Math.random() * adjectives.length);
    let nouInd = Math.floor(Math.random() * nouns.length);

    let original = `${adverbs[advInd]} ${verbs[verInd]} ${adjectives[adjInd]} ${nouns[nouInd]}`
    translate(original);
  }

  //translate into oblivion
  function translate(str) {
    let str2, str3, str4, str5, str6;
    //English - Icelandic
    url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180914T172928Z.7de94a7b92ad4561.6c286939306fa1c81349e68c5e1e9db483390c94&text=${str}&lang=en-is`
    axios.get(url)
      .then(function(response) {
        str2 = response.data.text[0];
        //Icelandic - Tamil
        axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180914T172928Z.7de94a7b92ad4561.6c286939306fa1c81349e68c5e1e9db483390c94&text=${str2}&lang=is-ta`)
          .then(function(response) {
            str3 = response.data.text[0];
            //Tamil - Russian
            axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180914T172928Z.7de94a7b92ad4561.6c286939306fa1c81349e68c5e1e9db483390c94&text=${str3}&lang=ta-ru`)
              .then(function(response) {
                str4 = response.data.text[0];
                //Russian - Japanese
                axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180914T172928Z.7de94a7b92ad4561.6c286939306fa1c81349e68c5e1e9db483390c94&text=${str4}&lang=ru-ja`)
                  .then(function(response) {
                    str5 = response.data.text[0];
                    //Japanese - Chinese
                    axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180914T172928Z.7de94a7b92ad4561.6c286939306fa1c81349e68c5e1e9db483390c94&text=${str5}&lang=ja-zh`)
                      .then(function(response) {
                        str6 = response.data.text[0];
                        //Chinese - English
                        axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180914T172928Z.7de94a7b92ad4561.6c286939306fa1c81349e68c5e1e9db483390c94&text=${str6}&lang=zh-en`)
                          .then(function(response) {
                            let hold = capitalize(response.data.text[0])
                            let hold2 = hold.replace(',', '');
                            msg.innerText = hold2;
                          })
                      })
                  })
              })
          })
      })
  }

  //Set the picture for the corporate choice
  function getPicture() {
    let picurl = 'https://picsum.photos/300/300/?random';
    axios.get(picurl)
      .then(function(response) {
        pic.setAttribute('src', picurl);
      })
  }

  //Set the name for the naming choice
  function getName() {
    url = 'https://api.randomuser.me/';
    axios.get(url)
      .then(function(response) {
        //Make sure names come back with only Latin characters
        if (!/[a-zA-Z]+/.test(response.data.results[0].name.first)) {
          getName();
        } else {
          let fName = response.data.results[0].name.first;
          let lName = response.data.results[0].name.last;
          msg.innerText = `${capitalize(fName)} "${getNickname()}" ${capitalize(lName)}`;
        }
      })
  }

  //Capitalize the names of the naming choice
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
      let arr = item.split('');
      let firstLetter = arr[0].toUpperCase();
      arr[0] = firstLetter;
      final = arr.join('');
    }
    return final;
  }

  //Set the nickname for the naming choice
  function getNickname() {
    let advInd = Math.floor(Math.random() * adverbs.length);
    let verInd = Math.floor(Math.random() * verbs.length);
    let adj1Ind = Math.floor(Math.random() * adjectives.length);
    let nouInd = Math.floor(Math.random() * nouns.length);
    let altVerb = `${verbs[verInd].replace(/y$/, 'ie')}s`;

    let original = [adverbs[advInd], altVerb, adjectives[adj1Ind], nouns[nouInd]];
    let num = Math.floor(Math.random() * 2);
    if (num === 0) {
      nickname = `${capitalize(original[1])} ${capitalize(original[0])}`
    } else {
      nickname = `${capitalize(original[2])} ${capitalize(original[3])}`
    }
    return nickname
  }

  //Set the face for the naming choice
  function getFace() {
    url = 'https://galvanize-cors.herokuapp.com/https://faceapi.herokuapp.com/faces?n=1';
    axios.get(url)
      .then(function(response) {
        if (!response.status === 200) {
          return;
        } else {
          let imgUrl = response.data[0]['image_url'];
          pic.setAttribute('src', imgUrl);
        }
      });
  }

  //Set the quote for the personal choice
  function getQuote() {
    let addOn = Math.floor(Math.random() * 50);
    url = `https://galvanize-cors.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1?${addOn}`;
    axios.get(url)
      .then(function(response) {
        let innards = response.data[0].content.replace(/<\/*p>/g, '');
        let year = Math.floor(Math.random() * 2018);
        msg.innerHTML = `${innards}<br>-${author}, ${year} ${adbc()}`;
      });
  }

  //Randomly choose AD or BC
  function adbc() {
    let num = Math.floor(Math.random() * 100);
    if (num % 2 === 0) {
      return 'AD';
    } else {
      return 'BC';
    }
  }

  //Attribute author to quote
  function getAuthor() {
    let randNum = Math.floor(Math.random() * authors.length);
    author = authors[randNum];
    return author;
  }


  //Fade-in function
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

  //Set what the save button does
  save.addEventListener('click', saveItem);

  //Save the pair
  function saveItem() {
    let text = message.innerHTML;
    let img = pic.getAttribute('src');
    let newKey;
    console.log('saved');
    localStorage.setItem(
      text, img || 'noPic'
    )
  }
});
