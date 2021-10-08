window.onload = () => {
  const scrollButton = document.querySelector(".scroll-button");
  const menuWrapper = document.querySelector(".menu-wrapper");
  const decoration = menuWrapper.querySelector(".decoration");
  const subMenus = document.querySelectorAll(".submenu");
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", () => {
    menuWrapper.classList.toggle("active");
    menuButton.classList.toggle("active");

    if (menuWrapper.classList.contains("active")) {
      document.body.style.overflowY = "hidden";
      menuWrapper.style.animationName = `fadeIn`;
      decoration.style.animationName = `slide-in`;
      menuButton.innerHTML = `<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L30 30" stroke="#F3F7F6" stroke-width="5" stroke-linecap="round"/>
      <path d="M30 4L4 30" stroke="#F3F7F6" stroke-width="5" stroke-linecap="round"/>
      </svg>
      `;
    } else {
      document.body.removeAttribute("style");
      menuWrapper.style.animationName = `fadeOut`;
      decoration.style.animationName = `slide-out`;
      menuButton.innerHTML = `<svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H29V3.91304H0V0ZM0 9.78261H29V13.6957H0V9.78261ZM0 19.5652H29V23.4783H0V19.5652Z" fill="white"/>
      </svg>
      `;
    }
  });

  subMenus.forEach((subMenu) => {
    const button = subMenu.querySelector("button");

    button.addEventListener("click", () => {
      const subMenuItems = subMenu.querySelectorAll("ul li");
      subMenu.classList.toggle("active");
      button.classList.toggle("active");

      if (subMenu.classList.contains("active")) {
        // Add fade-in animation
        let delay = 0;
        subMenuItems.forEach((item) => {
          item.style.animationDelay = `${delay}s`;
          item.style.animationName = `fade-in`;
          delay += 0.2;
        });
      } else {
        // Remove animation
        subMenuItems.forEach((item) => {
          item.removeAttribute("style");
        });
      }
    });
  });

  window.onresize = () => {
    if (window.innerWidth > 1024) {
      // Remove active class from menu-wrapper
      menuWrapper.classList.remove("active");
      menuWrapper.style.animationName = "unset";
      subMenus.forEach((subMenu) => {
        subMenu.classList.remove("active");
      });
    }
  };

  scrollButton.addEventListener("click", () => {
    let scrollDistance;
    if (window.innerWidth > 1024) {
      scrollDistance =
        window.innerHeight - document.querySelector("nav").clientHeight;
    } else {
      scrollDistance = window.innerHeight;
    }
    window.scroll({
      top: scrollDistance,
      behavior: "smooth",
    });
  });
};
