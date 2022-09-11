const scrolling = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      const blockID = this.getAttribute('href').substr(1);
      
      if(blockID){
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
};

export default scrolling;
