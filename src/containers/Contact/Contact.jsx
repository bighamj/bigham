import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const Contact = () => {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h2">Get In Touch</Typography>
      <Stack
        direction="row"
        justifyContent="left"
        spacing={1}
        useFlexGap
        sx={{
          color: "text.secondary",
        }}
      >
        <IconButton
          color="inherit"
          href="mailto:jbigham0517@gmail.com"
          aria-label="Email"
          sx={{ alignSelf: "center" }}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/joshuabigham/"
          aria-label="LinkedIn"
          sx={{ alignSelf: "center" }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Contact;
