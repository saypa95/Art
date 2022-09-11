const modals = () => {
  let btnPressed = false;
  let popupConsultationShowed = false;
  function bindModal(
    triggerSelector,
    modalSelector,
    closeSelector,
    destroyTrigger = false
  ) {
    const triggers = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      btnClose = modal.querySelector(closeSelector),
      modals = document.querySelectorAll("[data-modal]"),
      scroll = calcScroll();

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        if (e.target.classList.contains("button-consultation")) {
          popupConsultationShowed = true;
        }

        btnPressed = true;

        if (destroyTrigger) {
          trigger.remove();
        }

        modals.forEach((item) => {
          item.style.display = "none";
          item.classList.add("animated", "fadeIn");
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target == btnClose || e.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      let display;

      document.querySelectorAll("[data-modal]").forEach((item) => {
        if (getComputedStyle(item).display !== "none") {
          display = "block";
        }
      });

      if (!display && !popupConsultationShowed) {
        document.querySelector(selector).style.display = "block";
        document.body.style.overflow = "hidden";
        let scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }

  function calcScroll() {
    let div = document.createElement("div");

    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      if (
        !btnPressed &&
        window.scrollY + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight
      ) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal(".button-design", ".popup-design", ".popup-close");
  bindModal(".button-consultation", ".popup-consultation", ".popup-close");
  bindModal(".fixed-gift", ".popup-gift", ".popup-close", true);
  openByScroll(".fixed-gift");
  // showModalByTime(".popup-consultation", 60000);
};

export default modals;
