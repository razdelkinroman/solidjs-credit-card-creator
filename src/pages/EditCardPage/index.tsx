import { Component, createEffect } from 'solid-js';
import { createStore } from 'solid-js/store';
import { useNavigate, useParams } from '@solidjs/router';

import { CardPreview } from '../../components/CardPreview';
import { CardForm } from '../../components/CardForm';
import cardStore from '../../store/cardList';
import backIcon from '../../assets/back.svg';

import { CardFormFields } from 'types';

const EditCardPage: Component = () => {
  const [formValues, setFormValues] = createStore<CardFormFields>({
    cardNumber: '',
    cardHolder: '',
    expiration: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const { updateCard, cardList } = cardStore;

  const onClearFormValues = () => {
    setFormValues({ cardNumber: '', cardHolder: '', expiration: '' });
    navigate('/');
  };

  createEffect(() => {
    const cardValues = cardList.find((item) => item.id === id);

    if (cardValues) {
      setFormValues(cardValues);
    } else {
      navigate('/');
    }
  });

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
          onSubmitCardValues={updateCard}
          onClearFormValues={onClearFormValues}
        />
      </div>
    </div>
  );
};

export default EditCardPage;
