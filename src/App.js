import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./App.css";

import TopNavContainer from "./containers/TopNavContainer";
import SideNavContainer from "./containers/SideNavContainer";
import CardHolderContainer from "./containers/CardHolderContainer";
import { blue, grey } from "@mui/material/colors";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#121212",
        avatar: "rgb(30, 30, 30)"
      },
      secondary: {
        main: grey[900]
      }
    },
    typography: {
      fontFamily: "IBM Plex Sans KR"
    }
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "rgb(250, 250, 250)",
        avatar: "rgb(240, 240, 240)"
      },
      secondary: {
        main: blue[800]
      },
      sidebar: {
        text: "white"
      }
    },
    typography: {
      fontFamily: "IBM Plex Sans KR"
    }
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <div>
        <TopNavContainer />
        <SideNavContainer variant="permanent" />
        <CardHolderContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
