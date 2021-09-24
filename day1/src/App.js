import './App.css';
import Albums from "./components/Albums/Albums";


function App() {
   const albums = [
  {
    id: 1,
    image:
      "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/Rockstar-Poster-Feature-306x393.jpg",
    name: "Rockstar",
    music: "A.R Rahman",
    song: "https://www.youtube.com/watch?v=cB-ZRijjIMY",
  },
  {
    id: 2,
    image:
      "https://stat2.bollywoodhungama.in/wp-content/uploads/2016/03/75594307-306x393.jpg",
    name: "Highway",
    music: "A.R Rahman",
    song: "https://www.youtube.com/watch?v=4hK8nmvAUnA",
  },
  {
    id: 3,
    image:
      "https://www.filmibeat.com/img/popcorn/movie_posters/raanjhnaa-20130513121300-11303.jpg",
    name: "Ranjhanna",
    music: "A.R Rahman",
    song: "https://www.youtube.com/watch?v=rM2FLFfIVxo",
  },
  {
    id: 4,
    image: "https://upload.wikimedia.org/wikipedia/en/0/0e/Jodhaa_akbar.jpg",
    name: "Jodha Akbar",
    music: "A.R Rahman",
    song: "https://www.youtube.com/watch?v=ve4IQMlTMuY",
  },
  {
    id: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/en/0/08/Rang_De_Basanti_poster.jpg",
    name: "Rang De Basanti",
    music: "A.R Rahman",
    song: "https://www.youtube.com/watch?v=Exrs85DTD0A",
  },
  {
    id: 6,
    image:
      "https://cdn.cinematerial.com/p/297x/iajmjaap/jannat-indian-movie-poster-md.jpg?v=1456298328",
    name: "Jannat",
    music: "Pritam",
    song: "https://www.youtube.com/watch?v=eESg95AqmbA",
  },
  {
    id: 7,
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Bharat_film_poster.jpg/220px-Bharat_film_poster.jpg",
    name: "Bharat",
    music: "Vishal–Shekhar",
    song: "https://www.youtube.com/watch?v=98iFfw0n-Q8",
  },
];
  return (
    <div className="App">
      <h1>Album</h1>
     <Albums albums={albums}/>
    </div>
  );
}

export default App;
