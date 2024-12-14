import { Card, CardContent, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import me from "../../assets/me.png";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

const Landing = () => {
  const color = useTheme().palette;

  return (
    <Stack
      spacing={4}
      direction="row"
      sx={{
        height: "100vh",
        padding: "20px",
        backgroundImage: `url(https://bigham-joshua-site.s3.amazonaws.com/bentwood.JPG)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      justifyContent={"center"}
      alignItems={"center"}
      id="landing"
    >
      <Card
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <CardHeader
          title="Hello There, I'm Joshua Bigham"
          sx={{
            backgroundColor: color.primary.main,
            color: color.primary.contrastText,
            textAlign: "center",
          }}
        />
        <CardMedia
          component={"img"}
          image={me}
          title="Joshua Bigham"
          style={{
            height: "300px",
            width: "300px",
            borderRadius: "50%",
            margin: "10px auto",
          }}
        />
        <CardContent>
          <Typography variant="h5" align={"center"}>
            Senior Product Manager with 10 years of leading teams to build
            products with user-focussed mindset. Working experience with
            multi-region teams, startups, and corporate environments.
          </Typography>
        </CardContent>
        <CardMedia image={me} title="Joshua Bigham" />
      </Card>
    </Stack>
  );
};

export default Landing;
