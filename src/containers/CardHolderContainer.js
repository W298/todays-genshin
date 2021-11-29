import { useSelector, useDispatch } from "react-redux";
import { addCard, removeCard, editCard } from "../reducers/cardDB";

import { useState } from "react";

import CardHolder from "../components/CardHolder";
import { InsertInvitationOutlined } from "@mui/icons-material";

export default function CardHolderContainer() {
  const { cardDB } = useSelector((state) => ({
    cardDB: state.cardDB
  }));

  const { drawerWidth, categoryDB } = useSelector((state) => ({
    drawerWidth: state.configure.drawerWidth,
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
      drawerWidth={drawerWidth}
      categoryDB={categoryDB}
      selCategoryList={selCategoryList}
      setSelCategoryList={setSelCategoryList}
    />
  );
}
