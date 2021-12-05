import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Chip,
  IconButton
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import TodayIcon from "@mui/icons-material/Today";

import SideNav from "./SideNav";

function TopNav({
  drawerWidth,
  drawerOpen,
  selMenuIndex,
  krDay,
  onDrawerOpen,
  onDrawerClose,
  onListItemClick
}) {
  return (
    <AppBar
      position="sticky"
      sx={{
        marginLeft: { xs: "0", sm: `${drawerWidth}px` },
        width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
        color: "white"
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "4rem",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0.75 }}
            onClick={onDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              mr: 0.7,
              display: { xs: "block", sm: "none" }
            }}
          >
            오늘의
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, display: { xs: "block", sm: "none" } }}
          >
            원신
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, display: { xs: "none", sm: "block" } }}
          >
            홈
          </Typography>
        </Toolbar>
        <Chip
          color="secondary"
          icon={<TodayIcon />}
          label={krDay[new Date().getDay()] + "요일"}
          sx={{ mr: 1, lineHeight: "1rem" }}
        />
      </Box>
      <SideNav 
        drawerWidth={drawerWidth} 
        variant="temporary" 
        drawerOpen={drawerOpen}
        onDrawerClose={onDrawerClose}
        onListItemClick={onListItemClick}
        selMenuIndex={selMenuIndex}
      />
    </AppBar>
  );
}

export default TopNav;
