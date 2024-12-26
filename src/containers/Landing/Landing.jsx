import { Card, CardContent, useTheme } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import me from "../../assets/smallme.webp";

const Landing = () => {
  const color = useTheme().palette;

  return (
    <Stack
      spacing={4}
      direction="row"
      sx={{
        height: "100vh",
        padding: "20px",
        backgroundImage: `url(https://bigham-joshua-site.s3.us-east-1.amazonaws.com/bentwood.avif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      justifyContent={"center"}
      alignItems={"center"}
      id="landing"
    >
      <Card
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
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
            height: "200px",
            width: "200px",
            borderRadius: "50%",
            margin: "10px auto",
          }}
        />
        <CardContent>
          <Typography variant={"h6"} align={"center"}>
            Experienced Product Manager with 10+ years of driving user-centric
            innovation, scaling enterprise products, and leading cross
            functional teams. Proven track record in leveraging data-driven
            strategies to deliver high-impact results for Fortune 500 companies
            and startups.
          </Typography>
        </CardContent>
        <CardMedia image={me} title="Joshua Bigham" />
      </Card>
    </Stack>
  );
};

export default Landing;
