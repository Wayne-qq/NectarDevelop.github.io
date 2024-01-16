document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("clientsContainer");
  
    const words = ["REELWORL", "CLUEZY", "GAZDA"]; 
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
    const interval = 30; 
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
      { threshold: 1 } 
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
  