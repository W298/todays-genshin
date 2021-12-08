import { useDispatch, useSelector } from "react-redux";

import SideNav from "../components/SideNav";

import { closeDrawer, setMenuIndex, closeSidebar } from "../reducers/configure";

export default function SideNavContainer() {
  const { sideNavWidth, sidebarOpen, selMenuIndex } = useSelector((state) => ({
    sideNavWidth: state.configure.sideNavWidth,
    sidebarOpen: state.configure.sidebarOpen,
    selMenuIndex: state.configure.selMenuIndex,
  }));

  const dispatch = useDispatch();

  return (
    <SideNav
      variant="persistent"
      sideNavWidth={sideNavWidth}
      sidebarOpen={sidebarOpen}
      selMenuIndex={selMenuIndex}
      onSidebarClose={() => {
        dispatch(closeSidebar());
      }}
      onListItemClick={(index) => {
        dispatch(setMenuIndex(index));
        dispatch(closeDrawer());
      }}
    />
  );
}
