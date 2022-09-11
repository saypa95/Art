import modals from "./modules/modals";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import scrolling from "./modules/scrolling";


window.addEventListener('DOMContentLoaded', ()=>{
  "use strict";
  let calcFormState = {};

  modals();
  slider(".main-slider-item", "vertical");
  slider(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
  forms(calcFormState);
  mask("[name='phone']");
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles('.button-styles', '.styles .row');
  calc('#size', '#material', '#options', '.promocode', '.calc-price', calcFormState);
  filter();
  pictureSize(".sizes-block");
  accordion("#accordion");
  burger(".burger", ".burger-menu");
  scrolling();
});