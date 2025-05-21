const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
///////////////////////////////
// Таймер Элемент загрузки
    setTimeout(function () {
      // Скрываем загрузчик плавно
      const loader = document.getElementById('loader');
      loader.style.opacity = 0;
      setTimeout(function () {
        loader.style.display = 'none';
      }, 1000); // ждем, пока завершится transition

      // Показываем контент с плавным эффектом
      const loadcontent = document.getElementById('content');
    
      // немного задержки для применения transition
      setTimeout(function () {
      }, 10);
    }, 2000); // задержка перед исчезновением загрузчика

///////////////////////////////
