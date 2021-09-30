window.onload = () => {
  const scrollButton = document.querySelector(".scroll-button");
  const subMenus = document.querySelectorAll(".submenu");

  subMenus.forEach((subMenu) => {
    subMenu.querySelector("a").addEventListener("click", (event) => {
      event.preventDefault();
      subMenu.classList.toggle("active");
    });
  });

  scrollButton.addEventListener("click", () => {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
};
