import { Setter } from 'solid-js';
import { createInputMask } from '@solid-primitives/input-mask';

import { CardFormFields } from 'types';

interface CardFormProps {
  formValues: CardFormFields;
  setFormValues: Setter<CardFormFields>;
  addNewCard: (newCardValues: CardFormFields) => void;
  onClearFormValues: () => void;
}

export function CardForm(props: CardFormProps) {
  const { formValues, setFormValues, addNewCard, onClearFormValues } = props;
  let refForm: HTMLFormElement | undefined;

  const cardNumberHandler = createInputMask('9999 9999 9999 9999');
  const expirationHandler = createInputMask('99/99');

  const onChangeInputHandler = (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
    }
  ) => {
    const name = e.currentTarget?.name;
    let value: string;

    switch (name) {
      case 'cardNumber':
        value = cardNumberHandler(e);
        break;
      case 'expiration':
        value = expirationHandler(e);
        break;
      default:
        value = e.currentTarget.value;
        break;
    }

    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (e: Event) => {
    e.preventDefault();

    addNewCard({ ...formValues });
    onClearFormValues();
  };

  return (
    <>
      <form ref={refForm} class="w-full" onSubmit={onSubmitHandler}>
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="cardNumber"
          >
            cardNumber
          </label>
          <input
            name="cardNumber"
            id="cardNumber"
            class="input"
            placeholder="Enter card number"
            value={formValues.cardNumber}
            onInput={onChangeInputHandler}
          />
        </div>

        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="cardHolder"
          >
            cardholder
          </label>
          <input
            name="cardHolder"
            id="cardHolder"
            class="input"
            placeholder="Enter cardholder"
            value={formValues.cardHolder}
            onInput={onChangeInputHandler}
          />
        </div>

        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="expiration"
          >
            expiration
          </label>
          <input
            name="expiration"
            id="expiration"
            class="input"
            placeholder="Enter expiration"
            value={formValues.expiration}
            onInput={onChangeInputHandler}
          />
        </div>
        <button class="button" type="submit">
          Сохранить
        </button>
      </form>
    </>
  );
}
