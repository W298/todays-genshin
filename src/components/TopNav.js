import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Chip,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton
} from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import TodayIcon from "@mui/icons-material/Today";

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
        display: { xs: "block", sm: "none" },
        color: "white"
      }}
    >
      <Box
        sx={{
          display: "flex",
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
            sx={{ mr: 0.75, display: { sm: "none" } }}
            onClick={onDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 400, mr: 0.7 }}>
            오늘의
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            원신
          </Typography>
        </Toolbar>
        <Chip
          color="secondary"
          icon={<TodayIcon />}
          label={krDay[new Date().getDay()] + "요일"}
          sx={{ mr: 1, lineHeight: "1rem" }}
        />
      </Box>
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={onDrawerClose}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth
          }
        }}
        PaperProps={{
          elevation: 1
        }}
      >
        <Box
          sx={{
            py: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography sx={{ fontSize: "1.75rem", fontWeight: 300 }}>
            오늘의
          </Typography>
          <Typography
            sx={{
              fontSize: "2.75rem",
              fontWeight: 600,
              lineHeight: "2.5rem"
            }}
          >
            원신
          </Typography>
        </Box>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={selMenuIndex === 0}
              onClick={() => {
                onListItemClick(0);
              }}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="홈" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={selMenuIndex === 1}
              onClick={() => {
                onListItemClick(1);
              }}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="설정" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}

export default TopNav;
