import { Component } from 'solid-js';
import { createStore } from 'solid-js/store';
import { useNavigate } from '@solidjs/router';

import { CardPreview } from '../../components/CardPreview';
import { CardForm } from '../../components/CardForm';
import cardStore from '../../store/cardList';
import backIcon from '../../assets/back.svg';

import { CardFormFields } from 'types';

const CreateCardPage: Component = () => {
  const [formValues, setFormValues] = createStore<CardFormFields>({
    cardNumber: '',
    cardHolder: '',
    expiration: '',
  });
  const { addNewCard } = cardStore;
  const navigate = useNavigate();

  const onClearFormValues = () =>
    setFormValues({ cardNumber: '', cardHolder: '', expiration: '' });

  return (
    <div>
      <img
        class="h-10 w-10"
        src={backIcon}
        alt="backIcon"
        onClick={() => navigate('/')}
      />

      <div class="flex gap-6 mt-2">
        <CardPreview formValues={formValues} />
        <CardForm
          formValues={formValues}
          setFormValues={setFormValues}
          addNewCard={addNewCard}
          onClearFormValues={onClearFormValues}
        />
      </div>
    </div>
  );
};

export default CreateCardPage;
