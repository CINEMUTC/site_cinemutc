icons.addEventListener("click", () => {
    nav.classList.toggle("active")
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.remove("active");
    }
  });


// Récolte des données de l'API et décla des constantes pour la liste de films
const apiKey = '8395f99ea1dff01cb6d776b1a8ed8565'; 
const apiUrl = 'https://api.themoviedb.org/3';
const movieIds = [194, 26005, 13754, 10227, 525, 976];
const datesDiffusionClub = ['13/09/2023', '20/09/2023', '27/09/2023', '04/10/2023', '11/10/2023', '18/10/2023'];

const cycle1 = [0, 1, 2, 3, 4, 5]; 
const cycle2 = []; 

function ajouterFilmsAuCycle(cycle, titreCycle) {
  cycle.forEach(index => {
    const movieId = movieIds[index];
    const clubReleaseDate = datesDiffusionClub[index];

    fetch(`${apiUrl}/movie/${movieId}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const movieTitle = data.title;
        const posterPath = data.poster_path;

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const titleElement = document.createElement('h2');
        titleElement.textContent = movieTitle;

        const dateElement = document.createElement('p');
        dateElement.textContent = `Date de projection : ${clubReleaseDate}`;

        const posterElement = document.createElement('img');
        posterElement.src = `https://image.tmdb.org/t/p/w500${posterPath}`;
        posterElement.alt = movieTitle;

        movieElement.appendChild(posterElement);
        movieElement.appendChild(titleElement);
        movieElement.appendChild(dateElement);

        const linkElement = document.createElement('a');
        linkElement.href = `lien_vers_page_du_film.html?id=${movieId}`; // Remplacer avec l'URL réel de la page du film
        linkElement.appendChild(movieElement);

        // Ajout du film au cycle correspondant
        document.getElementById(titreCycle).appendChild(linkElement);
      })
      .catch(error => console.error('Erreur :', error));
  });
}

ajouterFilmsAuCycle(cycle1, 'cycle1'); 
ajouterFilmsAuCycle(cycle2, 'cycle2'); 





  

