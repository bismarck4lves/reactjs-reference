import { BiGroup, BiUpload } from "react-icons/bi";
import { RiTimerLine } from "react-icons/ri";

import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { useThemeContext } from "contexts/ThemeContext";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import views from "routes/views";
import Typography from "./Typography";

interface MenuActionProps {
  icon: any;
  name: string;
  pathname?: string;
  active?: boolean;
  action: () => void;
  admin?: boolean;
}

const MenuOptions: React.FC = () => {
  let navigate = useNavigate();
  const location = useLocation();

  const { theme } = useThemeContext();
  const data: MenuActionProps[] = [
    {
      icon: BiUpload,
      name: "Importações",
      pathname: views.importacao,
      active: false,
      action: () => navigate(views.importacao, { replace: true }),
    },
    {
      icon: BiGroup,
      name: "Equipe e Pessoas",
      pathname: views.equipes,
      active: false,
      action: () => navigate(views.equipes, { replace: true }),
    },
    {
      icon: RiTimerLine,
      name: "Turnos e Horarios",
      pathname: views.turnos,
      active: false,
      action: () => navigate(views.turnos, { replace: true }),
    },
  ];

  const definMenuColor = (val) => {
    return val.pathname === location.pathname
      ? theme.palette.primary.light
      : theme.palette.secondary.main;
  };

  function MenuItem(val: MenuActionProps) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        onClick={() => val.action()}
        style={{
          width: 100,
          height: 100,
          cursor: "pointer",
          borderBottom: `0.5px solid rgba(255, 255, 255, 0.29)`,
          background: definMenuColor(val),
          color: theme.palette.secondary.contrastText,
        }}
        spacing={2}
      >
        <val.icon style={{ fontSize: 26 }} />
        <Typography align="center" size="xs">
          {val.name}
        </Typography>
      </Stack>
    );
  }

  return (
    <Box>
      {data.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </Box>
  );
};

export default MenuOptions;
