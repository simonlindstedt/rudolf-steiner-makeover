window.onload = () => {
  const scrollButton = document.querySelector(".scroll-button");
  const menuWrapper = document.querySelector(".menu-wrapper");
  const subMenus = document.querySelectorAll(".submenu");
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", () => {
    menuWrapper.classList.toggle("active");
  });

  subMenus.forEach((subMenu) => {
    subMenu.querySelector("button").addEventListener("click", () => {
      subMenu.classList.toggle("active");
    });
  });

  window.onresize = () => {
    if (window.innerWidth > 1000) {
      // Remove active class from menu-wrapper
      menuWrapper.classList.remove("active");
      subMenus.forEach((subMenu) => {
        subMenu.classList.remove("active");
      });

      // Unset and set transition for the mobile animation (to prevent transition bug)
      menuWrapper.style.transition = `unset`;

      setTimeout(() => {
        menuWrapper.style.transition = "transform 0.3s ease-out";
      });
    } else {
      // Unset and set transition for the mobile animation (to prevent transition bug)
      menuWrapper.style.transition = `unset`;

      setTimeout(() => {
        menuWrapper.style.transition = "transform 0.3s ease-out";
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
