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
            <h1>How to Use Subtitle to Audio Converter</h1>
            <p>This guide provides a comprehensive overview of the Subtitle to Audio Converter, explaining its core concepts, features, and how to use it effectively.</p>

            <h2>Table of Contents</h2>
            <ol>
                <li><a href="#the-core-idea-intelligent-audio-scheduling">The Core Idea: Intelligent Audio Scheduling</a></li>
                <li><a href="#how-it-works-the-four-phases">How It Works: The Four Phases</a></li>
                <li><a href="#use-cases-who-is-this-for">Use Cases: Who Is This For?</a></li>
                <li>
                    <a href="#configuration-in-depth">Configuration In-Depth</a>
                    <ul>
                        <li><a href="#file-settings">File Settings</a></li>
                        <li><a href="#voice-settings">Voice Settings</a></li>
                        <li><a href="#advanced-timing-settings">Advanced Timing Settings</a></li>
                    </ul>
                </li>
                <li><a href="#mastering-pronunciation-rules">Mastering Pronunciation Rules</a></li>
                <li><a href="#troubleshooting--faq">Troubleshooting & FAQ</a></li>
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
            <p>The conversion process happens in a few distinct phases, which you will see reflected in the application's log output:</p>
            <ol>
                <li><strong>Phase 1: Parsing & Initial Audio Generation</strong>
                    <ul>
                        <li>The application reads your <code>.srt</code> or <code>.ttml</code> file and extracts the text and timing for each subtitle.</li>
                        <li>It then generates an audio clip for every subtitle at a natural, 1.0x speed. This is done to measure the "natural duration" of each spoken line.</li>
                    </ul>
                </li>
                <li><strong>Phase 2: Timing Calculation & Rescheduling</strong>
                    <ul>
                        <li>This is where the intelligent scheduling happens. Subtitles are grouped, and the application calculates whether it needs to borrow time or speed up each group.</li>
                        <li>If any audio needs to be faster than 1.0, it is re-generated at the new, calculated speed. This ensures high audio quality without digital artifacts from post-processing.</li>
                    </ul>
                </li>
                <li><strong>Phase 3: Rendering the Final Audio</strong>
                    <ul>
                        <li>The application creates a silent audio track matching the total duration of your subtitle file.</li>
                        <li>It then carefully places each generated audio segment (whether at normal or sped-up speed) into its final, rescheduled position on the track.</li>
                    </ul>
                </li>
                <li><strong>Phase 4: Exporting</strong>
                    <ul>
                        <li>The final, complete audio track is encoded into a high-quality MP3 file and saved to your specified output path.</li>
                    </ul>
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

            <h2 id="configuration-in-depth">Configuration In-Depth</h2>
            <p>You can control the conversion process through the GUI or CLI. Here is a detailed breakdown of each setting.</p>

            <h3 id="file-settings">File Settings</h3>
            <ul>
                <li><strong>Input File:</strong> The source subtitle file. Both <code>.srt</code> and <code>.ttml</code>/<code>.xml</code> formats are supported.</li>
                <li><strong>Output File:</strong> The destination path for the final MP3 audio file.</li>
            </ul>

            <h3 id="voice-settings">Voice Settings</h3>
            <ul>
                <li><strong>Voice:</strong> The Microsoft Edge TTS voice used for generation. Voices are organized by language and locale code (e.g., <code>en-US-AriaNeural</code>, <code>pl-PL-MarekNeural</code>). The GUI will automatically load all available voices.</li>
            </ul>

            <h3 id="advanced-timing-settings">Advanced Timing Settings</h3>
            <p>These settings give you fine-grained control over the intelligent scheduling algorithm.</p>
            <ul>
                <li><strong>Max Speed (e.g., <code>1.5</code>)</strong>
                    <ul>
                        <li><strong>What it is:</strong> The absolute maximum speed-up factor the application is allowed to use. <code>1.5</code> means the audio can be played up to 50% faster than its natural speed.</li>
                        <li><strong>Why change it:</strong> If you find the sped-up dialogue too fast and unnatural, lower this value (e.g., to <code>1.3</code>). If you need to fit very long text into very short times, you might increase it, but be aware that higher values can sound robotic.</li>
                    </ul>
                </li>
                <li><strong>Min Duration (ms) (e.g., <code>500</code>)</strong>
                    <ul>
                        <li><strong>What it is:</strong> The minimum duration a subtitle must have to be spoken. Any subtitle shorter than this will be treated as silence.</li>
                        <li><strong>Why change it:</strong> This is useful for ignoring very short, non-dialogue subtitles, such as those marking scene changes (<code>"-"</code>) or containing only a single word. Increase it to skip more subtitles, or decrease it to include very short ones.</li>
                    </ul>
                </li>
                <li><strong>Gap Threshold (ms) (e.g., <code>1000</code>)</strong>
                    <ul>
                        <li><strong>What it is:</strong> The minimum silence (in milliseconds) required between two subtitles to consider them part of separate dialogue groups.</li>
                        <li><strong>Why change it:</strong> If you feel that separate conversations are being incorrectly grouped and sped up together, <em>increase</em> this value. If rapid-fire dialogue between two characters is being split into too many small groups, <em>decrease</em> this value.</li>
                    </ul>
                </li>
                <li><strong>Borrow Time (ms) (e.g., <code>1000</code>)</strong>
                    <ul>
                        <li><strong>What it is:</strong> The maximum amount of time the application is allowed to "steal" from a silent gap on either side of a dialogue group.</li>
                        <li><strong>Why change it:</strong> Increasing this value gives the scheduler more flexibility to avoid speeding up audio by allowing it to shift dialogue earlier or later. If you find the timing of spoken lines feels "off" relative to the on-screen action, you might want to lower this value to keep the audio more rigidly aligned with its original timing.</li>
                    </ul>
                </li>
            </ul>

            <hr />

            <h2 id="mastering-pronunciation-rules">Mastering Pronunciation Rules</h2>
            <p>The <code>pronunciation_rules.json</code> file is a powerful feature for fixing common TTS mispronunciations. The application uses a clever "vowel-doubling" trick to guide the TTS engine.</p>

            <h3>How It Works</h3>
            <p>When a word from the rules list is found in the subtitle text, the application finds the first vowel in that word and duplicates it.</p>
            <p><strong>Example:</strong></p>
            <ul>
                <li>The word "read" can be pronounced "reed" or "red".</li>
                <li>If the TTS is getting it wrong, you can add <code>"read"</code> to the rules file.</li>
                <li>The application will change it to <code>"reead"</code> before sending it to the TTS engine. This subtle change is usually enough to force the correct pronunciation without being audible.</li>
            </ul>

            <h3>How to Use the File</h3>
            <p>The <code>pronunciation_rules.json</code> is organized by language code.</p>
            <pre><code>{`{
  "global": [
    "example"
  ],
  "en": [
    "read",
    "live"
  ],
  "ko": [
    "sin",
    "ha"
  ]
}`}</code></pre>
            <ul>
                <li><strong><code>global</code></strong>: A list of words to apply the rule to, regardless of the selected voice's language.</li>
                <li><strong><code>en</code></strong>, <strong><code>ko</code></strong>, etc.: Language-specific lists. The application checks the selected voice (e.g., <code>en-US-AriaNeural</code>) to determine the language code (<code>en</code>).</li>
            </ul>

            <hr />

            <h2 id="troubleshooting--faq">Troubleshooting & FAQ</h2>
            <ul>
                <li><strong>Q: The application is frozen and not responding!</strong>
                    <ul>
                        <li><strong>A:</strong> The initial voice loading or the audio generation process can take time. If using the GUI, check the log window for activity. The application is likely working hard in the background. The GUI runs the core work in a separate thread to prevent true freezing.</li>
                    </ul>
                </li>
                <li><strong>Q: I'm getting a "Failed to generate audio" error in the log.</strong>
                    <ul>
                        <li><strong>A:</strong> This usually indicates a problem connecting to the Microsoft TTS service. Check your internet connection. The application has a built-in retry mechanism, so occasional failures are normal, but persistent failures point to a network issue.</li>
                    </ul>
                </li>
                <li><strong>Q: The audio sounds too fast and robotic.</strong>
                    <ul>
                        <li><strong>A:</strong> Your subtitles likely have a lot of text in short durations. Try one of these solutions:
                            <ol>
                                <li><strong>Increase <code>Borrow Time</code>:</strong> This gives the scheduler more room to shift audio instead of speeding it up.</li>
                                <li><strong>Lower <code>Max Speed</code>:</strong> This forces the application to cap how fast the audio can get, though it may result in audio being cut off if the text is too long.</li>
                                <li><strong>Edit the subtitles:</strong> The best solution is often to edit the source subtitle file to allow more time for the dialogue.</li>
                            </ol>
                        </li>
                    </ul>
                </li>
                <li><strong>Q: A specific word is always pronounced wrong.</strong>
                    <ul>
                        <li><strong>A:</strong> This is the perfect use case for <code>pronunciation_rules.json</code>! Add the mispronounced word to the list for the correct language and re-run the generation.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

ReactDOM.render(<Header />, document.getElementById("headerId"));
ReactDOM.render(<Main />, document.getElementById("mainId"));
ReactDOM.render(<Footer />, document.getElementById("footerId"));