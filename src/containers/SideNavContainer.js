import { useSelector } from "react-redux";

import SideNav from "../components/SideNav";

export default function SideNavContainer({ variant }) {
  const { drawerWidth } = useSelector((state) => ({
    drawerWidth: state.configure.drawerWidth
  }));

  return <SideNav drawerWidth={drawerWidth} variant={variant} />;
}
