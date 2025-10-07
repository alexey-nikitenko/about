import React from 'react';

export default function Main() {
  const projects = [
    {
      id: 1,
      image: "./images/game_promo.png",
      title: "Relics Of The Lost Dawn (MMORPG)",
      description: "Indie MMORPG project with deep crafting and live, open development. Currently seeking partners.",
      link: "rotld.html",
      buttonText: "View Project Details",
      buttonClass: "btn-warning"
    },
    {
      id: 2,
      image: "./images/voice_control.gif",
      title: "Buy RoboArm (remote control for keyboard)",
      description: "DIY Digital Kit from 29 euro\nWindows, Linux, MacOS\nPython Application and STL files included",
      link: "roboarm.html",
      buttonText: "More details",
      buttonClass: "btn-dark"
    },
    {
      id: 3,
      image: "./images/cv.png",
      title: "My CV",
      description: "More work details about me.",
      link: "cv.html",
      buttonText: "Look at CV",
      buttonClass: "btn-dark"
    },
    {
      id: 4,
      image: "./images/youtube.png",
      title: "My Youtube Channel",
      description: "Check out my video content",
      link: "https://www.youtube.com/channel/UCT1rya_vcEHMqOOlVIp-TnA",
      buttonText: "Watch videos",
      buttonClass: "btn-dark"
    },
    {
      id: 5,
      image: "./images/ttl_to_audio.png",
      title: "TTML to Audio Converter",
      description: "A flexible tool for converting TTML subtitle files into a single, synchronized audio file using text-to-speech (TTS).",
      link: "ttml_to_audio.html",
      buttonText: "View Project Details",
      buttonClass: "btn-primary"
    }
  ];

  return (
    <div className="container">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto"></div>
        </div>
      </section>

      <div className="album-custom rounded-2">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {projects.map(project => (
              <div key={project.id} className="col-lg-4 d-flex align-items-stretch">
                <div className="card shadow album-custom">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.link} className={`btn ${project.buttonClass} shadow-sm`}>
                      {project.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}