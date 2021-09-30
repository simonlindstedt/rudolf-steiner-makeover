window.onload = () => {
  const scrollButton = document.querySelector(".scroll-button");
  const menuWrapper = document.querySelector(".menu-wrapper");
  const subMenus = document.querySelectorAll(".submenu");
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", () => {
    menuWrapper.classList.toggle("active");

    if (menuWrapper.classList.contains("active")) {
      menuWrapper.style.animationName = `slideIn`;
    } else {
      menuWrapper.style.animationName = `slideOut`;
    }
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
