window.onload = () => {
  const scrollButton = document.querySelector(".scroll-button");
  const menuWrapper = document.querySelector(".menu-wrapper");
  const subMenus = document.querySelectorAll(".submenu");
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", () => {
    menuWrapper.classList.toggle("active");

    if (menuWrapper.classList.contains("active")) {
      menuWrapper.style.animationName = `slide-in`;
    } else {
      menuWrapper.style.animationName = `slide-out`;
    }
  });

  subMenus.forEach((subMenu) => {
    subMenu.querySelector("button").addEventListener("click", () => {
      const subMenuItems = subMenu.querySelectorAll("ul li");
      subMenu.classList.toggle("active");

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
          item.style = "";
        });
      }
      s;
    });
  });

  window.onresize = () => {
    if (window.innerWidth > 1000) {
      // Remove active class from menu-wrapper
      menuWrapper.classList.remove("active");
      menuWrapper.style.animationName = "unset";
      subMenus.forEach((subMenu) => {
        subMenu.classList.remove("active");
      });
    }
  };

  scrollButton.addEventListener("click", () => {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
};
