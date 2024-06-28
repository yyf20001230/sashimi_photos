import React from 'react';
import LandingPage from './Landing';
import PhotographyPage from './Photography';
import LandscapePage from './pages/Landscape';
import CityPage from './pages/City';
import PerspectivePage from './pages/Perspective';
import PeoplePage from './pages/People';
import GraduationPage from './pages/Graduation';
import FilmPage from './Film';
import HotPage from './pages/Hot';
import NoumenaPage from './pages/Noumena';
import NecroPage from './pages/Necro';
import ClarkPage from './pages/Clark';
import FlaresPage from './pages/Flares';
import AboutPage from './About';
import FooterPage from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} gestureHandling="none"/>
          <Route path="/photography" element={<PhotographyPage />} gestureHandling="none"/>
          <Route path="/photography/landscape" element={<LandscapePage />} gestureHandling="none" />
          <Route path="/photography/perspective" element={<PerspectivePage />} gestureHandling="none"/>
          <Route path="/photography/graduation" element={<GraduationPage />} gestureHandling="none"/>
          <Route path="/photography/people" element={<PeoplePage />} gestureHandling="none"/>
          <Route path="/photography/city" element={<CityPage />} gestureHandling="none"/>
          <Route path="/film" element={<FilmPage />} gestureHandling="none"/>
          <Route path="/film/hot" element={<HotPage />} gestureHandling="none"/>
          <Route path="/film/noumena" element={<NoumenaPage />} gestureHandling="none"/>
          <Route path="/film/necro101" element={<NecroPage />} gestureHandling="none"/>
          <Route path="/film/clark" element={<ClarkPage />} gestureHandling="none"/>
          <Route path="/film/twoflaresup" element={<FlaresPage />} gestureHandling="none"/>
          <Route path="/about" element={<AboutPage />} gestureHandling="none"/>
        </Routes>
        <FooterPage />
      </Router>
    </div>
  );
}

export default App;
