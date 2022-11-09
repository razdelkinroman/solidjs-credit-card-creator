import { createRoot } from 'solid-js';
import { createStore } from 'solid-js/store';
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
      return [...prev, newCardValues];
    });

  return { cardList, addNewCard };
}

export default createRoot(cardStore);
