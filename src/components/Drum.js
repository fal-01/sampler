import { useEffect, useState } from 'react';
import { Howl } from 'howler';

function Drum({ letter, sound, playSound }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const playDrumSound = () => {
    const soundHowl = new Howl({
      src: [sound],
    });
    soundHowl.play();

    // Set the soundName when the sound is played
    playSound(sound.name);

    // Add a class to indicate that the drum is playing
    setIsPlaying(true);

    // Remove the class after a short delay (you can adjust the duration)
    setTimeout(() => {
      setIsPlaying(false);
    }, 150); // Change this value to control how long the class is applied
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toUpperCase() === letter) {
        playDrumSound();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, [letter, sound, playSound]);

  return (
    <div className={`drum ${isPlaying ? 'playing' : ''}`} onClick={playDrumSound}>
      <div className="key">{letter}</div>
    </div>
  );
}

export default Drum;
