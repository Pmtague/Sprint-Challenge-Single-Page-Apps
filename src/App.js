import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import EpisodesList from './components/EpisodesList.js';
import LocationsList from './components/LocationsList.js';

export default function App() {
  return <main>
    <Header />
    <TabNav />
    <AppRouter />
  </main>
}