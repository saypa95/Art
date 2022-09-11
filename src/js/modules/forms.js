import { postData } from "../services/requests";

const forms = (state) => {
  const forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    upload =  document.querySelectorAll("[name='upload']");

  function clearForms() {
    inputs.forEach((input) => {
      input.value = "";
    });
    document.querySelector("textarea").value = "";
    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
  });
  }

  upload.forEach(item => {
    item.addEventListener("input", () => {
      let dots;
            const arr = item.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
    });
  });

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png",
  };

  const path = {
    designer: "assets/server.php",
    question: "assets/question.php",
  };

  

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      form.parentNode.append(statusMessage);

      form.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        form.style.display = " none";
      }, 400);

      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      statusMessage.append(statusImg);

      let textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusMessage.append(textMessage);

      const formData = new FormData(form);
      // formData.append('image', form.querySelector("[name='upload']").files[0]);
      for(let key in state){
        formData.append(key, state[key]);
      }
      let api;
      form.closest(".popup-design") || form.classList.contains("calc_form") ? api = path.designer : api = path.question;

      postData(api, formData)
        .then((res) => {
          console.log(res);
          statusImg.setAttribute("src", message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute("src", message.fail);
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearForms();
          setTimeout(() => {
            statusMessage.remove();
            form.style.display = "block";
            form.classList.remove("fadeOutUp");
            form.classList.add("fadeInUp");
            state = {};
          }, 3000);
        });
    });
  });
};

export default forms;
