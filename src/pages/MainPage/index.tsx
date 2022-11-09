import { Component, For } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { CardPreview } from '../../components/CardPreview/index';
import cardStore from '../../store/cardList';
import plusIcon from '../../assets/plus.svg';
import { CardFormFields } from 'types';

const MainPage: Component = () => {
  const { cardList } = cardStore;
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <img
          src={plusIcon}
          width={48}
          height={48}
          onClick={() => navigate('/newCard')}
        />
        <div class="flex gap-4 flex-wrap mt-4">
          <For each={cardList}>
            {(item: CardFormFields) => <CardPreview formValues={item} />}
          </For>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
