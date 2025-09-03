import { ThemeProvider, createTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import PageBase from "./components/PageBase";
import { StatsigProvider, useClientAsyncInit } from "@statsig/react-bindings";
import { StatsigAutoCapturePlugin } from "@statsig/web-analytics";
import { StatsigSessionReplayPlugin } from "@statsig/session-replay";
const About = React.lazy(() => import("./containers/About"));
const Images = React.lazy(() => import("./containers/Images"));
const Landing = React.lazy(() => import("./containers/Landing"));

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

  const { client } = useClientAsyncInit(
    "client-lqUipxwYAu63fWMyAqTznnw94MMUNlOj8u3fvjul1nw",
    { userID: "a-user" },
    {
      plugins: [
        new StatsigAutoCapturePlugin(),
        new StatsigSessionReplayPlugin(),
      ],
    }
  );

  return (
    <StatsigProvider client={client}>
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
    </StatsigProvider>
  );
};

export default App;
