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
            height={window.outerHeight * 1.2}
            options={{
              background: {
                color: {
                  value: "#0d47a1",
                },
              },
              fpsLimit: 30,
              interactivity: {
                detectsOn: "window",
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "grab",
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
                    quantity: 1,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                  grab: {
                    distance: 200,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 200,
                  enable: true,
                  opacity: 1,
                  width: 1,
                },
                collisions: {
                  enable: false,
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
                  value: 50,
                },
                opacity: {
                  value: 1,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: false,
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