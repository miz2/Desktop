// api brings most popular list of movies 
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const moiveBox = document.querySelector("#movie-box")
// search api 
// init call:as soon as page loads 

const getMovies=async(api)=>{
const response =await fetch(api);
const data=await response.json()
// console.log(data)
showMovies(data.results)
}

const showMovies=(data)=>{
   
    // console.log(data)

    // traverse the data using forEach loop
    movieBox.innerHTML = ""
    // empties the movie box then applies logic 
    data.forEach(
        (result)=>{
            const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
            // individual objects 
            // console.log(item)
            const box=document.createElement("div");
            // adding  box to div dynamically 
            box.classList.add("box")
            box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `;
            movieBox.appendChild(box);
    })
}

document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            // searched api
            getMovies(SEARCHAPI + event.target.value)
            // 
        } else {
            // popular
            getMovies(APIURL);
        }
    }
)
getMovies(APIURL)

