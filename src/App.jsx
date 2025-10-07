import React from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main id="mainId" className="back-im">
        <Main />
      </main>
      <footer id="footerId" className="text-muted py-5 bg-dark">
        <Footer />
      </footer>
    </>
  );
}

export default App;