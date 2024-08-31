if (typeof document !== 'undefined') {
  const cardContainer = document.getElementById('card-container');

  const renderMovies = (data) => {
    data.forEach((movie) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const poster = movie.poster ? `<img src="${movie.poster}" alt="${movie.title} Poster">` : '';
      const genre = movie.genre && movie.genre.length > 0 ? movie.genre.join(', ') : 'N/A';

      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">
            ${poster}
            <h3>${movie.title}</h3>
          </div>
          <div class="card-back">
            <h4>Director: ${movie.director}</h4>
            <p>Duration: ${movie.duration}</p>
            <p>Genre: ${genre}</p>
            <p>Rate: ${movie.rate}</p>
            <p>Year: ${movie.year}</p>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });

      cardContainer.appendChild(card);
    });
  };

  module.exports = renderMovies;
}
