import {
  Drawer,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Avatar,
} from "@mui/material";

import logo from "../imgs/logo.png";

import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

function SideNav({
  variant,
  drawerWidth,
  drawerOpen,
  sidebarOpen,
  selMenuIndex,
  onDrawerClose,
  onSidebarClose,
  onListItemClick,
}) {
  return (
    <Drawer
      variant={variant}
      anchor='left'
      open={variant === "persistent" ? sidebarOpen : drawerOpen}
      onClose={variant === "persistent" ? onSidebarClose : onDrawerClose}
      sx={{
        display: {
          xs: variant === "persistent" ? "none" : "block",
          sm: "block",
        },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 250
        },
      }}
      PaperProps={{
        elevation: 4,
        sx: {
          border: "none"
        }
      }}
    >
      <Box
        sx={{
          py: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "primary.main",
          color: "sidebar.text",
        }}
      >
        <Avatar
          src={logo}
          sx={{
            width: "8rem",
            height: "8rem",
            mb: 1,
          }}
        />
        <Typography sx={{ fontSize: "1.9rem", fontWeight: 300 }}>
          오늘의
        </Typography>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: 600,
            lineHeight: "2.5rem",
          }}
        >
          원신
        </Typography>
      </Box>
      <Divider />
      <List>
        <ListItem>
          <TextField label='검색' variant='outlined' size='small' />
        </ListItem>
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
            <ListItemText primary='홈' />
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
            <ListItemText primary='설정' />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideNav;
