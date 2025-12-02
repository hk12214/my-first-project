function SearchSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector(".search-form-input");
  let cityElement = document.querySelector(".city");
  cityElement.innerHTML = searchInput.value;
}

let formBtn = document.querySelector(".search-form");
formBtn.addEventListener("submit", SearchSubmit);
