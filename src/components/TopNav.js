import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Chip,
  IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import TodayIcon from "@mui/icons-material/Today";

import SideNav from "./SideNav";

function TopNav({
  cardHolderMinusWidth,
  drawerOpen,
  selMenuIndex,
  krDay,
  onDrawerOpen,
  onDrawerClose,
  onSidebarToggle,
  onListItemClick,
}) {
  return (
    <AppBar
      position='sticky'
      sx={{
        marginLeft: { xs: "0", sm: `${cardHolderMinusWidth}px` },
        width: { xs: "100%", sm: `calc(100% - ${cardHolderMinusWidth}px)` },
        color: "white",
        transition: "225ms cubic-bezier(0, 0, 0.2, 1) 0ms"
      }}
    >
      
        <Toolbar sx={{ height: "100%", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 1, display: { xs: "block", sm: "none" } }}
            onClick={onDrawerOpen}
          >
            <MenuIcon sx={{ marginTop: "0.4rem" }} />
          </IconButton>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 1, display: { xs: "none", sm: "block" } }}
            onClick={onSidebarToggle}
          >
            <MenuIcon sx={{ marginTop: "0.45rem" }} />
          </IconButton>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 400,
              mr: 0.7,
              display: { xs: "block", sm: "none" },
            }}
          >
            오늘의
          </Typography>
          <Typography
            variant='h6'
            sx={{ fontWeight: 600, display: { xs: "block", sm: "none" } }}
          >
            원신
          </Typography>
          <Typography
            variant='h6'
            sx={{ fontWeight: 600, display: { xs: "none", sm: "block" } }}
          >
            홈
          </Typography>
        </Box>
        <Chip
          color='secondary'
          icon={<TodayIcon />}
          label={krDay[new Date().getDay()] + "요일"}
          sx={{ lineHeight: "1rem" }}
        />
      </Toolbar>
      <SideNav
        variant='temporary'
        cardHolderMinusWidth={cardHolderMinusWidth}
        drawerOpen={drawerOpen}
        selMenuIndex={selMenuIndex}
        onDrawerClose={onDrawerClose}
        onListItemClick={onListItemClick}
      />
    </AppBar>
  );
}

export default TopNav;
