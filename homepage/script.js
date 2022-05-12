const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
     loop: true,
     speed:1500,
    autoplay: {
      delay: 2000
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  });


  const targetElement = document.querySelectorAll(".animationTarget");
console.log("画面の高さ", window.innerHeight);
document.addEventListener("scroll", function() {
    for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].
        getBoundingClientRect().top + targetElement[i].clientHeight * .3

        if (window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        }
    }
})