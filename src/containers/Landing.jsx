import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import { Fade, Pulse } from "react-swift-reveal";
import me from "../assets/smallme.webp";
import bentwood from "../assets/bentwood.avif";
import resume from "../assets/joshua-bigham-resume.pdf";

const Landing = () => {
  const color = useTheme().palette;

  const specialties = [
    "Platform Strategy",
    "Developer Tools",
    "Analytics Infrastructure",
    "0→1 Product Launch",
    "Team Leadership",
    "ETL Automation",
  ];

  return (
    <Fade>
      <Stack
        spacing={4}
        direction="row"
        sx={{
          height: "auto",
          minHeight: "100vh",
          padding: { xs: "20px", md: "40px" },
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
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            width: { xs: "95%", sm: "80%", md: "60%", lg: "50%" },
            borderRadius: 4,
          }}
        >
          <CardHeader
            title="Joshua Bigham"
            subheader="Senior Product Leader"
            sx={{
              backgroundColor: color.primary.main,
              color: color.primary.contrastText,
              textAlign: "center",
              "& .MuiCardHeader-subheader": {
                color: "rgba(255, 255, 255, 0.85)",
                fontSize: "1.1rem",
              },
            }}
          />
          <Pulse>
            <CardMedia
              component={"img"}
              image={me}
              title="Joshua Bigham"
              style={{
                height: "180px",
                width: "180px",
                borderRadius: "50%",
                margin: "24px auto",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            />
          </Pulse>
          <Fade>
            <CardContent sx={{ paddingX: { xs: 2, md: 4 }, paddingBottom: 3 }}>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  mb: 3,
                  color: "text.primary",
                }}
              >
                10+ years delivering scalable internal platforms, developer tools,
                and analytics infrastructure. Proven success leading
                cross-functional teams, driving $4M+ in savings, and mentoring PMs.
                Deep expertise in platform strategy, product lifecycle management,
                and operational efficiency at scale.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  justifyContent: "center",
                  mb: 3,
                }}
              >
                {specialties.map((specialty, idx) => (
                  <Chip
                    key={idx}
                    label={specialty}
                    color="primary"
                    variant="outlined"
                    size="small"
                    sx={{ fontWeight: 500 }}
                  />
                ))}
              </Box>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                 
                  href="https://www.linkedin.com/in/joshuabigham/"
                  target="_blank"
                  startIcon={<LinkedInIcon />}
                
                >
                  Connect on LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                 
                  href="mailto:jbigham0517@gmail.com"
                  startIcon={<EmailIcon />}
          
                >
                  Email Me
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  
                  href={resume}
                  target="_blank"
                  startIcon={<PictureAsPdf />}
                 
                >
                  View Resume
                </Button>
              </Stack>
            </CardContent>
          </Fade>
        </Card>
      </Stack>
    </Fade>
  );
};

export default Landing;
