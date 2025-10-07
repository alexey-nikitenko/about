import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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