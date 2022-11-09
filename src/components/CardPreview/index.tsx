import { CardFormFields } from 'types';
import mastercard from '../../assets/mastercard.svg';
import chip from '../../assets/chip.svg';

interface CardPreviewProps {
  formValues: CardFormFields;
}

export function CardPreview(props: CardPreviewProps) {
  const { formValues } = props;

  return (
    <div class="">
      <div class="w-[400px] h-[250px] flex flex-col justify-between border rounded-2xl p-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div class="flex justify-between">
          <img class="h-[60px]" src={chip} alt="chip" />
          <img class="h-[60px]" src={mastercard} alt="mastercard" />
        </div>
        <div>
          <span class="text-gray-300">card number</span>
          <p class="text-white text-3xl tracking-widest	">
            {formValues.cardNumber || '0000 0000 0000 0000'}
          </p>
        </div>
        <div class="flex justify-between">
          <div>
            <span class="text-gray-300">cardholder name</span>
            <p class="text-white	">
              {formValues.cardHolder.toUpperCase() || 'JOHN DOE'}
            </p>
          </div>
          <div>
            <span class="text-gray-300">expiration</span>
            <p class="text-white">{formValues.expiration || '01/99'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
