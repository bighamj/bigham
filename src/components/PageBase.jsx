import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";
import { PictureAsPdf } from "@mui/icons-material";

const PageBase = (props) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - window.innerHeight / 2;
      window.scrollTo({
        top: middle,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
            onClick={() => {
              handleScroll("landing");
            }}
          >
            Joshua Bigham
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => {
              handleScroll("about");
            }}
          />
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
          <IconButton
            color="inherit"
            href="https://rxresu.me/bighamj/joshua-bigham"
            aria-label="Resume"
            sx={{ alignSelf: "center" }}
          >
            <PictureAsPdf />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box>{props.children}</Box>
    </Box>
  );
};

export default PageBase;
