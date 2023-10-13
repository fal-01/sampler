import { useState } from 'react';
import Drum from './components/Drum';
import Key from './components/Key';
import Bass from './components/Bass';
import Guitar from './components/Guitar';
import VisualEffectP5 from './components/VisualEffectP5';
import './App.css';

function App() {
  const [soundName, setSoundName] = useState(null);

  const playSound = (name) => {
    setSoundName(name);
  };

  const bassSounds = [
    {
      name: "bass1",
      sound: require('./bass/bass1.mp3'),
      key: "Q"
    },
    {
      name: "bass2",
      sound: require('./bass/bass2.mp3'),
      key: "W"
    },
    {
      name: "bass3",
      sound: require('./bass/bass3.mp3'),
      key: "E"
    },
    {
      name: "bass4",
      sound: require('./bass/bass4.mp3'),
      key: "R"
    },
    {
      name: "bass5",
      sound: require('./bass/bass5.mp3'),
      key: "T"
    },
    {
      name: "bass6",
      sound: require('./bass/bass6.mp3'),
      key: "Y"
    },
  ];

  const drumSounds = [
    {
      name: "bass",
      sound: require('./drums/bass.mp3'),
      key: "A"
    },
    {
      name: "clap",
      sound: require('./drums/clap.mp3'),
      key: "S"
    },
    {
      name: "crash",
      sound: require('./drums/crash.mp3'),
      key: "D"
    },
    {
      name: "hihat",
      sound: require('./drums/hihat.mp3'),
      key: "F"
    },
    {
      name: "hihatopen",
      sound: require('./drums/hihatopen.mp3'),
      key: "G"
    },
    {
      name: "ride",
      sound: require('./drums/ride.mp3'),
      key: "H"
    },
    {
      name: "snare",
      sound: require('./drums/snare.mp3'),
      key: "J"
    },
    {
      name: "tom",
      sound: require('./drums/tom.mp3'),
      key: "K"
    }
  ];

  const keySounds = [
    {
      name: "key1",
      sound: require('./keys/keys1.mp3'),
      key: "Z"
    },
    {
      name: "key2",
      sound: require('./keys/keys2.mp3'),
      key: "X"
    },
    {
      name: "key3",
      sound: require('./keys/keys3.mp3'),
      key: "C"
    },
    {
      name: "key4",
      sound: require('./keys/keys4.mp3'),
      key: "V"
    },
    {
      name: "key5",
      sound: require('./keys/keys5.mp3'),
      key: "B"
    },
    {
      name: "key6",
      sound: require('./keys/keys6.mp3'),
      key: "N"
    }
  ];

  const guitarSounds = [
    {
      name: "guitar1",
      sound: require('./guitar/guitar1.mp3'),
      key: "1"
    },
    {
      name: "guitar2",
      sound: require('./guitar/guitar2.mp3'),
      key: "2"
    },
    {
      name: "guitar3",
      sound: require('./guitar/guitar3.mp3'),
      key: "3"
    },
    {
      name: "guitar4",
      sound: require('./guitar/guitar4.mp3'),
      key: "4"
    }


  ];

  return (
    <div className="App">
      <h1>Sampler</h1>
      <VisualEffectP5 soundName={soundName} />
      <div className="drums">
        {bassSounds.map((sound) => (
          <Bass
            key={sound.name}
            letter={sound.key}
            sound={sound.sound}
            playSound={() => playSound(sound.name)}
          />
        ))}
      </div>
      <div className="drums">
        {drumSounds.map((sound) => (
          <Drum
            key={sound.name}
            letter={sound.key}
            sound={sound.sound}
            playSound={() => playSound(sound.name)}
          />
        ))}
      </div>
      <div className="drums">
        {keySounds.map((sound) => (
          <Key
            key={sound.name}
            letter={sound.key}
            sound={sound.sound}
            playSound={() => playSound(sound.name)}
          />
        ))}
      </div>
      <div className="drums">
        {guitarSounds.map((sound) => (
          <Guitar
            key={sound.name}
            letter={sound.key}
            sound={sound.sound}
            playSound={() => playSound(sound.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
