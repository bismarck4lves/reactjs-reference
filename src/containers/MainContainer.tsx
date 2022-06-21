import { Card, CardContent, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import LeftSidebar from "components/LeftSidebar";
import Typography from "components/Typography";
import { useThemeContext } from "contexts/ThemeContext";
import React from "react";

const drawerWidth = 100;
const containerBackground = "#F5F5F5";

interface MainContainerProps {
  title?: string;
}

const MainContainer: React.FC<MainContainerProps> = ({ children, title }) => {
  const {theme} = useThemeContext()

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              background: theme.palette.secondary.main,
            },
          }}
          open
        >
          <LeftSidebar />
        </Drawer>
      </Box>
      <Stack
        spacing={2}
        style={{
          width: "100%",
          background: containerBackground,
          height: "100vh",
        }}
      >
        <CardContent>
          <Typography
            size="display"
            style={{
              marginBottom: "20px",
            }}
            weight="700"
          >
            {title}
          </Typography>
          <Card>
            <CardContent>{children}</CardContent>
          </Card>
        </CardContent>
      </Stack>
    </Box>
  );
};

export default MainContainer;
