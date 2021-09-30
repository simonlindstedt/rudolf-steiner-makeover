window.onload = () => {
  const scrollButton = document.querySelector(".scroll-button");
  const menuWrapper = document.querySelector(".menu-wrapper");
  const subMenus = document.querySelectorAll(".submenu");
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", () => {
    menuWrapper.classList.toggle("active");
  });

  subMenus.forEach((subMenu) => {
    subMenu.querySelector("button").addEventListener("click", (event) => {
      subMenu.classList.toggle("active");
    });
  });

  window.onresize = () => {
    if (window.innerWidth > 1000) {
      menuWrapper.classList.remove("active");
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
