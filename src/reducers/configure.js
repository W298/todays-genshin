// Action Types

const SETCARDHOLDERMINUSW = "configure/SETCARDHOLDERMINUSW";
const OPENDRAWER = "configure/OPENDRAWER";
const CLOSEDRAWER = "configure/CLOSEDRAWER";
const OPENSIDEBAR = "configure/OPENSIDEBAR";
const CLOSESIDEBAR = "configure/CLOSESIDEBAR";
const TOGGLESIDEBAR = "configure/TOGGLESIDEBAR";
const SETMENUINDEX = "configure/SETMENUINDEX";

// Action Construct Functions

export const setCardHolderMinusWidth = (width) => {
  return { type: SETCARDHOLDERMINUSW, width }
}

export const openDrawer = () => {
  return { type: OPENDRAWER }
}

export const closeDrawer = () => {
  return { type: CLOSEDRAWER }
}

export const openSidebar = () => {
  return { type: OPENSIDEBAR }
}

export const closeSidebar = () => {
  return { type: CLOSESIDEBAR }
}

export const toggleSidebar = () => {
  return { type: TOGGLESIDEBAR }
}

export const setMenuIndex = (index) => {
  return { type: SETMENUINDEX, index }
}

// Initial Value

const initialSideNavWidth = 250;

const initialValue = {
  sideNavWidth: initialSideNavWidth,
  cardHolderMinusWidth: initialSideNavWidth,
  categoryDB: ["무기 돌파 재료", "특성 책"],
  drawerOpen: false,
  sidebarOpen: true,
  selMenuIndex: 0
};

// Define Reducer

export default function configure(state = initialValue, action) {
  switch (action.type) {
    case SETCARDHOLDERMINUSW:
      state.cardHolderMinusWidth = action.width;
      break;
    case OPENDRAWER:
      state.drawerOpen = true;
      break;
    case CLOSEDRAWER:
      state.drawerOpen = false;
      break;
    case OPENSIDEBAR:
      state.sidebarOpen = true;
      break;
    case CLOSESIDEBAR:
      state.sidebarOpen = false;
      break;
    case TOGGLESIDEBAR:
      state.sidebarOpen = !state.sidebarOpen;
      break;
    case SETMENUINDEX:
      state.selMenuIndex = action.index;
      break;
    default:
      break;
  }

  return {...state};
}
