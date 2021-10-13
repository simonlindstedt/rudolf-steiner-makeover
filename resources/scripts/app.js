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
      <path d="M4 4L30 30" stroke="#000000" stroke-width="5" stroke-linecap="round"/>
      <path d="M30 4L4 30" stroke="#000000" stroke-width="5" stroke-linecap="round"/>
      </svg>
      `;
    } else {
      document.body.removeAttribute("style");
      menuWrapper.style.animationName = `fadeOut`;
      decoration.style.animationName = `slide-out`;
      menuButton.innerHTML = `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="11" width="26" height="28" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8V42C0 46.4183 3.58172 50 8 50H50V0H8ZM36.8853 11.9565H13.1148V16.3044H36.8853V11.9565ZM36.8853 22.8261H13.1148V27.1739H36.8853V22.8261ZM36.8853 33.6957H13.1148V38.0435H36.8853V33.6957Z" fill="#25342E"/>
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
