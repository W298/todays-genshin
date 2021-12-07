import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  openDrawer,
  closeDrawer,
  setMenuIndex,
  openSidebar,
  closeSidebar,
  setDrawerWidth,
} from "../reducers/configure";

import TopNav from "../components/TopNav";

export default function TopNavContainer() {
  const { drawerWidth, drawerOpen, sidebarOpen, selMenuIndex } = useSelector(
    (state) => ({
      drawerWidth: state.configure.drawerWidth,
      drawerOpen: state.configure.drawerOpen,
      sidebarOpen: state.configure.sidebarOpen,
      selMenuIndex: state.configure.selMenuIndex,
    })
  );

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
      onSidebarToggle={() => {
        if (!sidebarOpen) {
          dispatch(openSidebar());
          dispatch(setDrawerWidth(250));
        } else {
          dispatch(closeSidebar());
          dispatch(setDrawerWidth(0));
        }
      }}
      onListItemClick={(index) => {
        dispatch(setMenuIndex(index));
        dispatch(closeDrawer());
      }}
    />
  );
}
