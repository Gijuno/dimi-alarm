import LiveClock from 'react-live-clock'

function App() {
  return (
    <div className="App">
      <LiveClock format={'HH:mm:ss'} ticking={true} timezone={'KR/Pacific'} />
    </div>
  );
}

export default App;
