// devlog.js

// --- DATA FOR YOUR DEVLOG POSTS ---
// To add a new update, just copy a post object and add it to the TOP of this array.
const devlogPosts = [
  {
    id: 2,
    date: "June 29, 2024",
    title: "Devlog #2: Combat Basics & The First Dungeon",
    imageUrl: "./images/devlog_combat.png", // <-- Create this image
    content: [
      "Will be updated..."
    ]
  },
  {
    id: 1,
    date: "June 15, 2024",
    title: "Devlog #1: The Sunstone Meadow & Open Development",
    imageUrl: "./images/background_rotld.jpg", // <-- Re-use an existing image
    content: [
      "Welcome to the first official devlog for Relics Of The Lost Dawn! The core mission of this project is to build an MMORPG in the open, with the community involved every step of the way.",
      "The initial starting zone, 'The Sunstone Meadow,' is now in place. The central landmark is a massive, shattered relic that gives the area its unique feel and serves as the focal point for early quests.",
      "The custom multiplayer client is live and supports all the foundational features you see here. Thank you for joining the journey!"
    ]
  }
];
// --- END OF DATA ---


function Header() { /* ... Header component remains the same ... */ 
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

function Footer() { /* ... Footer component remains the same ... */
  return (
    <div className="container">
      <p className="float-end mb-1"><a href="#"><strong>Back to top</strong></a></p>
    </div>
  );
}

// A new component to render a single devlog post
function DevlogPost({ post }) {
  return (
    <div className="album-custom rounded-2 p-4 mb-4">
      <div className="row g-4">
        <div className="col-md-5">
          <img src={post.imageUrl} className="img-fluid rounded-3 shadow-sm" alt={post.title} />
        </div>
        <div className="col-md-7">
          <h3 className="card-text-custom-orange">{post.title}</h3>
          <p className="text-muted">{post.date}</p>
          {post.content.map((paragraph, index) => (
            <p key={index} className="doc-text" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div>
      <div className="container">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h1 className="card-text-custom-orange fw-light heading-with-icon">Project Devlog</h1>
              <p className="lead text-white">Follow the real-time evolution of Relics Of The Lost Dawn. New updates are posted at the top.</p>
            </div>
          </div>
        </section>

        {/* This will automatically render all posts from the array */}
        {devlogPosts.map(post => <DevlogPost key={post.id} post={post} />)}
        
      </div>
    </div>
  );
}

// Render the components into the DOM
ReactDOM.render(<Header />, document.getElementById('headerId'));
ReactDOM.render(<Main />, document.getElementById('mainId'));
ReactDOM.render(<Footer />, document.getElementById('footerId'));