import { IconButton, useMediaQuery, useTheme } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import * as React from "react";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";

export default function Images() {
  const itemData = [
    {
      img: "https://bigham-joshua-site.s3.amazonaws.com/autodesk-project.jpg",
      title: "Digital Design Layout Research",
    },
    {
      img: "https://bigham-joshua-site.s3.amazonaws.com/telecom.jpeg",
      title: "Telecom Collection",
    },
    {
      img: "https://bigham-joshua-site.s3.amazonaws.com/hydrodam.jpg",
      title: "Hydro-dam Alignment",
    },
    {
      img: "https://bigham-joshua-site.s3.amazonaws.com/concrete.JPG",
      title: "Concrete Analysis",
    },
    {
      img: "https://bigham-joshua-site.s3.amazonaws.com/prefabricated-construction.jpg",
      title: "Prefabricated Construction",
    },
    {
      img: "https://bigham-joshua-site.s3.amazonaws.com/concrete-analysis.JPG",
      title: "Floor Flatness Verificaiton",
    },
    {
      img: "https://bigham-joshua-site.s3.amazonaws.com/advanced-layout.JPG",
      title: "Advanced 3D Layout",
    },
    {
      img: "https://bigham-joshua-site.s3.amazonaws.com/mep.JPG",
      title: "Mechanical Electrical Plumbing (MEP) Coordination",
    },
    {
      img: "https://bigham-joshua-site.s3.amazonaws.com/windturbineinspection.JPG",
      title: "Wind Turbine Inspection",
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Typography variant="h3" align="center">
        Projects
      </Typography>
      <ImageList
        sx={{ height: "auto", overflow: "hidden" }}
        variant="woven"
        cols={isMobile ? 1 : 3}
        gap={10}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
              }}
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
