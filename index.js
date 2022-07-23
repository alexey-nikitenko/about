function Header() {
    return (
        <div>
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">About</h4>
                            <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                        <strong>Album</strong>
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
                <a href="#">Back to top</a>
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
                        <h1 className="fw-light">Pages</h1>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div className="card">
                                <img src="./images/kikstarter_link_beatify.jpg" className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Kikstarter</h5>
                                    <p className="card-text">Robo Arm. Looking for fundraising</p>
                                    <a href="https://www.kickstarter.com/projects/myroboarm/robotic-arms-as-manipulator-for-keyboards-and-mouse" className="btn btn-primary">Go look at project</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card">
                                <img src="./images/mouse_manipulator.jpg" className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Mouse manipulator concept</h5>
                                    <p className="card-text">Mouse manipulator in develop.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card">
                                <img src="./images/kikstarter_link_beatify.jpg" className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Kikstarter</h5>
                                    <p className="card-text">Robo Arm. Looking for fundraising</p>
                                    <a href="https://www.kickstarter.com/projects/myroboarm/robotic-arms-as-manipulator-for-keyboards-and-mouse" className="btn btn-primary">Go look at project</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div className="card">
                                <img src="./images/mouse_manipulator.jpg" className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title">Mouse manipulator concept</h5>
                                    <p className="card-text">Mouse manipulator in develop.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
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

//ReactDOM.render(<MainPageWrapper />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('headerId'));
ReactDOM.render(<Main />, document.getElementById('mainId'));
ReactDOM.render(<Footer />, document.getElementById('footerId'));