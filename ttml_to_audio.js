function Header() {
  return (
    <div>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-2 py-4">
              <img
                src="./images/face.jpg"
                className="card-img-top rounded-2 shadow-sm"
                alt="Profile"
              />
            </div>
            <div className="col-sm-8 col-md-6 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">
                Aleksey Nikitenko
                <br /> Software Engineer
                <br /> 11 years of experience in automation testing and software development
              </p>
            </div>
            <div className="col-sm-4 col-md-2 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.linkedin.com/in/aleksey-nikitenko-84837850/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/aleksey.nikitenko.7/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="mailto:donaspeed@gmail.com" className="text-white">
                    Email Me
                  </a>
                </li>
                 <li>
                  <a href="index.html" className="text-white">
                    Back to main page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="index.html" className="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-robot"
              viewBox="0 0 20 20"
            >
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
            </svg>
            <strong> My Projects</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="container">
      <p className="float-end mb-1">
        <a href="#">
          <strong>Back to top</strong>
        </a>
      </p>
    </div>
  );
}

function Main() {
    return (
        <div className="container text-white">

            <div className="card album-custom p-4 my-5 bg-light text-dark shadow-lg rounded-3">
                <div className="card-body d-flex">
                    <img src="./images/tts_audio_logo.png" alt="Logo" style={{ width: '200px', marginRight: '10px', objectFit: 'contain' }} />
                    <div className="text-center">
                        <h2 className="card-title display-5 fw-bold">Unlock the Full Power of Subtitle to Audio</h2>
                        <p className="lead fs-4">Get the complete, portable desktop application with advanced features, offline capabilities, and full control over your voice generation.</p>
                        <p className="lead fs-3">7-day money back guarantee.</p>
                        <a href="https://donaspeed.gumroad.com/l/subtitle-to-audio?wanted=true" className="btn btn-primary btn-lg mt-3" target="_blank" rel="noopener noreferrer">
                            Purchase Now on Gumroad
                        </a>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: 'rgba(40, 40, 40, 0.8)', borderRadius: '15px', padding: '20px' }}>
                <h1>Subtitle to Audio Converter: Features Overview</h1>
                <p>This guide provides a comprehensive overview of the Subtitle to Audio Converter, explaining its core concepts, features, and how to use it effectively.</p>

                <h2>Table of Contents</h2>
                <ol>
                    <li><a href="#the-core-idea-intelligent-audio-scheduling" className="toc-link">The Core Idea: Intelligent Audio Scheduling</a></li>
                    <li><a href="#how-it-works-the-four-phases" className="toc-link">How It Works: The Four Phases</a></li>
                    <li><a href="#use-cases-who-is-this-for" className="toc-link">Use Cases: Who Is This For?</a></li>
                    <li><a href="#configuration-in-depth" className="toc-link">Advanced Configuration</a></li>
                    <li><a href="#mastering-pronunciation-rules" className="toc-link">Mastering Pronunciation</a></li>
                    <li><a href="#troubleshooting--faq" className="toc-link">Troubleshooting & FAQ</a></li>
                </ol>

                <hr />

                <h2 id="the-core-idea-intelligent-audio-scheduling">The Core Idea: Intelligent Audio Scheduling</h2>
                <p>The primary challenge in converting subtitles to audio is that the time allotted for a subtitle on screen is often not the same as the time it takes to speak the text naturally. A short phrase might stay on screen for several seconds, while a long, dense sentence might appear for only a moment.</p>
                <p>This application solves this problem with <strong>intelligent audio scheduling</strong>.</p>
                <p>Instead of naively forcing the audio to fit the subtitle's original duration (which would lead to unnaturally fast or slow speech), the application:</p>
                <ol>
                    <li><strong>Groups related subtitles:</strong> It first identifies "dialogue groups"—subtitles that appear close together in time, separated by longer silences.</li>
                    <li><strong>Borrows time from silence:</strong> If a group of spoken lines needs more time than available, the application "borrows" time from the silent gaps before and after the dialogue group, shifting the audio slightly without altering its speed.</li>
                    <li><strong>Speeds up audio as a last resort:</strong> Only when there isn't enough silent time to borrow does the application uniformly speed up the entire dialogue group. This ensures the pacing remains consistent and natural within a single conversation.</li>
                </ol>
                <p>This approach results in a much more professional and pleasant listening experience compared to simple, one-to-one subtitle-to-speech conversion.</p>

                <hr />

                <h2 id="how-it-works-the-four-phases">How It Works: The Four Phases</h2>
                <p>The conversion process happens in a few distinct, automated phases:</p>
                <ol>
                    <li>
                        <strong>Phase 1: Parsing & Initial Audio Generation</strong>
                        <p className="ps-3">The application reads your <code>.srt</code> or <code>.ttml</code> file, extracting text and timings. It then generates audio at a natural speed to measure its "natural duration."</p>
                    </li>
                    <li>
                        <strong>Phase 2: Timing Calculation & Rescheduling</strong>
                        <p className="ps-3">This is where the intelligent scheduling happens. The application groups subtitles and calculates if it needs to borrow time from silent gaps or slightly speed up the audio for a perfect fit.</p>
                    </li>
                    <li>
                        <strong>Phase 3: Rendering the Final Audio</strong>
                        <p className="ps-3">A silent audio track is created to match your video's total duration. The rescheduled audio segments are then carefully placed onto this track.</p>
                    </li>
                    <li>
                        <strong>Phase 4: Exporting</strong>
                        <p className="ps-3">The final, complete audio track is encoded into a high-quality MP3 file, ready for use.</p>
                    </li>
                </ol>

                <hr />

                <h2 id="use-cases-who-is-this-for">Use Cases: Who Is This For?</h2>
                <p>This tool is useful for a wide range of applications:</p>
                <ul>
                    <li><strong>Accessibility:</strong> Create audio descriptions or dubbed tracks for visually impaired individuals.</li>
                    <li><strong>Language Learning:</strong> Listen to the pronunciation of dialogue in a foreign language film or show. Use the generated audio to practice listening and speaking skills.</li>
                    <li><strong>Content Creation:</strong> Generate voiceovers for documentaries, tutorials, or YouTube videos directly from a script written in a subtitle format.</li>
                    <li><strong>Proofing & Editing:</strong> Listen to your subtitles to catch errors, awkward phrasing, or timing issues that are less obvious when reading.</li>
                </ul>

                <hr />

                <h2 id="configuration-in-depth">Advanced Configuration</h2>
                <p>The application gives you fine-grained control over the intelligent scheduling algorithm through a simple interface. Here’s a breakdown of the powerful settings you can tweak to get the perfect result:</p>

                <h3>Advanced Timing Settings</h3>
                <ul>
                    <li>
                        <strong>Max Speed:</strong>
                        <p className="ps-3">Control the absolute maximum speed-up factor the application is allowed to use. If you find the dialogue too fast, lower this value for a more natural pace. If you need to fit long text into short times, you can increase it.</p>
                    </li>
                    <li>
                        <strong>Min Duration:</strong>
                        <p className="ps-3">Set the minimum duration a subtitle must have to be spoken. This is perfect for automatically ignoring short, non-dialogue subtitles, like those marking scene changes ("-") or single words.</p>
                    </li>
                    <li>
                        <strong>Gap Threshold:</strong>
                        <p className="ps-3">Define the minimum silence required between two subtitles to consider them part of separate conversations. Increase this if you feel separate dialogues are being incorrectly grouped, or decrease it to group rapid-fire dialogue together.</p>
                    </li>
                    <li>
                        <strong>Borrow Time:</strong>
                        <p className="ps-3">Adjust the maximum amount of time the application can "steal" from silent gaps. Increasing this gives the scheduler more flexibility to avoid speeding up audio, resulting in more natural speech that is shifted slightly in time.</p>
                    </li>
                </ul>

                <hr />

                <h2 id="mastering-pronunciation-rules">Mastering Pronunciation</h2>
                <p>The application includes a powerful and unique feature to fix common text-to-speech mispronunciations. Using a simple set of rules, you can teach the TTS engine how to say specific words correctly.</p>

                <h3>How It Works</h3>
                <p>When a word you've added to the rules list is found, the application intelligently modifies it with a "vowel-doubling" trick before sending it to the TTS engine. For example, if the TTS mispronounces "read" (as in "red"), the tool can change it to "reead," guiding the engine to the correct "reed" sound without any audible artifact.</p>
                <p>This allows you to create a personalized dictionary for names, technical terms, or any word the TTS struggles with, ensuring a flawless final audio track.</p>

                <hr />

                <h2 id="troubleshooting--faq">Troubleshooting & FAQ</h2>
                <ul>
                    <li>
                        <strong>Q: The application seems frozen or unresponsive.</strong>
                        <p className="ps-3"><strong>A:</strong> Audio generation can be a resource-intensive process. The application is likely working hard in the background. The user-friendly GUI includes a detailed log window so you can always see the progress in real-time.</p>
                    </li>
                    <li>
                        <strong>Q: The generated audio sounds too fast and robotic.</strong>
                        <p className="ps-3"><strong>A:</strong> This usually means your subtitles have a lot of text in very short durations. The best solution is to adjust the advanced timing settings! Try increasing the "Borrow Time" to give the scheduler more room, or lower the "Max Speed" to cap the playback rate.</p>
                    </li>
                    <li>
                        <strong>Q: A specific word is always pronounced wrong.</strong>
                        <p className="ps-3"><strong>A:</strong> This is the perfect use case for the "Mastering Pronunciation" feature! Simply add the mispronounced word to the built-in rules list to teach the application the correct way to say it.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

ReactDOM.render(<Header />, document.getElementById("headerId"));
ReactDOM.render(<Main />, document.getElementById("mainId"));
ReactDOM.render(<Footer />, document.getElementById("footerId"));