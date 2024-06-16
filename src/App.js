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
import FooterPage from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
          <Route path="/photography/landscape" element={<LandscapePage />} />
          <Route path="/photography/perspective" element={<PerspectivePage />} />
          <Route path="/photography/graduation" element={<GraduationPage />} />
          <Route path="/photography/people" element={<PeoplePage />} />
          <Route path="/photography/city" element={<CityPage />} />
          <Route path="/film" element={<FilmPage />} />
          <Route path="/film/hot" element={<HotPage />} />
        </Routes>
        <FooterPage />
      </Router>
    </div>
  );
}

export default App;
