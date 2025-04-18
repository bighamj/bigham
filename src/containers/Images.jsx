import { useMediaQuery, useTheme } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import advancedLayout from "../assets/advanced-layout.webp";
import autodesk from "../assets/autodesk-project.webp";
import concreteAnalysis from "../assets/concrete-analysis.webp";
import concrete from "../assets/concrete.webp";
import hydrodam from "../assets/hydrodam.webp";
import mep from "../assets/mep.webp";
import prefabricatedConstruction from "../assets/prefabricated-construction.webp";
import telecom from "../assets/telecom.webp";
import windTurbine from "../assets/wind-turbine.webp";

export default function Images() {
  const itemData = [
    {
      img: autodesk,
      title: "Digital Design Layout Research",
    },
    {
      img: telecom,
      title: "Telecom Collection",
    },
    {
      img: hydrodam,
      title: "Hydro-dam Alignment",
    },
    {
      img: concrete,
      title: "Concrete Analysis",
    },
    {
      img: prefabricatedConstruction,
      title: "Prefabricated Construction",
    },
    {
      img: concreteAnalysis,
      title: "Floor Flatness Verificaiton",
    },
    {
      img: advancedLayout,
      title: "Advanced 3D Layout",
    },
    {
      img: mep,
      title: "Mechanical Electrical Plumbing (MEP) Coordination",
    },
    {
      img: windTurbine,
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
              src={item.img}
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
