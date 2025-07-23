const upBtn = document.querySelector(".up__button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    upBtn.classList.add("active");
  } else {
    upBtn.classList.remove("active");
  }
});

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
