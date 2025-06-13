import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Fade, Pulse } from "react-swift-reveal";
import me from "../assets/smallme.webp";
import bentwood from "../assets/bentwood.avif";

const Landing = () => {
  const color = useTheme().palette;

  return (
    <Fade>
      <Stack
        spacing={4}
        direction="row"
        sx={{
          height: "auto",
          minHeight: "100vh",
          padding: "20px",
          backgroundImage: `url(${bentwood})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: { sm: "20px", md: "40px" },
        }}
        justifyContent={"center"}
        alignItems={"center"}
        id="landing"
      >
        <Card
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            width: { xs: "90%", sm: "70%", md: "50%" },
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
          <Pulse>
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
          </Pulse>
          <Fade>
            <CardContent>
              <Typography variant={"h6"} align={"center"}>
                <b> Senior Product Leader </b>
                with 10+ years delivering scalable internal platforms, developer
                tools, and analytics infrastructure. Proven success leading
                cross-functional teams and mentoring PMs, with impact across
                AEC, lidar, and retail. Deep experience in platform strategy,
                product lifecycle management, and driving operational efficiency
                at scale. Passionate about building tools that accelerate teams,
                automate workflows, and unlock data-driven decisions.
              </Typography>
            </CardContent>
          </Fade>

          <CardMedia image={me} title="Joshua Bigham" />
        </Card>
      </Stack>
    </Fade>
  );
};

export default Landing;
