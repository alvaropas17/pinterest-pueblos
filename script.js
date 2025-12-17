document.addEventListener('DOMContentLoaded', function () {
    const likeButtons = document.querySelectorAll('.like-btn-container');
    const tarjetas = document.querySelectorAll(".image-container");
    const categoryLinks = document.querySelectorAll(".category-link");
    const categoryFilter = document.getElementById('categoryFilter');
    const container = document.querySelector('.container');

    let currentFilter = 'all';

    likeButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();

            const imageContainer = this.closest('.image-container');
            const icons = this.querySelectorAll('.like-icon');

            // Toggle entre iconos
            icons.forEach(icon => {
                icon.style.display = icon.style.display === 'none' ? 'block' : 'none';
            });

            // Toggle clase liked
            imageContainer.classList.toggle('liked');

            const isFavorite = imageContainer.classList.contains('liked');
            imageContainer.setAttribute('data-favorite', isFavorite);

            // Reordenar: mover al principio del container
            if (imageContainer.classList.contains('liked')) {
                container.insertBefore(imageContainer, container.firstChild);
            }
        });
    });


    categoryLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            applyFilters();
        });
    });

    categoryFilter.addEventListener('change', function () {
        applyFilters();
    });

    function applyFilters() {
        const selectedCategory = categoryFilter.value;
        tarjetas.forEach(tarjeta => {
            const category = tarjeta.getAttribute('data-category');
            const isFavorite = tarjeta.getAttribute('data-favorite') === 'true';

            let shouldShow = false;

            if (currentFilter === 'all') {
                shouldShow = selectedCategory === '' || selectedCategory === category;
            } else if (currentFilter === 'favorites') {
                shouldShow = isFavorite && (selectedCategory === '' || selectedCategory === category);
            }

            tarjeta.classList.toggle('hidden', !shouldShow);
        });
    }

    // Evento click en tarjetas
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", function (e) {
            // Evitar que se active al hacer click en los iconos
            if (e.target.closest('.overlay-icons')) return;
            
            // Cambio más sutil y permanente
            if (!this.classList.contains('clicked')) {
                this.classList.add('clicked');
            }
        });
    });
});