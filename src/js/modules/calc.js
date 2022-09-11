const calc = (
  sizeSelector,
  materialSelector,
  optionsSelector,
  promocodSelector,
  resultSelector,
  state
) => {
  const size = document.querySelector(sizeSelector),
    material = document.querySelector(materialSelector),
    option = document.querySelector(optionsSelector),
    promocod = document.querySelector(promocodSelector),
    result = document.querySelector(resultSelector);
  let sum = 0;

  function calcPrice() {
    sum = Math.round(+size.value * +material.value + +option.value);

    if(this.tagName == "SELECT"){
      state[this.getAttribute("id")] = this.value;
    }

    if (size.value == "" || material.value == "") {
      return;
    } else if (promocod.value === "IWANTPOPART") {
      result.textContent = Math.round(sum * 0.7);
      state.price = sum;
    } else {
      result.textContent = sum;
      state.price = sum;
    }
  }

  size.addEventListener("change", calcPrice);
  material.addEventListener("change", calcPrice);
  option.addEventListener("change", calcPrice);
  promocod.addEventListener("input", calcPrice);
};

export default calc;
