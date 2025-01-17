const modal = document.getElementById("modal-qr");
const openModalLink = document.querySelector("#openModal"); 
const closeModalButton = document.getElementById("closeModal");

// Открываем модальное окно при клике на ссылку
openModalLink.addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    modal.style.display = "block"; // Показываем модальное окно
});

// Закрываем модальное окно при клике на крестик
closeModalButton.addEventListener("click", function () {
    modal.style.display = "none"; // Скрываем модальное окно
});

// Закрываем модальное окно при клике вне его области
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Скрываем модальное окно, если клик вне его
    }
});