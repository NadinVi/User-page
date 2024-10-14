const links = document.querySelectorAll(".header__menu .link");

links.forEach((link) => {
  link.addEventListener("click", function (element) {
    links.forEach((item) => item.classList.remove("active"));
    element.target.classList.add("active");
  });
});
