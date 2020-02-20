document.querySelectorAll('.video_play-icon').forEach(function (element) {
    element.onclick = showModal;
});

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide-wrap');
    event.stopPropagation();

    document.onkeydown = function (event) {
        //закрываем окно на кнопку Esc
        if (event.keyCode == 27) closeModal();
    }
}

function closeModal() {
    document.querySelectorAll('.video_wrap-container').forEach(function (element) {
        element.classList.add('hide-wrap');
    });
    document.location.reload();
    //document.onkeydown = null;
}

//============================================================================





