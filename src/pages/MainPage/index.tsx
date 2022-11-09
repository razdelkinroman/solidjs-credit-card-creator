import { Component } from 'solid-js';
import { createStore } from 'solid-js/store';
import { useNavigate } from '@solidjs/router';
import { CardPreview } from '../../components/CardPreview/index';
import { CardForm } from '../../components/CardForm/index';
import cardStore from '../../store/cardList';
import plusIcon from '../../assets/plus.svg';

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
          {cardList.map((item) => (
            <CardPreview formValues={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
