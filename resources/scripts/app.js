window.onload = () => {
  const scrollButton = document.querySelector(".scroll-button");
  const menuWrapper = document.querySelector(".menu-wrapper");
  const decoration = menuWrapper.querySelector(".decoration");
  const subMenus = document.querySelectorAll(".submenu");
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", () => {
    menuWrapper.classList.toggle("active");

    if (menuWrapper.classList.contains("active")) {
      document.body.style.overflowY = "hidden";
      menuWrapper.style.animationName = `fadeIn`;
      decoration.style.animationName = `slide-in`;
    } else {
      document.body.removeAttribute("style");
      menuWrapper.style.animationName = `fadeOut`;
      decoration.style.animationName = `slide-out`;
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
