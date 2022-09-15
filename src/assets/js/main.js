document.addEventListener("DOMContentLoaded", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  const modals = document.querySelectorAll(".modal");
  const modalFees = document.querySelector(".modal_fees");
  const modalPg = document.querySelector(".modal_pg");

  const openModal = (modal) => {
    if(modal === "modalFees") {
      modalFees.classList.add("is_active")
    }
    if(modal === "modalPg") {
      modalPg.classList.add("is_active")
    }
    modal.classList.add("is_active")
  }

  modals.forEach(modal => {
    modal.addEventListener("click", () => {
      modal.classList.remove("is_active")
    })
  })

  
  const sections = document.querySelectorAll("section");
  const scrollSection = document.querySelector(".section_start")
  const hand = document.querySelector(".wrapper");

  const scrollEvent = () => {

    document.addEventListener("scroll", () => {    
      sections.forEach(section => {
        if(window.pageYOffset > section.offsetTop - (window.innerHeight / 1.5)) {
          section.classList.add("is_active")
        }
      })
    });

    if (window.innerWidth > 1220) {

      scrollSection.classList.add("is_active");
      hand.classList.add("is_active");

      document.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;
        currentScroll = currentScroll + window.innerHeight;

        if (currentScroll < scrollSection.offsetHeight) {
          hand.classList.add("is_active");
        } else {
          hand.classList.remove("is_active");

          if(currentScroll > scrollSection.offsetHeight - 200) {
            const coins = document.querySelector(".coins");
            coins.style.opacity = "1";
            coins.style.animation = "none";
            coins.style.transform = `translateY(${(window.pageYOffset - scrollSection.offsetHeight) * -.5}px)`;
          }

        }
      });
    } else {
      scrollSection.classList.remove("is_active");
      hand.classList.remove("is_active");
    };
  }

  window.addEventListener('resize', scrollEvent);
  scrollEvent();


  
  
  var swiper = new Swiper(".responsive_slider", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
