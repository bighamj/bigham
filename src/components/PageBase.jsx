import { PictureAsPdf } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Modal, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import resume from "../assets/joshua-bigham-resume.pdf";

const PageBase = (props) => {
  const [showPdf, setShowPdf] = React.useState(false);

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
          <Tooltip title="Email Me">
            <IconButton
              color="inherit"
              href="mailto:jbigham0517@gmail.com"
              aria-label="Email"
              sx={{ alignSelf: "center" }}
            >
              <EmailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="View LinkedIn">
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/joshuabigham/"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Download Resume">
            <IconButton
              color="inherit"
              aria-label="Resume"
              sx={{ alignSelf: "center" }}
              onClick={() => {
                setShowPdf(true);
              }}
            >
              <PictureAsPdf />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Box>{props.children}</Box>
      <Box>
        {
          // Handle PDF display as a modal
          showPdf && (
            <Modal
              open={showPdf}
              onClose={() => setShowPdf(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80%",
                  height: "80%",
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <object
                  width="100%"
                  height="100%"
                  data={resume}
                  type="application/pdf"
                >
                  <p>
                    Your browser does not support PDFs. Download the PDF to view
                    it:
                  </p>
                  <Button
                    variant="contained"
                    color="primary"
                    href={resume}
                    download
                  >
                    Download Here
                  </Button>
                </object>
              </Box>
            </Modal>
          )
        }
      </Box>
    </Box>
  );
};

export default PageBase;
