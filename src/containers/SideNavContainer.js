import { useDispatch, useSelector } from "react-redux";

import SideNav from "../components/SideNav";

import { closeDrawer, setMenuIndex, closeSidebar } from "../reducers/configure";

export default function SideNavContainer() {
  const { drawerWidth, sidebarOpen, selMenuIndex } = useSelector((state) => ({
    drawerWidth: state.configure.drawerWidth,
    sidebarOpen: state.configure.sidebarOpen,
    selMenuIndex: state.configure.selMenuIndex,
  }));

  const dispatch = useDispatch();

  return (
    <SideNav
      variant="persistent"
      drawerWidth={drawerWidth}
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
