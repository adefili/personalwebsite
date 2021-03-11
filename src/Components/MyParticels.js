import Particles from 'react-tsparticles';
import React from 'react';

class MyParticels extends React.Component {
    constructor(props) {
        super(props);
    
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
      }
    
      particlesInit(main) {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      }
    
      particlesLoaded(container) {
        console.log(container);
      }
    
      render() {
        return (
          <Particles
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            height={window.outerHeight}
            options={{
              background: {
                color: {
                  value: "#0d47a1",
                },
              },
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 200,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 400,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 0,
                },
              },
              detectRetina: true,
            }}
          />
        );
      }
    }

export default MyParticels;