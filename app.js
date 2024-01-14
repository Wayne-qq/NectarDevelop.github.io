// // script.js
// const textElement = document.querySelector('.main__page h1');

// anime.timeline({ loop: false })
//   .add({
//     targets: '.main__page h1',
//     translateY: [-500, 0],
//     opacity: [0, 1],
//     easing: 'easeOutExpo',
//     duration: 2000,
//     delay: (el, i) => 200 * i
//   });



document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("clientsContainer");
  
    const words = ["REELWORL", "CLUEZY", "GAZDA"]; // Додайте інші слова за потребою
    for (let i = 0; i < 100; i++) {
      words.forEach((word) => {
        const element = document.createElement("p");
        element.classList.add("clients__line-text");
        element.textContent = word;
        container.appendChild(element.cloneNode(true));
      });
    }
  });
  


  function animateNumbers(target, finalValue, duration) {
    let currentValue = 0;
    const interval = 30; // Інтервал анімації (в мілісекундах)
    const steps = Math.ceil(duration / interval);
    const stepValue = (finalValue - currentValue) / steps;
  
    let counter = 0;
    const intervalId = setInterval(function () {
      currentValue += stepValue;
      counter++;
      target.textContent = Math.round(currentValue);
  
      if (counter === steps) {
        target.textContent = finalValue;
        clearInterval(intervalId);
      }
    }, interval);
  }
  
  function startAnimationWhenVisible(target, finalValue, duration) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumbers(target, finalValue, duration);
            observer.disconnect();
          }
        });
      },
      { threshold: 1 } // Можливо, потрібно налаштувати поріг відображення від 0 до 1
    );
  
    observer.observe(target);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    startAnimationWhenVisible(
      document.getElementById("number1"),
      5,
      600
    );
    startAnimationWhenVisible(
      document.getElementById("number2"),
      12,
      1600
    );
    startAnimationWhenVisible(
      document.getElementById("number3"),
      63,
      2500
    );
  });




  
  
  document.addEventListener("DOMContentLoaded", function () {
    const scrollLink = document.getElementById("scrollLink");
  
    scrollLink.addEventListener("click", function (event) {
      event.preventDefault();
  
      const targetElement = document.getElementById("our__us");
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
  