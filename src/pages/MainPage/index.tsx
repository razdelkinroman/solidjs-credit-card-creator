import { Component, For } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { CardPreview } from '../../components/CardPreview';
import cardStore from '../../store/cardList';
import plusIcon from '../../assets/plus.svg';
import { CardFormFields } from 'types';

const MainPage: Component = () => {
  const { cardList } = cardStore;
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div class="flex gap-4 mb-7">
          <button
            class="bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded flex gap-2 items-center text-white hover:from-pink-500 hover:to-yellow-500"
            onClick={() => navigate('/newCard')}
          >
            <img src={plusIcon} width={24} height={24} />
            New card
          </button>
          <button
            class="py-2 px-4 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
            onClick={() => cardStore.generateCard()}
          >
            Generate
          </button>
        </div>

        <div class="flex gap-4 flex-wrap mt-2">
          <For each={cardList}>
            {(item: CardFormFields) => <CardPreview formValues={item} />}
          </For>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
