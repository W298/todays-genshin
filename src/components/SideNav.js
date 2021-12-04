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
  Avatar
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

function SideNav({ drawerWidth, variant }) {
  return (
    <Drawer
      id="permanet-drawer"
      // variant="permanent"
      variant={variant}
      anchor="left"
      sx={{
        display: { xs: "none", sm: "block" },
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
          alignItems: "center",
          backgroundColor: "primary.main",
          color: "sidebar.text"
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
        <ListItem>
          <TextField label="검색" variant="outlined" size="small" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
          // selected={selectedListItemIndex === 0}
          // onClick={() => {
          //   onListItemClick(0);
          // }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="홈" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
          // selected={selectedListItemIndex === 1}
          // onClick={() => {
          //   onListItemClick(1);
          // }}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="설정" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideNav;
