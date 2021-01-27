$(function () {
  // Бургер меню
  var burger = document.querySelector(".burger");
  burger.addEventListener("click", function () {
    document
      .querySelector(".header__list")
      .classList.toggle("header__list-visible");
  });

  // Бургер кнопка
  (function () {
    const burgerBtn = document.querySelector(".burger");
    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle("burger__active");
    });
  })();
});
