// Action Types

const ADD = "cardDB/ADD";
const REMOVE = "cardDB/REMOVE";
const EDIT = "cardDB/EDIT";
const TOGGLEDONE = "cardDB/TOGGLEDONE";

// Action Construct Functions

export const addCard = (card) => {
  return { type: ADD, card };
};

export const removeCard = (id) => {
  return { type: REMOVE, id };
};

export const editCard = (id, newCard) => {
  return { type: EDIT, id, newCard };
};

export const toggleDoneCard = (id) => {
  return { type: TOGGLEDONE, id };
};

// Initial Value

const initialValue = [
  {
    id: 0,
    category: 0,
    image:
      "https://static.wikia.nocookie.net/gensin-impact/images/3/3d/Item_Sakura_Bloom.png",
    subImage:
      "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
    text: "벚꽃 수구",
    subText: "카미사토 아야카",
    done: false
  },
  {
    id: 1,
    category: 1,
    image:
      "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Item_Philosophies_of_Resistance.png",
    subImage:
      "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Eula.png",
    text: "투쟁의 인도",
    subText: "유라",
    done: true
  }
];

// Define Reducer

export default function counter(state = initialValue, action) {
  switch (action.type) {
    case ADD:
      state.push(action.card);
      break;
    case REMOVE:
      break;
    case EDIT:
      state[
        state.findIndex((card) => {
          return card.id === action.id;
        })
      ] = action.newCard;
      break;
    case TOGGLEDONE:
      state[
        state.findIndex((card) => {
          return card.id === action.id;
        })
      ].done = !state[
        state.findIndex((card) => {
          return card.id === action.id;
        })
      ].done;
      break;
    default:
      break;
  }

  return [...state];
}
