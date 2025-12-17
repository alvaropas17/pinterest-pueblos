document.addEventListener('DOMContentLoaded', function () {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();

            const imageContainer = this.closest('.image-container');
            const column = imageContainer.parentElement;
            const icons = imageContainer.querySelectorAll('.like-btn');

            // Toggle entre iconos
            icons.forEach(icon => {
                icon.style.display = icon.style.display === 'none' ? 'block' : 'none';
            });

            // Toggle clase liked
            imageContainer.classList.toggle('liked');

            // Reordenar: mover al principio de la columna
            if (imageContainer.classList.contains('liked')) {
                column.insertBefore(imageContainer, column.firstChild);
            }
        });
    });
});