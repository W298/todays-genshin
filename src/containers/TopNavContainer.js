import { useState } from "react";
import { useSelector } from "react-redux";

import TopNav from "../components/TopNav";

export default function TopNavContainer() {
  const { drawerWidth } = useSelector((state) => ({
    drawerWidth: state.configure.drawerWidth
  }));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selMenuIndex, setSelMenuIndex] = useState(0);

  const krDay = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <TopNav
      drawerWidth={drawerWidth}
      drawerOpen={drawerOpen}
      selMenuIndex={selMenuIndex}
      krDay={krDay}
      onDrawerOpen={() => {
        setDrawerOpen(true);
      }}
      onDrawerClose={() => {
        setDrawerOpen(false);
      }}
      onListItemClick={(index) => {
        setSelMenuIndex(index);
        setDrawerOpen(false);
      }}
    />
  );
}
