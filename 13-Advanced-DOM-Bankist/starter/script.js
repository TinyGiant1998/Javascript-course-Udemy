'use strict';

///////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: 'en' },
      'google_translate_element'
    );
  }

  const translateButton = document.getElementById('translate-btn');
  const languageList = document.getElementById('language-list');

  if (!translateButton || !languageList) {
    console.error('Translation elements not found!');
    return;
  }

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'zh-CN', name: 'Chinese' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ar', name: 'Arabic' },
  ];

  languages.forEach(lang => {
    const langItem = document.createElement('div');
    langItem.textContent = lang.name;
    langItem.classList.add('language-option');
    langItem.addEventListener('click', function () {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = lang.code;
        select.dispatchEvent(new Event('change'));
        languageList.classList.add('hidden'); // Hide dropdown
      } else {
        console.error('Google Translate dropdown not found!');
      }
    });
    languageList.appendChild(langItem);
  });

  // Show/Hide dropdown on click
  translateButton.addEventListener('click', function () {
    languageList.classList.toggle('hidden');
  });

  // Load Google Translate API
  window.googleTranslateElementInit = googleTranslateElementInit;
  const script = document.createElement('script');
  script.src =
    'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(script);
});

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// Button scrolling to Smooth
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
//Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

//Nav fade animation including logo
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// Replacing this with forEach
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling to Smooth

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset);
  console.log(
    'height/weight viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//Page navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabbed component

// tabs.forEach(t => t.addEventListener('click', () => console.log('Tabbed')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard Clause
  if (!clicked) return;

  //active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  //removing active classes
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');

  //activate content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu Fade animation

//refactoring code

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibilings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    sibilings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

//Sticking navigation
// const initialCoords = section1.getBoundingClientRect();

// console.log(initialCoords);
// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//Sticky navigation: Intersection observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//Reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  //replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

//slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  //next slide -- Button Right
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);

    createDots();
    activateDot(0);
  };
  init();
  //Event Handler
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

// ChatBOT
document.addEventListener('DOMContentLoaded', function () {
  const chatBox = document.getElementById('chat-box');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  sendBtn.addEventListener('click', sendMessage);

  async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    appendMessage('You: ' + userMessage);
    userInput.value = '';

    try {
      const botReply = await getBotReply(userMessage);
      appendMessage('Bot: ' + botReply);
    } catch (error) {
      appendMessage('Bot: Sorry, something went wrong!');
    }
  }

  function appendMessage(message) {
    const messageElem = document.createElement('div');
    messageElem.textContent = message;
    chatBox.appendChild(messageElem);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  async function getBotReply(userMessage) {
    const apiKey =
      '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'; // Replace with your key
    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'mistralai/mistral-7b-instruct',
          messages: [{ role: 'user', content: userMessage }],
        }),
      }
    );

    const data = await response.json();
    console.log('API Response:', data); // Debugging

    return data.choices
      ? data.choices[0].message.content
      : 'Error processing request!';
  }
});

// // Practise task 27th Jan 2025

// //selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section');

// console.log(allSection);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');

// console.log(allButtons);

// // Creating and Inserting elements
// // .insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent =
//   'We use cookied for improved fubctionality and analytics.';
// message.innerHTML =
//   'We use cookied for improved fubctionality and analytics. <button class="btn btn--close-cookie">Got It!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// //Delete Elements

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //CSS styling
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);

// logo.alt = 'Beautiful minimalist logo';

// //non standard css
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// //classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// //Dont use - override original name
// // logo.className = 'suraj'

//Different types if event addEventListener

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the header 😉');

//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading header 😉');
// };

// Setting random color to the navigation bar
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// // console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// const h1 = document.querySelector('h1');
// //going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// //going upward: Parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //going sideways: Sibiling
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML parsed and Dom Tree built!', e);
// });
