const movies = [
  // Action
 {
  title: "Iron Man",
  year: 2008,
  genre: "Action",
  rating: 7.9,
  image: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    rating: 8.1,
    image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"
  },
  {
    title: "John Wick",
    year: 2014,
    genre: "Action",
    rating: 7.4,
    image: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
  },
  {
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },

  // Thriller
  {
    title: "Se7en",
    year: 1995,
    genre: "Thriller",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/69Sns8WoET6CfaYlIkHbla4l7nC.jpg"
  },
  {
    title: "Shutter Island",
    year: 2010,
    genre: "Thriller",
    rating: 8.2,
    image: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg"
  },
  {
    title: "Gone Girl",
    year: 2014,
    genre: "Thriller",
    rating: 8.1,
    image: "https://image.tmdb.org/t/p/w500/qymaJhucquUwjpb8oiqynMeXnID.jpg"
  },

  // Horror
  {
    title: "The Conjuring",
    year: 2013,
    genre: "Horror",
    rating: 7.5,
    image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
  },
  {
    title: "It",
    year: 2017,
    genre: "Horror",
    rating: 7.3,
    image: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg"
  },
  {
    title: "A Quiet Place",
    year: 2018,
    genre: "Horror",
    rating: 7.6,
    image: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"
  },
  {
    title: "The Exorcist",
    year: 1973,
    genre: "Horror",
    rating: 8.1,
    image: "https://image.tmdb.org/t/p/w500/4ucLGcXVVSVnsfkGtbLY4XAius8.jpg"
  },

  // Drama
  {
    title: "The Shawshank",
    year: 1994,
    genre: "Drama",
    rating: 9.3,
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"
  },
  {
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
  },
  

  // Sci-Fi
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    title: "Blade Runner 2049",
    year: 2017,
    genre: "Sci-Fi",
    rating: 8.0,
    image: "https://image.tmdb.org/t/p/w500/aMpyrCizvSdc0UIMblJ1srVgAEF.jpg"
  },

  // Animation
  {
    title: "Toy Story",
    year: 1995,
    genre: "Animation",
    rating: 8.3,
    image: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
  },
  {
    title: "Frozen II",
    year: 2019,
    genre: "Animation",
    rating: 6.9,
    image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg"
  },
  {
    title: "Coco",
    year: 2017,
    genre: "Animation",
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"
  },
  {
    title: "Spirited Away",
    year: 2001,
    genre: "Animation",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"
  }
];

let dom_container = document.querySelector(".dom_container");

let all= document.querySelector('#all');
let action= document.querySelector('#action');
let thriller= document.querySelector('#thriller');
let scifi= document.querySelector('#sci-fi');
let animation= document.querySelector('#animation');
let horror= document.querySelector('#horror');
let drama= document.querySelector('#drama');

let showdata =(movies)=>{
    
  dom_container.innerHTML =movies.map((movie)=>`
  <div style="max-width:280px; text-align:center;">
  <div style="padding:15px" class="hover">
  <img src =${movie.image} class="poster"/>
  </div>
  <h5>${movie.title}</h5>
  <p>${movie.year}</p>
  </div>
  `).join("");
}


showdata(movies);


all.addEventListener('click',()=>{
    showdata(movies);
})
action.addEventListener('click',()=>{
    let newmovie=movies.filter((movie)=>movie.genre === "Action")
    showdata(newmovie);
})
thriller.addEventListener('click',()=>{
    let newmovie=movies.filter((movie)=>movie.genre === "Thriller")
    showdata(newmovie);
})
scifi.addEventListener('click',()=>{
    let newmovie=movies.filter((movie)=>movie.genre === "Sci-Fi")
    showdata(newmovie);
})
animation.addEventListener('click',()=>{
    let newmovie=movies.filter((movie)=>movie.genre === "Animation")
    showdata(newmovie);
})
horror.addEventListener('click',()=>{
    let newmovie=movies.filter((movie)=>movie.genre === "Horror")
    showdata(newmovie);
})
drama.addEventListener('click',()=>{
    let newmovie=movies.filter((movie)=>movie.genre === "Drama")
    showdata(newmovie);
})