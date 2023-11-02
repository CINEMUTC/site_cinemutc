icons.addEventListener("click", () => {
    nav.classList.toggle("active")
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      nav.classList.remove("active");
    }
  });


  // Sélectionnez le conteneur parent des éléments à inverser (par exemple, le body)
const container = document.querySelector('.cycles');

// Sélectionnez tous les éléments avec la classe "cycle-container"
const cycleContainers = document.querySelectorAll('.cycle-container');

// Créez un tableau vide pour stocker les éléments dans l'ordre inversé
const reversedCycleContainers = [];

// Parcourez les éléments à partir du dernier et ajoutez-les au tableau inversé
for (let i = cycleContainers.length - 1; i >= 0; i--) {
  reversedCycleContainers.push(cycleContainers[i]);
}

// Videz le conteneur
container.innerHTML = '';

// Ajoutez les éléments dans l'ordre inversé
reversedCycleContainers.forEach(cycleContainer => {
  container.appendChild(cycleContainer);
});


// Récolte des données de l'API et décla des constantes pour la liste de films
const apiKey = '8395f99ea1dff01cb6d776b1a8ed8565'; 
const apiUrl = 'https://api.themoviedb.org/3';
const movieIds = [ 
  36095, 1991, 872, 63, 1567, 18533,
  1990, 483, 843, 694, 10016, 10513,
  43950, 884, 12163, 5336, 10331, 
  9693, 24349,
  141,583,11423,935,13310,1696,1398,45649,46837,426,
  78,755,3133,670,3989,10404,31578,6615,103,11624,9593,492,24238,
  856,12101,26513,1075,587,18415,12104,36685,126319,
  58699,583,
  62215,309,77987,9693,2666,12101,99,190880,41878,
  510,29845,187,11139,152601,9323,9552,17431,152603,8053,10315,655,4935,8885,
  64690,404,9428,2196,627,101,194662,11421,8393,525,
  500,336804,985,2108,147,11545,22504,571,149870,38810,309,63311,
  120467,15371,640,20992,247,44629,292539,152601,244458,655,62215,16642,88875,
  223702,629,1124,396535,179150,275,4031,191720,15152,115,338189,15712,19311,
  6977,62,41201,78,19963,922,254320,643,21575, ,36685,108,2011,152780,
  550,46332,4977, ,7294,27327,10315,77338,371492,393519,38,22538,110420,
  801,134,389,242582,1378,270303,975,134350,15067,339403,11416,63318,934911,
  762,696,10086,191720,11906,424694,336808,1255,307,5062,12101,345775,
  641,5511,320007,244267,24238,679,122906, ,10754,477530,9550,340357,44898,347031,
  807,265195,
  37165,11423,129112,15,9323,27324,38438,13363,137450,7735,1563,63900,126319,
  120467,33998,22302,11830,11621,484468,427,192,68,198,11104,1600,40623,
  244786,432068,3112,84175,393559,1678,146,42590,2433,892,149871,194662,
  313369,392794,44214,
  5590,1417,19354,
  387426,371492,
  1541,773,77771,
  398818,525894,
  496243,334533,71859,
  406,336804,12477,
  1091,10212,653,
  101,19026,411003,
  808,
  76341,149,9693,
  381284,
  83666,598,517814,
  22538,4977,424781,
  1089,475,378,
  8193,




];
const datesDiffusionClub = [];

const cycle1 = [0, 1, 2, 3, 4, 5]; 
const cycle2 = [6, 7, 8, 9, 10, 11];
const cycle3 = [12, 13, 14, 15, 16]
const cycle4 = [17, 18] 
const cycle5 = [19,20,21,22,23,24,25,26,27,28] 
const cycle6 = [29,30,31,32,33,34,35,36,37,38,39,40,41] 
const cycle7 = [42,43,44,45,46,47,48,49,50] 
const cycle8 = [51,52] 
const cycle9 = [53,54,55,56,57,58,59,60,61] 
const cycle10 = [62,63,64,65,66,67,68,69,70,71,72,73,74,75] 
const cycle11 = [76,77,78,79,80,81,82,83,84,85] 
const cycle12 = [86,87,88,89,90,91,92,93,94,95,96,97] 
const cycle13 = [98,99,100,101,102,103,104,105,106,107,108,109,110] 
const cycle14 = [111,112,113,114,115,116,117,118,119,120,121,122,123] 
const cycle15 = [124,125,126,127,128,129,130,131,132,133,134,135,136,137] 
const cycle16 = [138,139,140,141,142,143,144,145,146,147,148,149,150] 
const cycle17 = [151,152,153,154,155,156,157,158,159,160,161,162,163] 
const cycle18 = [164,165,166,167,168,169,170,171,172,173,174,175] 
const cycle19 = [176,177,178,179,180,181,182,183,184,185,186,187,188,189] 
const cycle20 = [190,191] 
const cycle21 = [192,193,194,195,196,197,198,199,200,201,202,203,204] 
const cycle22 = [205,206,207,208,209,210,211,212,213,214,215,216,217] 
const cycle23 = [218,219,220,221,222,223,224,225,226,227,228,229] 
const cycle24 = [230,231,232] 
const cycle25 = [233,234,235] 
const cycle26 = [236,237] 
const cycle27 = [238,239,240] 
const cycle28 = [241,242] 
const cycle29 = [243,244,245] 
const cycle30 = [246,247,248] 
const cycle31 = [249,250,251] 
const cycle32 = [252,253,254] 
const cycle33 = [255] 
const cycle34 = [256,257,258] 
const cycle35 = [259] 
const cycle36 = [260,261,262] 
const cycle37 = [263,264,265] 
const cycle38 = [266,,267,268] 
const cycle39 = [269] 
const cycle40 = [] 
const cycle41 = [] 

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
ajouterFilmsAuCycle(cycle3, 'cycle3'); 
ajouterFilmsAuCycle(cycle4, 'cycle4'); 
ajouterFilmsAuCycle(cycle5, 'cycle5'); 
ajouterFilmsAuCycle(cycle6, 'cycle6'); 
ajouterFilmsAuCycle(cycle7, 'cycle7'); 
ajouterFilmsAuCycle(cycle8, 'cycle8'); 
ajouterFilmsAuCycle(cycle9, 'cycle9'); 
ajouterFilmsAuCycle(cycle10, 'cycle10'); 
ajouterFilmsAuCycle(cycle11, 'cycle11');  
ajouterFilmsAuCycle(cycle12, 'cycle12'); 
ajouterFilmsAuCycle(cycle13, 'cycle13'); 
ajouterFilmsAuCycle(cycle14, 'cycle14');  
ajouterFilmsAuCycle(cycle15, 'cycle15');
ajouterFilmsAuCycle(cycle16, 'cycle16'); 
ajouterFilmsAuCycle(cycle17, 'cycle17');  
ajouterFilmsAuCycle(cycle18, 'cycle18');
ajouterFilmsAuCycle(cycle19, 'cycle19'); 
ajouterFilmsAuCycle(cycle20, 'cycle20');  
ajouterFilmsAuCycle(cycle21, 'cycle21');
ajouterFilmsAuCycle(cycle22, 'cycle22'); 
ajouterFilmsAuCycle(cycle23, 'cycle23');  
ajouterFilmsAuCycle(cycle24, 'cycle24');
ajouterFilmsAuCycle(cycle25, 'cycle25'); 
ajouterFilmsAuCycle(cycle26, 'cycle26');  
ajouterFilmsAuCycle(cycle27, 'cycle27');
ajouterFilmsAuCycle(cycle28, 'cycle28'); 
ajouterFilmsAuCycle(cycle29, 'cycle29');  
ajouterFilmsAuCycle(cycle30, 'cycle30');
ajouterFilmsAuCycle(cycle31, 'cycle31');
ajouterFilmsAuCycle(cycle32, 'cycle32'); 
ajouterFilmsAuCycle(cycle33, 'cycle33');  
ajouterFilmsAuCycle(cycle34, 'cycle34');
ajouterFilmsAuCycle(cycle35, 'cycle35');
ajouterFilmsAuCycle(cycle36, 'cycle36');
ajouterFilmsAuCycle(cycle37, 'cycle37'); 
ajouterFilmsAuCycle(cycle38, 'cycle38');  
ajouterFilmsAuCycle(cycle39, 'cycle39');
ajouterFilmsAuCycle(cycle40, 'cycle40');
ajouterFilmsAuCycle(cycle41, 'cycle41');


  

