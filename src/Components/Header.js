import React from "react";
import "./header.scss";
import Particles from "react-particles-js";

export default function Header() {
  return (
    <div class="m-intro ">
      <div class="e-text row">
        <h1>Joshua Thompson</h1>
        <p class="preamble row">
          Hello World. I love to create, design, and solve problems. Every day I
          push myself to learn and progress.
        </p>
        <div class="flex-center row">
          <i
            class="fa fa-github fa-4x icon-3d col-md-1 col-lg-2"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://github.com/Laika-Beats";
            }}
          ></i>
          <i
            class="fa fa-linkedin fa-4x icon-3d col-md-1 col-lg-2"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.linkedin.com/in/joshua-thompson-12a8811b5/";
            }}
          ></i>
          <i
            class="fa fa-twitter fa-4x icon-3d col-sm-1 col-lg-2"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://twitter.com/laikabeats";
            }}
          ></i>
          <i
            class="fa fa-instagram fa-4x icon-3d col-sm-1 col-lg-2"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.instagram.com/laika_beats/";
            }}
          ></i>
          <br></br>
          <i
            class="fa fa-facebook fa-4x icon-3d col-sm-1 col-lg-2"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.facebook.com/LaikaBeatz/";
            }}
          ></i>
          <i
            class="fa fa-spotify fa-4x icon-3d col-sm-1 col-lg-2"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://open.spotify.com/artist/4R6u30PMOLbNNTuR0Jl7x8";
            }}
          ></i>
        </div>
      </div>
      <div id="particleCanvas-Orange" class="e-particles-orange">
        <Particles
          params={{
            particles: {
              number: {
                value: 120,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ec543f",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 3,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 20,
                random: true,
                anim: {
                  enable: false,
                  speed: 10,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 394.57382081613633,
                  rotateY: 157.82952832645452,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 0.2,
                  },
                },
                bubble: {
                  distance: 1500,
                  size: 40,
                  duration: 7.272727272727273,
                  opacity: 0.3676323676323676,
                  speed: 3,
                },
                repulse: {
                  distance: 50,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      <div id="particleCanvas-Blue" class="e-particles-blue">
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 3,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 0.2,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 15,
                random: true,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 3945.7382081613637,
                  rotateY: 157.82952832645452,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "grab",
                },
                onclick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 0.2,
                  },
                },
                bubble: {
                  distance: 1500,
                  size: 40,
                  duration: 7.272727272727273,
                  opacity: 0.3676323676323676,
                  speed: 3,
                },
                repulse: {
                  distance: 50,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
    </div>
  );
}
