import { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

import MainPage from './pages/MainPage';
import CreateCardPage from './pages/CreateCardPage';
import EditCardPage from './pages/EditCardPage';

const App: Component = () => {
  return (
    <div class="w-full max-w-[1280px] h-full m-auto mt-10">
      <Routes>
        <Route path="/" component={MainPage} />
        <Route path="/newCard" component={CreateCardPage} />
        <Route path="/:id" component={EditCardPage} />
      </Routes>
    </div>
  );
};

export default App;
