import { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

import MainPage from './pages/MainPage';
import CreateCardPage from './pages/CreateCardPage';

const App: Component = () => {
  return (
    <div class="w-full max-w-[1280px] m-auto">
      <Routes>
        <Route path="/" component={MainPage} />
        <Route path="/newCard" component={CreateCardPage} />
      </Routes>
    </div>
  );
};

export default App;
