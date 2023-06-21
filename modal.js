
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrop: document.querySelector(".backdrop"),
  };

  refs.openModalBtn?.addEventListener("click", toggleModal);
  refs.closeModalBtn?.addEventListener("click", toggleModal);
  refs.backdrop?.addEventListener("click", handleBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function handleBackdropClick(event) {
    if (event.target === refs.backdrop) {
      toggleModal();
    }
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open]"),
    closeModalBtn: document.querySelector("[data-close]"),
    modal: document.querySelector("[modal]"),
    backdrop: document.querySelector(".backdropp"),
  };

  refs.openModalBtn?.addEventListener("click", toggleModal);
  refs.closeModalBtn?.addEventListener("click", toggleModal);
  refs.backdrop?.addEventListener("click", handleBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle("is-hiddenn");
  }

  function handleBackdropClick(event) {
    if (event.target === refs.backdrop) {
      toggleModal();
    }
  }
})();