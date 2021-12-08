import { useSelector, useDispatch } from "react-redux";
import { addCard, removeCard, editCard } from "../reducers/cardDB";

import { useState } from "react";

import CardHolder from "../components/CardHolder";
import { InsertInvitationOutlined } from "@mui/icons-material";

export default function CardHolderContainer() {
  const { cardDB } = useSelector((state) => ({
    cardDB: state.cardDB
  }));

  const { cardHolderMinusWidth, categoryDB } = useSelector((state) => ({
    cardHolderMinusWidth: state.configure.cardHolderMinusWidth,
    categoryDB: state.configure.categoryDB
  }));

  const dispatch = useDispatch();

  let initial = {};
  categoryDB.forEach((v, index) => {
    initial[index] = true;
  });

  const [selCategoryList, setSelCategoryList] = useState(initial);

  return (
    <CardHolder
      cardDB={cardDB}
      cardHolderMinusWidth={cardHolderMinusWidth}
      categoryDB={categoryDB}
      selCategoryList={selCategoryList}
      setSelCategoryList={setSelCategoryList}
    />
  );
}
