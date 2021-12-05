import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { openDrawer, closeDrawer, setMenuIndex } from "../reducers/configure";

import TopNav from "../components/TopNav";

export default function TopNavContainer() {
  const { drawerWidth, drawerOpen, selMenuIndex } = useSelector((state) => ({
    drawerWidth: state.configure.drawerWidth,
    drawerOpen: state.configure.drawerOpen,
    selMenuIndex: state.configure.selMenuIndex
  }));

  const dispatch = useDispatch();

  const krDay = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <TopNav
      drawerWidth={drawerWidth}
      drawerOpen={drawerOpen}
      selMenuIndex={selMenuIndex}
      krDay={krDay}
      onDrawerOpen={() => {
        dispatch(openDrawer());
      }}
      onDrawerClose={() => {
        dispatch(closeDrawer());
      }}
      onListItemClick={(index) => {
        dispatch(setMenuIndex(index));
        dispatch(closeDrawer());
      }}
    />
  );
}
