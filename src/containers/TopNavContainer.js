import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  openDrawer,
  closeDrawer,
  setMenuIndex,
  openSidebar,
  closeSidebar,
  setCardHolderMinusWidth,
} from "../reducers/configure";

import TopNav from "../components/TopNav";

export default function TopNavContainer() {
  const { cardHolderMinusWidth, drawerOpen, sidebarOpen, selMenuIndex } = useSelector(
    (state) => ({
      cardHolderMinusWidth: state.configure.cardHolderMinusWidth,
      drawerOpen: state.configure.drawerOpen,
      sidebarOpen: state.configure.sidebarOpen,
      selMenuIndex: state.configure.selMenuIndex,
    })
  );

  const dispatch = useDispatch();

  const krDay = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <TopNav
      cardHolderMinusWidth={cardHolderMinusWidth}
      drawerOpen={drawerOpen}
      selMenuIndex={selMenuIndex}
      krDay={krDay}
      onDrawerOpen={() => {
        dispatch(openDrawer());
      }}
      onDrawerClose={() => {
        dispatch(closeDrawer());
      }}
      onSidebarToggle={() => {
        if (!sidebarOpen) {
          dispatch(openSidebar());
          dispatch(setCardHolderMinusWidth(250));
        } else {
          dispatch(closeSidebar());
          dispatch(setCardHolderMinusWidth(0));
        }
      }}
      onListItemClick={(index) => {
        dispatch(setMenuIndex(index));
        dispatch(closeDrawer());
      }}
    />
  );
}
