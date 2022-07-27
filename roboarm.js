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
                alt="..."
              />
            </div>
            <div className="col-sm-8 col-md-6 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">
                Aleksey Nikitenko.
                <br /> Software engineer. <br /> 11 years of experience in
                automation testing and software developing{" "}
              </p>
            </div>
            <div className="col-sm-4 col-md-2 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/aleksey-nikitenko-84837850/" className="text-white">
                    Linkedin profile
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/aleksey.nikitenko.7/" className="text-white">
                    Like on Facebook
                  </a>
                </li>
                <li>
                  <a href="mailto:donaspeed@gmail.com" className="text-white">
                    Email me
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
    <div>
      <div className="container">
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto"></div>
          </div>
        </section>

        <div className="album-custom rounded-2">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div class="col-lg-4 d-flex align-items-stretch">
                <div className="card shadow album-custom">
                  <img src="./images/sell_image.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Buy RoboArm</h5>
                    <p className="card-text-custom">
                      DIY start kit from <b>29 euro</b>
                      <br />
                      <br /> Windows Application, STL files and detailed instruction are included.
                    </p>
                    <p className="card-text-custom">
                      <b>
                        <br /> You will need 3d printer to print STL files
                        <br /> You will need to buy Arduino (tested on UNO and Nano)
                        <br /> You will need to buy bearing and 4 MG90S 180 degree servo motors as well
                      </b>
                    </p>
                    <a href="mailto:donaspeed@gmail.com" className="btn btn-dark shadow-sm">
                      e-Mail me
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 d-flex align-items-stretch">
                <div className="card shadow album-custom">
                  <img src="./images/StlFiles.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col-lg-4 d-flex align-items-stretch">
                <div className="card shadow album-custom">
                  <img src="./images/software.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col-lg-4 d-flex align-items-stretch">
                <div className="card shadow album-custom">
                  <div className="card-body">
                    <h5 className="card-text-custom">Buy Start Kit for 29 euros with PayPal</h5>
                  </div>
                  <div class="form-group">
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_s-xclick"></input>
                      <input type="hidden" name="hosted_button_id" value="BZJ8LC25YQ7AS"></input>
                      <input type="image" src="https://www.paypalobjects.com/en_US/PL/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 d-flex align-items-stretch">
              </div>
              <div class="col-lg-4 d-flex align-items-stretch">
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="container">
        <section className="py-3 text-center container">
          <div className="row py-lg-1">
            <div className="col-lg-6 col-md-8 mx-auto"></div>
          </div>
        </section>

        <div className="album-custom rounded-2">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-1 g-4">
              <h5 className="card-text-start">What you need to start</h5>
              <p className="doc-text">
                The idea is to create RoBoArm as much affordable as possible.
                <b className="doc-text-red"> Unfortunately I can’t provide a better price for such things like
                  Arduino (tested on UNO and Nano), PCA9685 16 servo motors board, wires,
                  bearings or filament for 3d printer.</b> So I would like to give an opportunity
                to find those things on Aliexpress, Amazon or any other local markets to you,
                my dear friend. <b className="doc-text-red">It will significantly speed up process of making RoBoArm and reduce price.</b>
              </p>
              <p className="doc-text-bold">
                With the Starter Kit you will receive:
              </p>
              <p className="doc-text">
                Windows 10-11 application.<br />
                Ino file for Arduino. (you have to update you Arduino)<br />
                STL files for 3D printing.<br />
                Detailed documentation on how to assemble and work.<br />
                Online support and application update.<br />
                Future STL files update to support different types of servo motors.<br />

              </p>
              <h5 className="card-text-start doc-text-red">Please store it before assemble RoBoArm:</h5>
              <p className="doc-text">
                Please print stl files provided in file storage
              </p>
              <div class="col-sm-1">
                <img src="./images/3dprintedparts.png" class="rounded-2 img-fluid" alt="..."></img>
              </div>

              <p className="doc-text">
              You have to buy Arduino, PCA9685 16 servo motors board and required wires
              </p>
              <div class="col-sm-1">
                <img src="./images/arduino_wires.png" class="rounded-2 img-fluid" alt="..."></img>
              </div>
              <p className="doc-text">
              And 4 MG90S servo motors with additional wire for 1 motor
              </p>
              <div class="col-sm-1">
                <img src="./images/4motors.png" class="rounded-2 img-fluid" alt="..."></img>
              </div>
              <p className="doc-text">
              You need 1 bearing 35x47x7-mm
              <br/>
                d = 35 D = 47 B = 7
              </p>
              <div class="col-sm-1">
                <img src="./images/bearing.png" class="rounded-2 img-fluid" alt="..."></img>
              </div>
              <p className="doc-text">
              And have 1 USB 2.0 power adapter 5V 1-2A to power supply PCA9685 16 servo motors board
              </p>
              <div class="col-sm-1">
                <img src="./images/adapter.png" class="rounded-2 img-fluid" alt="..."></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Header />, document.getElementById("headerId"));
ReactDOM.render(<Main />, document.getElementById("mainId"));
ReactDOM.render(<Footer />, document.getElementById("footerId"));