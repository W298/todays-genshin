// Action Types

const OPENDRAWER = "configure/OPENDRAWER";
const CLOSEDRAWER = "configure/CLOSEDRAWER";
const SETMENUINDEX = "configure/SETMENUINDEX";

// Action Construct Functions

export const openDrawer = () => {
  return { type: OPENDRAWER }
}

export const closeDrawer = () => {
  return { type: CLOSEDRAWER }
}

export const setMenuIndex = (index) => {
  return { type: SETMENUINDEX, index }
}

// Initial Value

const initialValue = {
  drawerWidth: 250,
  categoryDB: ["무기 돌파 재료", "특성 책"],
  drawerOpen: true,
  selMenuIndex: 0
};

// Define Reducer

export default function configure(state = initialValue, action) {
  switch (action.type) {
    case OPENDRAWER:
      state.drawerOpen = true;
      break;
    case CLOSEDRAWER:
      state.drawerOpen = false;
      break;
    case SETMENUINDEX:
      state.selMenuIndex = action.index;
      break;
    default:
      break;
  }

  return {...state};
}
