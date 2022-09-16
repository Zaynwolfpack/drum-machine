import { useEffect, useState } from 'react';
import './App.scss';


function App() {
  const [activeKey, setActiveKey] = useState('') 
  useEffect(() => {
   document.addEventListener('keydown', (event) => {
    playSound(event.key.toUpperCase())
   })
  }, [])


  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      name:  "Heater 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      name: "Heater 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      name: "Heater 3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      name: "Heater 4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      name: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      name: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      name: "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      name: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      name: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ]; 
  
  function playSound(selector) {
    const audio = document.getElementById(selector);
    audio.play();
    setActiveKey(selector)
  }

  return (
    <div className="App">
      <header className="App-header" id='Title'>Drum Machine</header>
        <div id='drum-machine'>
        <div id='display'>{activeKey}</div> 
         <div  className='pad-bank'>
          {drumPads.map((drumPad) => (
           <div 
            key={drumPad.src}
            onClick={() => {
            playSound(drumPad.text)
           }}
             className='drum-pad' 
             id={drumPad.src}>
            {drumPad.text}
            <audio 
              className='clip' 
              id={drumPad.text} 
              src={drumPad.src}>
            </audio>
            </div>))}
         <div className='control-container'>

         </div>
         </div>
        </div>
    </div>
  );
}

export default App;
