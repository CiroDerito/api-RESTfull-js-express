document.getElementById('movieForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const movieData = {
        title: document.querySelector('[name="title"]').value,
        year: parseInt(document.querySelector('[name="year"]').value, 10),
        director: document.querySelector('[name="director"]').value,
        duration: document.querySelector('[name="duration"]').value,
        genre: document.querySelector('[name="genre"]').value.split(',').map(item => item.trim()),
        rate: parseFloat(document.querySelector('[name="rate"]').value.replace(',', '.')),
        poster: document.querySelector('[name="poster"]').value
    };

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        alert('Por favor, completa todos los campos.');
        return;
    }


    try {
        const response = await axios.post('http://localhost:3000/movies', movieData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert(response.data.message || 'Película añadida exitosamente');
        document.getElementById('movieForm').reset();
    } catch (error) {
        console.error(error);
        alert('Error al añadir película');
    }
});
document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('movieForm').reset();
});