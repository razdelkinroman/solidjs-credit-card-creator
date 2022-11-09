import { Component, createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Routes, Route } from '@solidjs/router';

import MainPage from './pages/MainPage';
import CreateCardPage from './pages/CreateCardPage';

import { CardFormFields } from 'types';

const initialValue: CardFormFields = {
  cardNumber: '',
  cardHolder: '',
  expiration: '',
};

const App: Component = () => {
  const [formValues, setFormValues] = createStore(initialValue);

  // createEffect(() => console.log(formValues()), [formValues()]);

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
