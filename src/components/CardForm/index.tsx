import { Setter } from 'solid-js';
import { createInputMask } from '@solid-primitives/input-mask';
import { Input } from '../../ui/Input';
import { CardFormFields } from 'types';

interface CardFormProps {
  formValues: CardFormFields;
  setFormValues: Setter<CardFormFields>;
  // eslint-disable-next-line no-unused-vars
  onSubmitCardValues: (newCardValues: CardFormFields) => void;
  onClearFormValues: () => void;
}

export function CardForm(props: CardFormProps) {
  const cardNumberHandler = createInputMask('9999 9999 9999 9999');
  const expirationHandler = createInputMask('99/99');

  const onChangeInputHandler = (
    e: InputEvent & {
      currentTarget: HTMLInputElement;
      target: Element;
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

    props.setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (e: Event) => {
    e.preventDefault();

    props.onSubmitCardValues(props.formValues);
    props.onClearFormValues();
  };

  const value = () => props.formValues.cardNumber || '';

  return (
    <>
      <form class="w-full flex flex-wrap" onSubmit={onSubmitHandler}>
        <Input
          name="cardNumber"
          label="Card number"
          placeholder="Enter card number"
          value={value()}
          onInput={onChangeInputHandler}
        />

        <div class="flex gap-4 w-full">
          <Input
            name="cardHolder"
            label="Cardholder"
            placeholder="Enter cardholder"
            value={props.formValues.cardHolder}
            onInput={onChangeInputHandler}
          />
          <Input
            name="expiration"
            label="Expiration"
            placeholder="Enter expiration"
            value={props.formValues.expiration}
            onInput={onChangeInputHandler}
          />
        </div>

        <button class="button self-end" type="submit">
          Сохранить
        </button>
      </form>
    </>
  );
}
