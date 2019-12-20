import React, { useState, useEffect } from 'react';
import Header from './header';
import Home from './home';
import Women from './women';
import Men from './men';
import Footer from './footer';
import NotFound from './notFound';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function App({ history }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() =>
    history.listen(() => {
      setIsMenuOpen(false);
    })
  );

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='App h-screen w-screen max-h-full max-w-full font-global'>
      {isMenuOpen && (
        <span
          onClick={toggleMenu}
          className='fixed top-0 left-0 h-screen w-screen max-h-full max-w-full bg-black opacity-75 z-20'
        ></span>
      )}
      <div className='relative w-full text-center bg-red-100 border-b border-gray-300 py-2 text-sm text-gray-800 font-light tracking-wider z-30'>
        Free ships worldwide!
      </div>
      <Header isMenuOpen={isMenuOpen} handleClick={toggleMenu}></Header>
      <main>
        <Switch>
          <Route path='/men' component={Men}></Route>
          <Route path='/women' component={Women}></Route>
          <Route path='/' exact component={Home}></Route>
          <Route path='/not-found' component={NotFound}></Route>
          <Redirect to='/not-found'></Redirect>
        </Switch>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default withRouter(App);
