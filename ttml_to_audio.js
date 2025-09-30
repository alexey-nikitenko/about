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
            <div className="row">
                <div className="col">
                    <h1>TTML to Audio Converter</h1>

                    <div className="card album-custom p-3 my-4">
                        <div className="card-body">
                            <h3 className="card-title">What is the TTML to Audio Converter?</h3>
                            <p>Imagine you have a video with subtitles, but you wish you could listen to the dialogue instead of reading it. This tool does exactly that! It takes a standard subtitle file (the kind used for movies and online videos) and turns it into a spoken audio track using a high-quality computer voice.</p>
                            <p>Think of it as instantly creating a simple audiobook or a voice-over for any video that already has subtitles. It’s perfect for making content more accessible or for situations where you’d rather listen than watch.</p>

                            <h3 className="card-title mt-4">How Does It Work (in Simple Terms)?</h3>
                            <p>The magic of this tool is how it handles timing to make the voice sound natural, not rushed or robotic.</p>
                            <ol>
                                <li><strong>It Reads the Subtitles:</strong> The tool looks at both the text in the subtitle file and, more importantly, <em>when</em> each line is supposed to appear and disappear on the screen.</li>
                                <li><strong>It Finds the Perfect Pacing:</strong> Sometimes, a lot of text appears on screen for only a few seconds. Instead of making the voice talk comically fast, the tool is clever. It looks for silent pauses <em>before</em> and <em>after</em> the subtitle appears and "borrows" a bit of that silence to start reading the line a little early or finish it a bit late. The result is a much more natural, evenly-paced narration. It only speeds up the voice as a last resort.</li>
                                <li><strong>It Learns to Pronounce Words Correctly:</strong> Computer voices can stumble on unusual names, technical terms, or certain words. The tool lets you create a simple "pronunciation dictionary." If you find a word that sounds wrong, you can add it to a list, and the tool will guide the voice to say it correctly in the future.</li>
                                <li><strong>It Builds the Final Audio File:</strong> After converting all the text, it stitches everything together—the spoken words and the silent pauses—into a single, perfectly synchronized MP3 file that you can play alongside your video or listen to on its own.</li>
                            </ol>
                            <p>In short, it’s a smart and flexible tool for anyone who wants to turn written subtitles into a polished, natural-sounding audio experience.</p>
                        </div>
                    </div>

                    <hr/>

                    <h2>Technical Details</h2>
                    <p>This project provides a powerful and flexible tool for converting TTML (Timed Text Markup Language) subtitle files into a single, synchronized audio file using text-to-speech (TTS). It is designed to be highly configurable and resilient, making it ideal for generating audio tracks for videos from their subtitles.</p>
                    <p>The application features both a command-line interface (<code>main.py</code>) for automation and a user-friendly graphical interface (<code>gui.py</code>) for easier use.</p>

                    <h2 className="mt-4">Core Features</h2>
                    <ul>
                        <li><strong>Intelligent Audio Scheduling:</strong> The application analyzes subtitle timing and intelligently reschedules audio to fit. It first attempts to borrow time from surrounding silent gaps to ensure natural pacing and only resorts to speeding up audio when absolutely necessary.</li>
                        <li><strong>Customizable Pronunciation:</strong> Using a <code>pronunciation_rules.json</code> file, you can fix common TTS pronunciation issues. The application uses a clever "vowel-doubling" trick (e.g., "sin" -- "siin") to guide the TTS engine's pronunciation for specific words.</li>
                        <li><strong>GUI and CLI Interfaces:</strong> Run the application through a simple graphical interface or use the command-line for scripting and automation.</li>
                        <li><strong>Batch Processing & Resilience:</strong> Processes TTS requests in configurable batches to avoid overwhelming the TTS service. It also automatically retries failed requests to handle transient network issues.</li>
                        <li><strong>Highly Configurable:</strong> Provides settings and command-line arguments to control every aspect of the conversion process, from voice selection to timing tolerances.</li>
                        <li><strong>Detailed Logging:</strong> Offers clear, real-time feedback on the conversion process, including pronunciation rule applications, scheduling decisions, and a final summary of statistics, making it easy to diagnose any issues.</li>
                    </ul>

                    <h2>Dependencies & Services</h2>
                    <h3>Python Libraries</h3>
                    <p>The script relies on the following Python libraries:</p>
                    <ul>
                        <li><strong><code>edge-tts</code></strong>: A powerful library that provides an unofficial API for Microsoft Edge's excellent text-to-speech service.</li>
                        <li><strong><code>pydub</code></strong>: Used for all audio manipulation tasks, including creating silent segments and exporting the final MP3 file.</li>
                    </ul>
                    <h3>External Services</h3>
                    <ul>
                        <li><strong>Microsoft Edge TTS Service:</strong> This project uses the free, high-quality text-to-speech voices provided by Microsoft Edge. An active internet connection is required during the audio generation phase.</li>
                        <li><strong><code>ffmpeg</code></strong>: <code>pydub</code> requires the <code>ffmpeg</code> library for exporting audio files. You must have it installed and available in your system's PATH.</li>
                    </ul>

                    <h2>Installation</h2>
                    <ol>
                        <li>Clone this repository to your local machine.</li>
                        <li>Install the required Python packages using <code>pip</code>:
                            <pre><code>{`pip install -r requirements.txt`}</code></pre>
                        </li>
                        <li>Ensure <code>ffmpeg</code> is installed on your system.</li>
                    </ol>

                    <h2>Usage</h2>
                    <h3>Graphical User Interface (GUI)</h3>
                    <p>For most users, the GUI is the easiest way to use the application. To launch it, run:</p>
                    <pre><code>{`python gui.py`}</code></pre>
                    <p>The GUI provides access to all the configuration options, a progress bar, and a detailed log window.</p>

                    <h3>Command-Line Interface (CLI)</h3>
                    <p>The CLI is ideal for automation and scripting.</p>
                    <pre><code>{`usage: main.py [-h] [--voice VOICE] [--min-duration MIN_DURATION] [--max-speed MAX_SPEED] [--crossfade CROSSFADE]
               [--gap-threshold GAP_THRESHOLD] [--borrow-time BORROW_TIME] [--batch-size BATCH_SIZE]
               input_file [output_file]`}</code></pre>
                    <h4>Example Command</h4>
                    <pre><code>{`python main.py "C:\\\\path\\\\to\\\\my_subtitles.xml" --voice "en-US-AriaNeural" --borrow-time 1500`}</code></pre>

                    <h2>Custom Pronunciation Rules</h2>
                    <p>To fix common TTS mispronunciations, you can add words to the <code>pronunciation_rules.json</code> file. The application uses a "vowel-doubling" trick to guide the TTS engine.</p>
                    <p>The file is structured by language code. For any word in the list, the application will find its first vowel and double it, which often corrects the pronunciation.</p>
                    <p>For example, to fix the pronunciation of "sin" and "ha" in Korean, the <code>ko</code> section would look like this:</p>
                    <pre><code>{`{
  "ko": [
    "sin",
    "ha"
  ]
}`}</code></pre>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Header />, document.getElementById("headerId"));
ReactDOM.render(<Main />, document.getElementById("mainId"));
ReactDOM.render(<Footer />, document.getElementById("footerId"));