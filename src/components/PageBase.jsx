import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

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
          {/* <Button
            color="inherit"
            variant="text"
            onClick={() => {
              handleScroll("about");
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            variant="text"
            onClick={() => {
              handleScroll("contact");
            }}
          >
            Contact
          </Button> */}
        </Toolbar>
      </AppBar>
      <Box>{props.children}</Box>
    </Box>
  );
};

export default PageBase;
