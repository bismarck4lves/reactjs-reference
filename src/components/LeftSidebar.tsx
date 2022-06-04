import { Paper } from "@mui/material";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import React from "react";
import styledComponent from "styled-components";

const ContainerSideBar = styledComponent.div`
  height: 100vh;
  position: relative;
`;

const FireNav = styled(List)<{ component?: React.ElementType }>({
    "& .MuiListItemButton-root": {
      paddingLeft: 24,
      paddingRight: 24,
    },
    "& .MuiListItemIcon-root": {
      minWidth: 0,
      marginRight: 16,
    },
    "& .MuiSvgIcon-root": {
      fontSize: 20,
    },
  });

const LeftSidebar = (props) => {
  return (
    <ContainerSideBar>
      <Paper elevation={0} sx={{ minWidth: 100, maxWidth: 100 }}>
        <FireNav component="nav" disablePadding>
          ItemMenu
        </FireNav>
      </Paper>
    </ContainerSideBar>
  );
};

LeftSidebar.propTypes = {};

export default LeftSidebar;
