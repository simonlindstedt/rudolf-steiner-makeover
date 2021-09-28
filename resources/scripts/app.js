window.onload = () => {
  const scrollButton = document.querySelector(".scroll-button");
  scrollButton.addEventListener("click", () => {
    window.scroll({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });
};
