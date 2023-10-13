// VisualEffectP5.js
import React, { useEffect, useRef, useState } from 'react';
import p5 from 'p5';

const VisualEffectP5 = ({ soundName }) => {
  const canvasRef = useRef(null);
  const [p5Instance, setP5Instance] = useState(null); // Store the p5 instance
  const [playing, setPlaying] = useState(false); // Track if a sound is playing

  const circleDecay = 0.58;

  useEffect(() => {
    const sketch = (p) => {
      const colors = ['#ff5733', '#33ff57', '#5733ff', '#ff33a1', '#a1ff33'];
      let circles = [];

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth / 1, p.windowHeight / 2);
        canvas.parent(canvasRef.current);
        p.background(0); // Set the background color
      };

      p.draw = () => {
        p.background(0); // Clear the canvas on each frame

        // Display the circles if a sound is playing
        if (playing) {
          for (let i = 0; i < circles.length; i++) {
            const circle = circles[i];
            p.fill(circle.color);
            p.noStroke();

            // Map position and size directly to canvas dimensions
            const x = p.map(circle.x, 0, 1, 0, p.width);
            const y = p.map(circle.y, 0, 1, 0, p.height);
            const size = p.map(circle.size, 0, 3, 0, Math.min(p.width, p.height));

            p.ellipse(x, y, size, size);

            // Update circle position
            circle.x += circle.speedX;
            circle.y += circle.speedY;
            circle.size *= circleDecay;
          }

          // Remove circles that are no longer visible
          circles = circles.filter((circle) => circle.size > 0);
        }

        // Randomly generate a new circle when a sample is played
        if (soundName) {
          const color = p.random(colors);
          const size = p.random(0, 1); // Use normalized size
          const x = p.random(0, 1); // Use normalized x position
          const y = p.random(0, 1); // Use normalized y position
          const speedX = p.random(-0.02, 0.02); // Use normalized speed
          const speedY = p.random(-0.02, 0.02); // Use normalized speed

          circles.push({ x, y, size, speedX, speedY, color });
        }
      };

    };

    if (!p5Instance) {
      // Create a new p5 instance if it doesn't exist
      setP5Instance(new p5(sketch));
    }

    // Update the playing state when soundName changes
    setPlaying(!!soundName);

    return () => {
      // Cleanup p5 instance when unmounting

      if (p5Instance) {
        p5Instance.remove(); // Properly remove the p5 instance
        setP5Instance(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundName, p5Instance]);

  return <div className="visual-effect-container" ref={canvasRef}></div>;
};

export default VisualEffectP5;
