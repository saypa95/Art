const burger = (burgerSelctor, menuSelector) => {
  const burgerBtn = document.querySelector(burgerSelctor),
  burgerMenu = document.querySelector(menuSelector);

  burgerBtn.addEventListener("click", () => {
    if(window.screen.availWidth < 993){
      burgerMenu.classList.toggle("show");
    }
  });

  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      burgerMenu.classList.remove("show");
    }
});
};

export default burger;