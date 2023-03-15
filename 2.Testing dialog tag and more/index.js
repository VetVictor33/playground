const greetingsDialog = document.querySelector('dialog')
const btnOpen = document.querySelector('.open-dialog');

btnOpen.addEventListener('click', () => {
    greetingsDialog.showModal();
})