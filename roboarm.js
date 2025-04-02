function Header() {
  // ... Header component remains the same ...
  return (
    <div>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-2 py-4">
              <img
                src="./images/face.jpg"
                className="card-img-top rounded-2 shadow-sm"
                alt="Author"
              />
            </div>
            <div className="col-sm-8 col-md-6 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">
                Aleksey Nikitenko.
                <br /> Software engineer with 11 years of experience in
                automation testing and software development.
              </p>
            </div>
            <div className="col-sm-4 col-md-2 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.linkedin.com/in/aleksey-nikitenko-84837850/"
                    className="text-white"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/aleksey.nikitenko.7/"
                    className="text-white"
                  >
                    Connect on Facebook
                  </a>
                </li>
                <li>
                  <a href="mailto:donaspeed@gmail.com" className="text-white">
                    Email Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-robot me-2" // Added margin to icon
              viewBox="0 0 20 20"
            >
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
            </svg>
            <strong>My Projects</strong>
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
  )
}

function Footer() {
  // ... Footer component remains the same ...
  return (
    <div className="container">
      <p className="float-end mb-1">
        <a href="#">
          <strong>Back to top</strong>
        </a>
      </p>
    </div>
  )
}

function Main() {
  return (
    <div>
      <div className="container">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              {/* Header content goes here if any */}
            </div>
          </div>
        </section>
        {/* --- Main Grid Section --- */}
        <div className="album-custom rounded-2 py-4">
          <div className="container">
            {/* Main Row */}
            <div className="row g-4">
              {/* ==== Column 1: Tall Item ==== */}
              <div className="col-lg-4 d-flex align-items-stretch">
                {/* Card 1 (Tall) */}
                <div className="card shadow album-custom h-100">
                  <img
                    src="./images/sell_image.png"
                    className="card-img-top"
                    alt="RoboArm Kit"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      Buy RoboArm (Remote Control for Keyboard)
                    </h5>
                    <p className="card-text-custom">
                      DIY Digital kit for <span className="card-text-custom-orange"><b>29 EUR</b></span>
                      <br />
                      <br /> Includes Windows Application, STL files, and
                      detailed instructions.
                    </p>
                    <ul className="card-text-custom list-unstyled">
                      <li>
                        <b>You will need:</b>
                      </li>
                      <li>- A 3D printer to print the STL files</li>
                      <li>- An Arduino (tested on UNO and Nano)</li>
                      <li>- A bearing and 4 MG90S 180-degree servo motors</li>
                      <li>- 8 M3 screws and 8 nuts</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ==== Column 2: Grid Items ==== */}
              <div className="col-lg-8 d-flex align-items-stretch">
                {/* Nested Row for the grid */}
                <div className="row row-cols-1 row-cols-md-3 g-4 w-100">
                  {/* Card 2 (PayPal) */}
                  <div className="col d-flex align-items-stretch">
                    <div className="card shadow album-custom h-100">
                      <img
                        src="./images/matrix.gif"
                        className="card-img-top"
                        alt="Placeholder"
                      />
                      <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                        <h5 className="card-text-custom mb-3">
                          Buy the Digital Kit
                          <p>
                            for <span className="card-text-custom-orange"><b>29 EUR</b></span>
                          </p>
                          with PayPal
                        </h5>
                        <div className="form-group">
                          <form
                            action="https://www.paypal.com/cgi-bin/webscr"
                            method="post"
                            target="_top"
                          >
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input
                              type="hidden"
                              name="hosted_button_id"
                              value="BZJ8LC25YQ7AS"
                            />
                            <input
                              type="image"
                              src="https://www.paypalobjects.com/en_US/PL/i/btn/btn_buynowCC_LG.gif"
                              border="0"
                              name="submit"
                              alt="PayPal - The safer, easier way to pay online!"
                              className="paypal-button"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 (Option 2: All components) */}
                  <div className="col d-flex align-items-stretch">
                    <div className="card shadow album-custom h-100">
                      <img
                        src="./images/required_components.png"
                        className="card-img-top"
                        alt="Required Components"
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                          Option 2: All components required to make RoBoArm.
                        </h5>
                        <p className="card-text-custom flex-grow-1">
                          Includes 3D printed parts, Arduino Nano with flashed
                          firmware, PCA9685 16 servo motors board, 4 MG90S servo
                          motors, wires, bearing, and 8 M3 screws.
                        </p>
                        <p className="card-text-custom flex-grow-1">
                          <b>
                            Price:{' '}
                            <span className="card-text-custom-orange">59 EUR</span>{' '}
                            + shipping from Poland
                          </b>
                        </p>
                        <a
                          href="mailto:donaspeed@gmail.com"
                          className="btn btn-dark shadow-sm mt-auto"
                        >
                          Email Me
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 (Option 3: Fully assembled) */}
                  <div className="col d-flex align-items-stretch">
                    <div className="card shadow album-custom h-100">
                      <img
                        src="./images/rotary_encoder.gif"
                        className="card-img-top"
                        alt="Fully Assembled RoboArm"
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                          Option 3: Fully assembled and tested RoboArm.
                        </h5>
                        <p className="card-text-custom flex-grow-1">
                          Includes 3D printed parts, Arduino Nano with flashed
                          firmware, PCA9685 16 servo motors board, 4 MG90S servo
                          motors, wires, bearing, and 8 M3 screws.
                        </p>
                        <p className="card-text-custom flex-grow-1">
                          <b>
                            Price:{' '}
                            <span className="card-text-custom-orange">99 EUR</span>{' '}
                            + shipping from Poland
                          </b>
                        </p>
                        <a
                          href="mailto:donaspeed@gmail.com"
                          className="btn btn-dark shadow-sm mt-auto"
                        >
                          Email Me
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 (Windows App) */}
                  <div className="col d-flex align-items-stretch">
                    <div className="card shadow album-custom h-100">
                      <img
                        
                        src="./images/soft_ui.gif"
                        className="img-fluid rounded-2"
                        alt="Software UI"
                      />
                      <div className="card-body text-center d-flex flex-column">
                        <h5 className="card-text-custom flex-grow-1">
                          Windows 10-11 Application
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* Card 6 (Voice Control) */}
                  <div className="col d-flex align-items-stretch">
                    <div className="card shadow album-custom h-100">
                      <img
                        src="./images/voice_control.gif"
                        className="img-fluid rounded-2"
                        alt="Voice Control"
                      />
                      <div className="card-body text-center d-flex flex-column">
                        <h5 className="card-text-custom flex-grow-1">
                          Voice Control Feature
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* Card 7 (STL Files - Duplicate?) */}
                  <div className="col d-flex align-items-stretch">
                    <div className="card shadow album-custom h-100">
                      <img
                        src="./images/3d_models.gif"
                        className="img-fluid rounded-2"
                        alt="3D Models"
                      />
                      <div className="card-body text-center d-flex flex-column">
                        <h5 className="card-text-custom flex-grow-1">
                          STL Files for 3D Printing
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                {/* End Nested Row */}
              </div>{' '}
              {/* End Column 2 */}
            </div>{' '}
            {/* End Main Row */}
          </div>{' '}
          {/* End Container */}
        </div>{' '}
        {/* End Album Div */}
      </div>

      {/* --- Second Section ("What you need") --- */}
      <div className="container">
        <section className="py-3 text-center container">
          <div className="row py-lg-1">
            <div className="col-lg-6 col-md-8 mx-auto"></div>
          </div>
        </section>

        <div className="album-custom rounded-2 p-4">
          {' '}
          {/* Added padding */}
          <div className="container">
            {/* Use row-cols-md-2 for the items needed images? */}
            <div className="row row-cols-1 g-4">
              {/* Content moved inside columns for better structure */}
              <div className="col">
                <h5 className="card-text-start">
                  What You Need to Get Started with Digital Kit
                </h5>
                <p className="doc-text">
                  The idea is to create RoBoArm (remote control for keyboard) as
                  affordably as possible.
                  <p>
                    <b className="doc-text-red">
                      Unfortunately, I can’t offer a better price for components
                      like the Arduino (tested on UNO and Nano), PCA9685 16
                      servo motors board, wires, bearings, or 3D printer
                      filament.
                    </b>
                  </p>
                  Therefore, I want to give you the opportunity to find these
                  items on AliExpress, Amazon, or local markets.
                  <p>
                    <b className="doc-text-red">
                      This will significantly speed up the process of making
                      RoBoArm and reduce the overall cost.
                    </b>
                  </p>
                </p>
                <p className="doc-text-bold">
                  With the Digital Kit, you will receive link to download:
                </p>
                <p className="doc-text">
                  - Windows 10-11 application
                  <br />
                  - INO file for Arduino (you will need to upload it to your
                  Arduino)
                  <br />
                  - STL files for 3D printing
                  <br />
                  - Detailed documentation on how to assemble and use the
                  RoBoArm
                  <br />
                  - Online support and application updates
                  <br />
                  - Future STL file updates to support different types of servo
                  motors
                  <br />
                </p>
                <h5 className="card-text-start doc-text-red">
                  Please collect the following items before assembling RoBoArm:
                </h5>
              </div>

              {/* Items needed - using a nested row with 2 cols on md+ */}
              <div className="col">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col d-flex align-items-stretch">
                    <div className="card bg-dark text-white">
                      <img
                        src="./images/3dprintedparts.png"
                        className="card-img"
                        alt="3D Printed Parts"
                      />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        {' '}
                        {/* Adjusted overlay content */}
                        <h5
                          className="card-title"
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            padding: '0.25rem',
                          }}
                        >
                          {' '}
                          {/* Added background for readability */}
                          You will need to print the STL files provided in the
                          file storage.
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col d-flex align-items-stretch">
                    <div className="card bg-dark text-white">
                      <img
                        src="./images/arduino_wires.png"
                        className="card-img"
                        alt="Arduino and Wires"
                      />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5
                          className="card-title"
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            padding: '0.25rem',
                          }}
                        >
                          You will need to purchase an Arduino, a PCA9685 16
                          servo motors board, and the necessary wires.
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col d-flex align-items-stretch">
                    <div className="card bg-dark text-white">
                      <img
                        src="./images/4motors.png"
                        className="card-img"
                        alt="Servo Motors"
                      />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5
                          className="card-title"
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            padding: '0.25rem',
                          }}
                        >
                          You will also need 4 MG90S servo motors with an
                          additional wire for one motor.
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col d-flex align-items-stretch">
                    <div className="card bg-dark text-white">
                      <img
                        src="./images/bearing.png"
                        className="card-img"
                        alt="Bearing"
                      />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5
                          className="card-title"
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            padding: '0.25rem',
                          }}
                        >
                          You will need one 35x47x7-mm bearing
                          <br />
                          (d = 35 mm, D = 47 mm, B = 7 mm)
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col d-flex align-items-stretch">
                    <div className="card bg-dark text-white">
                      <img
                        src="./images/adapter.png"
                        className="card-img"
                        alt="Power Adapter"
                      />
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                        <h5
                          className="card-title"
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            padding: '0.25rem',
                          }}
                        >
                          Finally, you'll need a USB 2.0 power adapter (5V,
                          1-2A) to power the PCA9685 16 servo motors board.
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* Card 6 (Voice Control) */}
                  <div className="col d-flex align-items-stretch">
                    <div className="card shadow album-custom h-100">
                      <div className="card-body text-center d-flex flex-column">
                        <h5 className="card-title">Documentation:</h5>
                        <ul className="list-unstyled card-text-custom">
                          <li>
                            <a
                              href="data/Arduino_update.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="doc-text-bold"
                            >
                              Arduino Update Guide
                            </a>{' '}
                            - Instructions for updating your Arduino with the
                            required .ino file.
                          </li>
                          <li>
                            <a
                              href="data/How_to_start.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="doc-text-bold"
                            >
                              How to Start
                            </a>{' '}
                            - Overview of components and prerequisites before
                            assembling the RoboArm.
                          </li>
                          <li>
                            <a
                              href="data/WindowsApp&RoboArmInitialSetup.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="doc-text-bold"
                            >
                              Windows App & RoboArm Initial Setup
                            </a>{' '}
                            - Guide for setting up the Windows application and
                            initial RoboArm configuration.
                          </li>
                          <li>
                            <a
                              href="data/WindowsAppWorkflow.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="doc-text-bold"
                            >
                              Windows App Workflow
                            </a>{' '}
                            - Detailed workflow for using the Windows app to
                            control the RoboArm.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Render the components into the DOM
ReactDOM.render(<Header />, document.getElementById('headerId'))
ReactDOM.render(<Main />, document.getElementById('mainId'))
ReactDOM.render(<Footer />, document.getElementById('footerId'))
