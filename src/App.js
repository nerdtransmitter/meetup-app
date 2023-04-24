import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
   <div>
    <MainNavigation />
    <Routes>
      <Route path="/" element={<AllMeetUpsPage />} />
      <Route path="/new-meetup" element={<NewMeetupPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
   </div>
  );
}

export default App;
