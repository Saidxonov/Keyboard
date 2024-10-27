const li = document.querySelectorAll("li");
const typing = document.getElementById("typing");

li.forEach((li) => {
  document.addEventListener("keydown", (e) => {
    if (e.key == li.textContent) {
      li.classList.add("active");
      typing.textContent = e.key;
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.key == li.textContent) {
      li.classList.remove("active");
    }
  });
});
