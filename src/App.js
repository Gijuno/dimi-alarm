import Timer from './Timer'
import audio from "./dimigo_bell.mp3"

const player = document.createElement('audio')

export const bellPlayer = () => {
  console.log("ssp?")  
  player.src = audio
  player.autoplay = true
  document.body.append(player)

  console.log(player)
}

function App() {
  return (
    <div className="App" onClick={bellPlayer}>
      <Timer />
      
    </div>
  );
}

export default App;
