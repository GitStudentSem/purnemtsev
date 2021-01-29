$(function () {
  // Бургер меню
  var burger = document.querySelector(".burger");
  burger.addEventListener("click", function () {
    document
      .querySelector(".header__list")
      .classList.toggle("header__list-visible");
  });
  // Закрытие мобильного меню
  const modal = $(".header__link"),
    func = () => {
      document
        .querySelector(".header__list-visible")
        .classList.remove("header__list-visible");
    };
  modal.on("click", func);
  // параллакс
});
