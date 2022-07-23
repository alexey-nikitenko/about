function Header() {
    return (
        <div>
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-2 py-4">
                        <img src="./images/face.jpg" className="card-img-top rounded-2 shadow-sm" alt="..." />
                        </div>
                        <div className="col-sm-8 col-md-6 py-4">
                            <h4 className="text-white">About</h4>
                            <p className="text-muted">Aleksey Nikitenko.<br/> Software engineer. <br/> 11 years of experience in automation testing and software developing </p>
                        </div>
                        <div className="col-sm-4 col-md-2 py-4">
                            <h4 className="text-white">Contact</h4>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                <li><a href="#" className="text-white">Like on Facebook</a></li>
                                <li><a href="#" className="text-white">Email me</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-robot" viewBox="0 0 20 20">
                            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                        </svg>
                        <strong> My Projects</strong>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
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
        <div className="container">
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                    </div>
                </div>
            </section>

            <div className="album-custom rounded-2">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div className="card shadow album-custom">
                                <img src="./images/kikstarter_link_beatify.jpg" className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Kikstarter</h5>
                                    <p className="card-text">Robo Arm. Looking for fundraising</p>
                                    <a href="https://www.kickstarter.com/projects/myroboarm/robotic-arms-as-manipulator-for-keyboards-and-mouse"
                                        className="btn btn-success shadow-sm">Go look at the project</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card shadow album-custom" >
                                <img src="./images/mouse_manipulator.jpg" className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Mouse manipulator concept</h5>
                                    <p className="card-text">Mouse manipulator in develop.</p>
                                    <a href="#" className="btn btn-dark shadow-sm">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card shadow album-custom">
                                <img src="./images/kikstarter_link_beatify.jpg" className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Kikstarter</h5>
                                    <p className="card-text">Robo Arm. Looking for fundraising</p>
                                    <a href="https://www.kickstarter.com/projects/myroboarm/robotic-arms-as-manipulator-for-keyboards-and-mouse"
                                        className="btn btn-dark shadow-sm">Go look at the project</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card shadow album-custom">
                                <img src="./images/mouse_manipulator.jpg" className="card-img-top" alt="..." />

                                <div className="card-body ">
                                    <h5 className="card-title">Mouse manipulator concept</h5>
                                    <p className="card-text">Mouse manipulator in develop.</p>
                                    <a href="#" className="btn btn-dark shadow-sm">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SympleHeadOne() {
    return (<h1>
        Hello my dear friends.
        <br />
        Thank you for visiting this page.
        <br />
        It's under renovation.
        But you can visit my kikstarter project page.
        <p>
            <BootstrapBlock />
        </p>
    </h1>
    );
}

function MainPageWrapper() {
    return (
        <main className="page-wrapper">
            <SympleHeadOne />
        </main>
    );
}

function KikstarterImageLink() {
    return (<a
        href="https://www.kickstarter.com/projects/myroboarm/robotic-arms-as-manipulator-for-keyboards-and-mouse">
        <img src="./images/kikstarter_link.png" alt="Project image"
        ></img>
    </a>);
}

function BootstrapBlock() {
    return (
        <div className="col position-relative mb-4 mb-lg-5" >
            <KikstarterImageLink />
        </div>);
}

ReactDOM.render(<Header />, document.getElementById('headerId'));
ReactDOM.render(<Main />, document.getElementById('mainId'));
ReactDOM.render(<Footer />, document.getElementById('footerId'));