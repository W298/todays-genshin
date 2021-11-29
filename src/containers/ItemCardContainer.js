import { useSelector, useDispatch } from "react-redux";
import { toggleDoneCard } from "../reducers/cardDB";

import ItemCard from "../components/ItemCard";

export default function ItemCardContainer({ id }) {
  const { cardDB } = useSelector((state) => ({
    cardDB: state.cardDB
  }));

  const { categoryDB } = useSelector((state) => ({
    categoryDB: state.configure.categoryDB
  }));

  const dispatch = useDispatch();

  return (
    <ItemCard
      cardObj={cardDB[id]}
      categoryDB={categoryDB}
      onCheckBoxClick={() => {
        dispatch(toggleDoneCard(id));
        console.log(cardDB);
      }}
    />
  );
}
