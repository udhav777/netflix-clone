
import './App.css';
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
      <Banner />

      <Row title="Trending Now" fetchUrl={request.fetchTrading} />
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchUrl={request.fetchDocumentaries} />
    
    </div>
  );
}

export default App;
