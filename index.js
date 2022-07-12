// const API = "https://thatcopy.pw/catapi/rest/";

// let randomButton = document.querySelector(".cat__btn");
// let imageContainer = document.querySelector(".cat__img");
// console.log(imageContainer);
// randomButton.addEventListener("click", function () {

//     fetch(API).then(function (response) {
//         return response.json();
//     }).then(function (data) {
//         showImage(data);
//     })

// });


// function showImage(data) {
//     let imgTag = document.createElement("img");
//     imgTag.classList.add("cat__img");
//     imgTag.src = data.url;
//     imageContainer.appendChild(imgTag);
// }



// let randomButton = document.querySelector(".btn");
// let img = document.querySelector(".img");

// randomButton.addEventListener("click", function () {
//     fetch(API).then(function (response) {
//         return response.json();
//     }).then(function (data) {
//         showImage(data);
//     })
// });

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

// Anh thay no kì kì đây là một cách fix
// Những chỗ trên anh kiểm tra nếu tồn tại movie và movie overview, movie vote,... thì anh mới cho nó render ra
// Còn ko tồn tại thì cho nó render ra rỗng
// Cho nên nãy console nó báo undefined á.
// Oke vậy là fix được mà :)) a hk hiểu API repsspinse có mà code em lại sai Hmm oke vậy làm tiếp đi nha

