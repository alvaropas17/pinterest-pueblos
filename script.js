document.addEventListener('DOMContentLoaded', function () {
    const likeButtons = document.querySelectorAll('.like-btn');
    const tarjetas = document.querySelectorAll(".image-container");

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

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", function (e) {
            // Cambio más sutil y permanente
            if (!this.classList.contains('clicked')) {
                this.classList.add('clicked');
                this.style.borderColor = '#885f65a1';
                this.style.backgroundColor = '#fff5f7';
            }
        });
    });
});