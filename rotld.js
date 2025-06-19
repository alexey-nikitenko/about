// rotld.js

// Re-usable Header and Footer components
function Header() {
  return (
    <div>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-2 py-4">
              <img src="./images/face.jpg" className="card-img-top rounded-2 shadow-sm" alt="Author" />
            </div>
            <div className="col-sm-8 col-md-6 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">Aleksey Nikitenko.<br />Software engineer with 11 years of experience in automation testing and software development.</p>
            </div>
            <div className="col-sm-4 col-md-2 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="https://www.linkedin.com/in/aleksey-nikitenko-84837850/" className="text-white">LinkedIn Profile</a></li>
                <li><a href="https://www.facebook.com/aleksey.nikitenko.7/" className="text-white">Connect on Facebook</a></li>
                <li><a href="mailto:donaspeed@gmail.com" className="text-white">Email Me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="index.html" className="navbar-brand d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-robot me-2" viewBox="0 0 20 20"><path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" /><path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" /></svg>
            <strong>My Projects</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="container">
      <p className="float-end mb-1"><a href="#"><strong>Back to top</strong></a></p>
    </div>
  );
}


function Main() {
  return (
    <div>
      <div className="container">
        {/* --- Hero Section --- */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h1 className="card-text-custom-orange fw-light">Relics Of The Lost Dawn</h1>
              <p className="lead text-white">An indie MMORPG with a deep crafting economy, being forged in the open by a solo developer. Witness the evolution of a world in real time.</p>
            </div>
          </div>
        </section>

        {/* --- Video Trailer --- */}
        <div className="album-custom rounded-2 py-4 mb-4">
          <div className="container text-center">
            <h3 className="card-text-custom mb-4">Gameplay & Core Features</h3>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="ratio ratio-16x9 shadow-lg">
                  {/* === CORRECTED IFRAME SRC === */}
                  <iframe 
                    src="https://www.youtube.com/embed/l_kpORGeoE4" 
                    title="Relics Of The Lost Dawn - Gameplay Demo"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- The Pitch for Sponsors --- */}
        <div className="album-custom rounded-2 p-4 mb-4">
          <div className="container">
            <h3 className="card-text-custom-orange text-center mb-4">The Vision & Opportunity</h3>
            <p className="doc-text">
              Relics Of The Lost Dawn is an ambitious project to create an MMORPG that recaptures the spirit of classic online worlds, focusing on player interaction, a meaningful economy, and challenging content. Unlike many modern titles, the core of the game is its technically-proven, custom-built multiplayer framework. We already have a functioning client that supports networking, resource gathering, crafting, quests, and inventory management.
            </p>
            <p className="doc-text">
              <b className="doc-text-red">We are seeking partners and sponsors</b> to help us accelerate development, particularly in the areas of art, animation, and community management. This is an opportunity to get involved at the ground floor of a project with a solid technical foundation and a unique, transparent "open development" model that builds community from day one.
            </p>
          </div>
        </div>

        {/* --- Key Features Grid --- */}
        <div className="album-custom rounded-2 p-4 mb-4">
          <h3 className="card-text-custom text-center mb-4">Project Highlights</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col"><div className="card shadow-sm h-100 album-custom"><div className="card-body"><h5 className="card-title card-text-custom-orange">Open World Foundations</h5><p className="card-text card-text-custom">A 1km² seamless starting zone is built and networked, providing a scalable foundation for future world expansion.</p></div></div></div>
            <div className="col"><div className="card shadow-sm h-100 album-custom"><div className="card-body"><h5 className="card-title card-text-custom-orange">Deep Crafting & Economy</h5><p className="card-text card-text-custom">Core loops for gathering, crafting, and skill progression are implemented. The goal is a player-driven economy.</p></div></div></div>
            <div className="col"><div className="card shadow-sm h-100 album-custom"><div className="card-body"><h5 className="card-title card-text-custom-orange">Live, Transparent Development</h5><p className="card-text card-text-custom">Players and sponsors can witness the game's evolution in real time. No false promises, just tangible progress.</p></div></div></div>
            <div className="col"><div className="card shadow-sm h-100 album-custom"><div className="card-body"><h5 className="card-title card-text-custom-orange">Technically Proven</h5><p className="card-text card-text-custom">The project runs on a custom client, with a web-based login system and functioning multiplayer for Windows & Linux.</p></div></div></div>
            <div className="col"><div className="card shadow-sm h-100 album-custom"><div className="card-body"><h5 className="card-title card-text-custom-orange">Challenging PvE</h5><p className="card-text card-text-custom">The framework for world bosses and challenging encounters is in place, ready for combat system expansion.</p></div></div></div>
            <div className="col"><div className="card shadow-sm h-100 album-custom"><div className="card-body"><h5 className="card-title card-text-custom-orange">Playable Now</h5><p className="card-text card-text-custom">A playable web-based demo and downloadable client are available, demonstrating core functionality today.</p></div></div></div>
          </div>
        </div>

        {/* --- Roadmap Section --- */}
        <div className="album-custom rounded-2 p-4 mb-4">
            <h3 className="card-text-custom text-center mb-4">Development Roadmap</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent text-white"><b className="card-text-custom-orange">Phase 1: Foundation (Complete)</b> - Core engine, networking, login, inventory, crafting, and world traversal systems.</li>
                <li className="list-group-item bg-transparent text-white"><b className="doc-text-red">Phase 2: Core Gameplay (In Progress)</b> - Implementing combat, expanding the quest system, adding more creatures, and building the first major dungeon.</li>
                <li className="list-group-item bg-transparent text-white"><b>Phase 3: Community & Content</b> - Seeking funding for art assets, sound design, and expanding the world. Growing the player community through open development.</li>
                <li className="list-group-item bg-transparent text-white"><b>Phase 4: Alpha & Polish</b> - Full alpha release, extensive testing, and polishing all game systems for a wider audience.</li>
            </ul>
        </div>


        <div className="album-custom rounded-2 p-4 mb-4 text-center">
            <h3 className="card-text-custom mb-4">Get Involved</h3>
            <p className="text-white">Join our community, try the demo, or contact us for partnership opportunities.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4">
                <a href="https://github.com/alexey-nikitenko/RelicsOfTheLostDown3DMMORPGVersion/releases" className="btn btn-info btn-lg me-md-2" target="_blank">Download Client (Win/Linux)</a>
                <a href="https://relicsofthelostdawn.hopto.org/index.html" className="btn btn-warning btn-lg me-md-2" target="_blank">Play the Web Demo</a>
                <a href="https://discord.gg/donaspeed" className="btn btn-primary btn-lg" target="_blank">Join the Discord</a>
                <a href="devlog.html" className="btn btn-secondary btn-lg" target="_blank">Read Devlog</a>
            </div>
            
            {/* === NEW: Direct Support Section === */}
            <hr style={{color: "rgba(255,255,255,0.3)"}} />
            <h5 className="card-text-custom mt-4">Support the Development Directly</h5>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                <a href="https://patreon.com/AspeedGames" className="btn btn-danger btn-lg me-md-2" target="_blank">Support on Patreon</a>
                <a href="https://ko-fi.com/AspeedGames" className="btn btn-primary btn-lg" target="_blank">Buy Me a Ko-fi</a>
            </div>
            
            <hr className="mt-4" style={{color: "rgba(255,255,255,0.3)"}} />
            <h5 className="card-text-custom mt-4">For Business Inquiries</h5>
             <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-3">
                 <a href="mailto:donaspeed@gmail.com" className="btn btn-success btn-lg">Contact for Sponsorship</a>
            </div>
        </div>

      </div>
    </div>
  );
}

// Render the components into the DOM
ReactDOM.render(<Header />, document.getElementById('headerId'));
ReactDOM.render(<Main />, document.getElementById('mainId'));
ReactDOM.render(<Footer />, document.getElementById('footerId'));