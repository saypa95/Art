const filter = () => {
  const portfolioMenu = document.querySelector(".portfolio-menu"),
    portfolioTitles = portfolioMenu.querySelectorAll("li"),
    portfolioBlocks = document.querySelectorAll(".portfolio-block"),
    portfolioNoBlock = document.querySelector(".portfolio-no");

  function hideTabs() {
    portfolioTitles.forEach((item) => {
      item.classList.remove("active");
    });
    portfolioBlocks.forEach((item) => {
      item.style.display = "none";
      item.classList.remove("animated", "fadeIn");
    });
  }

  function showTabs(className = "all") {
    if (className == "grandmother" || className == "granddad") {
      portfolioNoBlock.style.display = "block";
      portfolioNoBlock.classList.add("animated", "fadeIn");
    } else {
      portfolioNoBlock.classList.remove("animated", "fadeIn");
      portfolioBlocks.forEach((item) => {
        if (item.classList.contains(className)) {
          item.style.display = "block";
          item.classList.add("animated", "fadeIn");
        }
      });
    }

    portfolioTitles.forEach((item) => {
      if (item.classList.contains(className)) {
        item.classList.add("active");
      }
    });
  }

  hideTabs();
  showTabs();

  portfolioMenu.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      hideTabs();
      showTabs(e.target.classList[0]);
    }
  });
};

export default filter;
