import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './HeaderComponent';
import HomePage from './home/HomePageComponent';
import MusicPage from './MusicComponent'
import Footer from './FooterComponent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

export default function Main () {
   
    const location = useLocation()
    
    return (
        <div>
            <Header />
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames='fade' timeout={300}>
                        <Routes location={location}>
                            <Route exact path='/' element={<HomePage />} />
                            <Route exact path='/music' element={<MusicPage />} />
                            {/* <Route exact path='/aboutus' component={AboutUs} />
                            <Route exact path='/contact' component={Contact} /> */}
                            <Route
                                path="*"
                                element={<HomePage />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            <Footer />
        </div>
    );
}
