import './App.css';

function getMonth(initial, cur) {
  if (initial.getDate() === cur.getDate()) {
    let month = cur.getMonth() - initial.getMonth() + (24 * (cur.getYear() - initial.getYear()))

    return <div className='month'>
      ({month}. Monatstag)
    </div>
  }
  return <></>
}

function getYear(initial, cur) {
  if (initial.getDate() === cur.getDate() && initial.getMonth() === cur.getMonth()) {
    let year = cur.getYear() - initial.getYear()

    return <div className='year'>
      {year}. Jahrestag, <b>boa</b>
    </div>
  }
  return <></>
}

function App() {
  let initial = new Date("15 Oct 2024")
  let cur = new Date()

  let tagesTag = Math.floor((cur - initial) / (1000 * 60 * 60 * 24))

  return (
    <div className="App">
      <div className='day'>
        {tagesTag}. Tagestag :)
      </div>
      {getMonth(initial, cur)}
      {getYear(initial, cur)}
    </div>
  );
}

export default App;
