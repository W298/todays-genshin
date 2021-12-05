import { useDispatch, useSelector } from "react-redux";

import SideNav from "../components/SideNav";

import { closeDrawer, setMenuIndex } from "../reducers/configure";

export default function SideNavContainer({ variant }) {
  const { drawerWidth, drawerOpen, selMenuIndex } = useSelector((state) => ({
    drawerWidth: state.configure.drawerWidth,
    drawerOpen: state.configure.drawerOpen,
    selMenuIndex: state.configure.selMenuIndex
  }));

  const dispatch = useDispatch();

  return (
    <SideNav 
      drawerWidth={drawerWidth} 
      variant={variant} 
      drawerOpen={drawerOpen} 
      onDrawerClose={() => { 
        dispatch(closeDrawer());
      }} 
      selMenuIndex={selMenuIndex} 
      onListItemClick={(index) => {
        dispatch(setMenuIndex(index));
        dispatch(closeDrawer());
      }} 
    />
  );
}
