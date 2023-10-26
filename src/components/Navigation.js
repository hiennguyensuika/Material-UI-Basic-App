import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { createTheme } from "@mui/material";
import Switch from "@mui/material/Switch";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor:"hsla(21, 100%, 74%, 1)",
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:"hsla(360, 36%, 50%, 1)",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navigation() {
  // {* const [searchParams, setSearchParams] = useSearchParams();*}
  // {const q = searchParams.get("q");}
  
  //Define light and dark theme
  const lightTheme = createTheme();
  const darkTheme = createTheme({
    palette:{
      mode:"dark"
    }
  })

  //Track the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleDarkModeChange = () => {
    //Change theme between light and dark
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box>
      <ThemeProvider theme ={theme}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "hsla(125, 33%, 18%, 0.63)"}}
      >
        <Toolbar>
          <Typography
            component="h4"
            variant="h4"
            sx={{
              display: { xs: "none", md: "block" },
              cursor: "pointer",
            }}
          >
            Job Routing
          </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                // name="q"
                placeholder="Search"
                //defaultValue={q ?? undefined}
                inputProps={{ "arial-label": "search" }}
              />
            </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Switch checked={isDarkMode} onChange={handleDarkModeChange}/>
              <Avatar
                src="/images/avatar/1.jpg"
                sx={{ width: 40, height: 40, ml: 1 }}
              />
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}

export default Navigation;