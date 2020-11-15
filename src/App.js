
import './App.css';
import CompNumAl from './CompNumAl';

function App() {
    const titulo = "Si no te decides qué capítulo ver, aquí tienes la solución ;)";
    const descripcion = "Clickea y aleatoriamente te saldrá una temporada y un capítulo para ver tu serie favorita"
  let foto = {photo: './CollageFriends.png'}
  return (
    <div className="App">
      <header className="App-header">
      <img src={foto.photo} alt="CollageFriends"/>
      <h2>{titulo}</h2>
      <h4>{descripcion}</h4>
       <CompNumAl></CompNumAl>
      </header>
    </div>
  );
}

export default App;
