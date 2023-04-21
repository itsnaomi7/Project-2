const form = document.querySelector("#new-quote-form");
const input = document.querySelector("#new-quote-input");
const list_el = document.querySelector("#quotes");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const quote = input.value;
  console.log(quote);
  if (!quote) {
    alert("Say something!");
    return;
  }


  const quote_el = document.createElement("div");
  quote_el.classList.add("quote");
  const quote_content_el = document.createElement("div");
  quote_content_el.classList.add("content");

  const quote_input_el = document.createElement("input");
  quote_input_el.classList.add("text");
  quote_input_el.value = quote; // so you can't edit this
  quote_input_el.type = "text";
  
  quote_input_el.setAttribute("readonly", "readonly");

  quote_content_el.appendChild(quote_input_el);

  const quote_action_el = document.createElement("div");
  quote_action_el.classList.add("actions");

  const quote_edit_el = document.createElement("button");
  quote_edit_el.classList.add("edit");
  quote_edit_el.innerHTML = "Edit";

  const quote_delete_el = document.createElement("button");
  quote_delete_el.classList.add("delete");
  quote_delete_el.innerHTML = "Delete";

  quote_action_el.appendChild(quote_edit_el);
  quote_action_el.appendChild(quote_delete_el);

  quote_el.appendChild(quote_content_el);
  quote_el.appendChild(quote_action_el);

  list_el.appendChild(quote_el);

  input.value = "";

  quote_edit_el.addEventListener("click", () => {
    if (quote_edit_el.innerText.toLowerCase() === "edit") {
      quote_input_el.removeAttribute("readonly");
      quote_input_el.focus();
      quote_edit_el.innerText = "Save";
    } else {
      quote_input_el.setAttribute("readonly", "readonly");
      quote_edit_el.innerText = "Edit";
    }
    console.log(list_el.childNodes);
  });

  quote_delete_el.addEventListener("click", () => {
    list_el.removeChild(quote_el);
  });
});
