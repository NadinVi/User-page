const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelectorAll(".modal-btn-open");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.forEach((btn) => btn.addEventListener("click", toggleModal));

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    toggleModal();
  }
});
