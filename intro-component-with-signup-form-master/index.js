const inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("invalid", (event) => {
    console.log("invalid");
    event.target.parentElement.classList.add("error");
  });

  inputs[i].addEventListener("input", (event) => {
    event.target.parentElement.classList.remove("error");
  });

  inputs[i].addEventListener("focusin", (event) => {
    event.target.classList.add("focus");
  });

  inputs[i].addEventListener("focusout", (event) => {
    event.target.classList.remove("focus");
  });
}
