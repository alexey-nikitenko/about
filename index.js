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

function KikstarterImageLink() {
    return (<a
        href="https://www.kickstarter.com/projects/myroboarm/robotic-arms-as-manipulator-for-keyboards-and-mouse">
        <img src="./images/kikstarter_link.png" alt="Project image"></img>
    </a>);
}

function BootstrapBlock() {
    return (
        <div className="col position-relative mb-4 mb-lg-5">
            <img src="./images/kikstarter_link.png" className="b-block border rounded-3 shadow-sm" alt="Kikstarter">
            </img>
            <h3 className="h5 mt-4 mb-3 mb-lg-0">
                <a href="https://www.kickstarter.com/projects/myroboarm/robotic-arms-as-manipulator-for-keyboards-and-mouse" className="stretched-link">Kikstarter</a>
            </h3>
        </div>);
}

ReactDOM.render(<SympleHeadOne />, document.getElementById('root'));
