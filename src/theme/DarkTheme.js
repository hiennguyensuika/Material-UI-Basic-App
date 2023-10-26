import { Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper>
        <main>This app is using the dark mode</main>
      </Paper>
    </ThemeProvider>
  );
}
