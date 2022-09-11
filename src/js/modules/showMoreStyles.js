import { getResources } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);

  btn.addEventListener("click", function () {
    getResources("http://localhost:3000/styles")
      .then((response) => createCards(response))
      .catch((error) => console.log(error));

    this.remove();
  });

  function createCards(response) {
    response.forEach(({ src, title, link }) => {
      const card = document.createElement("div");
      card.classList.add(
        "animated",
        "fadeInUp",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1"
      );

      card.innerHTML = `
      <div class=styles-block>
						<img src=${src} alt>
						<h4>${title}</h4>
						<a href="${link}">Подробнее</a>
					</div>
      `;

      document.querySelector(wrapper).append(card);
    });
  }
};

export default showMoreStyles;
