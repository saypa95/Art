const accordion = (accordionSelector) => {
  const accordion = document.querySelector(accordionSelector);

  accordion.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("accordion-heading")) {
      target.classList.toggle("active");
      const next = target.nextElementSibling;
      next.classList.toggle("active");
      next.classList.add("animated", "fadeIn");
    } else if (target.parentNode.classList.contains("accordion-heading")) {
      target.parentNode.classList.toggle("active");
      const next = target.parentNode.nextElementSibling;
      next.classList.toggle("active");
      next.classList.add("animated", "fadeIn");
    }
  });
};

export default accordion;
