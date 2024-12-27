import { useMediaQuery, useTheme } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function Images() {
  const itemData = [
    {
      img: "https://bigham-joshua-site.s3.us-east-1.amazonaws.com/autodesk-project.webp",
      title: "Digital Design Layout Research",
    },
    {
      img: "https://bigham-joshua-site.s3.us-east-1.amazonaws.com/telecom.webp",
      title: "Telecom Collection",
    },
    {
      img: "https://bigham-joshua-site.s3.us-east-1.amazonaws.com/hydrodam.webp",
      title: "Hydro-dam Alignment",
    },
    {
      img: "https://bigham-joshua-site.s3.us-east-1.amazonaws.com/concrete.webp",
      title: "Concrete Analysis",
    },
    {
      img: "https://bigham-joshua-site.s3.us-east-1.amazonaws.com/prefabricated-construction.webp",
      title: "Prefabricated Construction",
    },
    {
      img: "https://bigham-joshua-site.s3.us-east-1.amazonaws.com/concrete-analysis.webp",
      title: "Floor Flatness Verificaiton",
    },
    {
      img: "https://bigham-joshua-site.s3.us-east-1.amazonaws.com/advanced-layout.webp",
      title: "Advanced 3D Layout",
    },
    {
      img: "https://bigham-joshua-site.s3.us-east-1.amazonaws.com/mep.webp",
      title: "Mechanical Electrical Plumbing (MEP) Coordination",
    },
    {
      img: "https://bigham-joshua-site.s3.us-east-1.amazonaws.com/windturbineinspection.webp",
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
