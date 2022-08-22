// CSS
import './App.css';

// Components
import GamesContent from './components/GamesContent';
import Header from "./components/Header";

//Games images
import ReturnToMoriaCover from "./assets/games-images/return-to-moria.jpg";
import CenturyCover from "./assets/games-images/century.jpg";
import JudasCover from "./assets/games-images/judas.jpg";
import RetreatToEnenCover from "./assets/games-images/retreat-to-enen.jpeg";

const gamesOnSale = [
  { id: 1, name: "Return to Moria", cover: ReturnToMoriaCover },
  { id: 2, name: "Century", cover: CenturyCover },
  { id: 3, name: "Judas", cover: JudasCover },
  { id: 4, name: "Retreat to Enen", cover: RetreatToEnenCover },
]

function App() {
  return (
    <div className="App">
      <Header />
      <GamesContent gamesCollection={gamesOnSale} />
    </div>
  );
}

export default App;
