import { createRoot } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { v4 } from 'uuid';

import { CardFormFields } from 'types';

const initialValue: CardFormFields[] = [
  {
    cardNumber: '1234 5678 9000 0000',
    cardHolder: 'Alex Doe',
    expiration: '01/28',
  },
];

function cardStore() {
  const [cardList, setCardList] = createStore(initialValue);

  const addNewCard = (newCardValues: CardFormFields) =>
    setCardList((prev) => {
      return [...prev, { id: v4(), ...newCardValues }];
    });

  const updateCard = (newCardValues: CardFormFields) => {
    const index = cardList.findIndex((item) => item.id === newCardValues.id);

    setCardList(
      produce((s) => {
        s[index] = newCardValues;
      })
    );
  };

  const deleteCard = (id: string) => {
    const filteredList = cardList.filter((item) => item.id !== id);

    setCardList(filteredList);
  };

  return { cardList, addNewCard, updateCard, deleteCard };
}

export default createRoot(cardStore);
