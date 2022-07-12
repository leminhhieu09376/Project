

let movies = document.querySelector(".movies");

getAllMovie();


async function getAllMovie() {
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1");
    const data = await response.json();
    showMovie(data.results);
}

function showMovie(data) {
    for (let i = 0; i <= data.length; i++) {
        let movie = data[i];
        let movieTag = document.createElement('div');
        movieTag.classList.add(".movie-item")

        let movieHTML = `
            <div class="movie-item">
            ${movie && movie.poster_path ? `<img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}">` : ""}
                <div class="movie-info">
                    <p>${movie && movie.title ? movie.title : ""}</p>
                    <span>${movie && movie.vote_average ? movie.vote_average : ""}</span>
                </div>
                <div class="movie__overview">
                    <p>${movie && movie.overview ? movie.overview : ""}</p>
                </div>
            </div>
            `;
        movieTag.innerHTML = movieHTML;
        movies.appendChild(movieTag);
    }
}



