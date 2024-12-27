import { ThemeProvider, createTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import PageBase from "./components/PageBase";
import About from "./containers/About/About";
import Images from "./containers/Images/Images";
import Landing from "./containers/Landing/Landing";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Georgia, serif",
      fontWeightLight: 400,
      fontWeightRegular: 400,
      fontWeightMedium: 400,
    },
    palette: {
      background: {
        default: "#D4F1F4",
      },
      primary: {
        main: "#05445E",
        accent: "#189AB4",
        contrastText: "#D4F1F4",
      },
      secondary: {
        main: "#75E6DA",
        accent: "#189AB4",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          margin: 0,
          padding: 0,
        }}
      >
        <PageBase>
          <Landing />
          <About />
          <Images />
        </PageBase>
      </Stack>
    </ThemeProvider>
  );
};

export default App;
