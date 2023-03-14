import React from "react"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function ParticleBack() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="part">
      <Particles className="part1 "
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
         options={
{
  fullScreen: {
                  enable: false,
                  zIndex: -1
    },
  particles: {
    number: {
      value: 209,
      density: {
        enable: true,
        value_area: 1523.2414578222467
      }
    },
    
    color: {
      value: "#e8e80b"
    },
    shape: {
      type: "edge",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "imgages/sal-Dapp.png",
        width: 200,
        height: 150
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 160.3412060865523,
      color: "#04e1e1",
      opacity: 0.6173136434332263,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 158.35505639876231,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 56.84540486109416,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}}
      />
    </div>
  );
}









