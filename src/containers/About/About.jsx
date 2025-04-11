import { Button, Card, CardActions, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React from "react";
import { Fade } from "react-swift-reveal";

const About = () => {
  const experience = [
    {
      title: "Senior Product Manager",
      company: "Lowe's Companies, Inc.",
      date: `May 2024 - Present`,
      description: [
        "Delivered internal platform products powering clickstream analytics and ETL automation, enabling 15k+ transactions/sec and orchestrating 500k+ monthly Airflow jobs across mission-critical retail systems.",
        "Led architecture and adoption of in-house analytics platform, reducing third-party tool costs and improving data latency — generating ~$4M in annual savings.",
        "Mentored PMs and engineers on platform thinking and user-centered design, aligning execution with long-term strategy.",
      ],
    },
    {
      title: "Product Manager / Lead Developer",
      company: "Virtual Technology Simplified (Acquired by Ceinsys Geospatial)",
      date: `Feb 2022 - May 2024 (2 Years 4 Months)`,
      description: [
        "Built and launched a scalable 3D capture platform from the ground up (React, Node.js, AWS). Automated field-data processing, reducing time on site by 80% and powering daily ops across thousands of job sites.",
        "Product strategy and execution contributed to Ceinsys’ acquisition of VTS — driven by rapid growth in field ops adoption and differentiated 3D capture capabilities.",
      ],
    },
    {
      title: "Product Owner / Product Manager",
      company: "FARO Technologies",
      date: `June 2018 - Feb 2022 (3 Years 9 Months)`,
      description: [
        "Drove development and launch of cloud collaboration (Sphere) and 3D data inspection (BuildIT) tools. Achieved 120% QoQ revenue growth by aligning feature delivery with high-value workflows for construction and manufacturing customers.",
        "Delivered executive-level initiatives and guided company strategy through customer interactions and technical demonstrations.",
      ],
    },
    {
      title: "Senior Field Application Engineer",
      company: "FARO Technologies",
      date: "Dec 2016 - Jun 2018 (1 Year 7 Months)",
      description: [
        "Generated a technical training program for Architecture, Engineering, and Construction (AEC) customers to improve time to implementation for FARO products, generating a new revenue stream for the company.",
        "Utilized creative problem-solving skills to overcome technical challenges in the sales process and contributed to product innovation by identifying areas for improvement based on customer feedback and field experience.",
        "Developed and implemented product marketing plans to reach target customers.",
        "Updated technical documentation, product specifications, and technical training materials.",
        "Helped customers improve results by recommending changes focused on lowering costs, increasing production, or adding new functionality.",
      ],
    },
    {
      title: "Field Application Engineer",
      company: "FARO Technologies",
      date: "Jun 2015 - Dec 2016 (1 Year 7 Months)",
      description: [
        "Presented at industry conferences to showcase company products while building brand awareness within the marketplace.",
        "Delivered technical presentations matching audience level of expertise to explain products and services to customers.",
        "Helped team implement successful sales strategies for complex engineering projects.",
        "Spearheaded the resolution of critical field issues, minimizing system disruptions and maintaining high levels of customer satisfaction.",
        "Streamlined the debugging process by developing efficient troubleshooting techniques for field issues.",
      ],
    },
    {
      title: "Engineering Intern",
      company: "City of Bradenton  - Public Works Department",
      date: "Mar 2012 - May 2015 (3 Years 3 Months)",
      description: [
        "Reviewed and inspected multiple aspects of infrastructure and commercial construction including utility testing, shop drawings, specification creation and permitting.",
        "Instrumental in creating a ten year capital improvements program for wastewater rehabilitation and facilities.",
        "Compiled and mapped the City's Lift Station system into ArcGIS using historical plans from 50+ years and field identification and inspection.",
        "Participated in data collection and analysis with an integral water supply research project (Aquifer Storage and Recovery).",
      ],
    },
  ];

  const skills = [
    "Product Management",
    "Product Development",
    "Agile",
    "SAFe",
    "Mentoring",
    "Distributed Teams",
    "CAD",
    "GIS",
    "Reality Capture",
    "Product Marketing",
    "Javascript (React, React Native, Node, Express)",
    "MongoDB",
    "AWS (S3, EC2, Rekognition, Lambda)",
    "Docker",
    "Swift",
    "ARKit (SceneKit, RealityKit)",
  ];

  const products = [
    {
      title: "User Journey Tracking",
      description:
        "Aiding teams to understand how end users interact with their applicaitons.",
    },
    {
      title: "Airflow",
      description:
        "Internally hosted and customized Airflow to handle business critical applications.",
    },
    {
      title: "Tesseract",
      description:
        "Automated and scheduled test execution for end to end testing.",
    },
    {
      title: "360Capture",
      description:
        "Leverage the knowledge of your team to provide real-time data on the condition of your assets and equipment via data collection.",
      link: "https://www.vtscapture.com/",
      linkText: "360Capture",
    },
    {
      title: "FARO Sphere",
      description:
        "A cloud-based digital reality platform that provides its users a centralized, collaborative experience across the company’s reality capture and 3D modeling applications.",
      link: "https://www.faro.com/en/LP/FARO-Sphere",
      linkText: "Faro Sphere",
    },
    {
      title: "BuildIT Construction",
      description:
        "Automate inspection and layout of 3D construction data for continuous construction verification.",
      link: "https://www.faro.com/en/Products/Software/BuildIT-Construction",
      linkText: "BuildIT Construction",
    },
  ];

  return (
    <Stack
      sx={{
        height: "100%",
        marginTop: "60px",
        padding: "20px",
      }}
      id="about"
      justifyContent={"center"}
      alignItems={"center"}
      spacing={4}
    >
      <Fade>
        <Typography variant="h3">Work Experience</Typography>
      </Fade>
      <Fade>
        <Typography variant="h4">Products I've Worked On</Typography>
        <Stack
          spacing={{ xs: 2, lg: 4 }}
          direction={{ sx: "column", md: "row" }}
        >
          {products.map((product, index) => (
            <Card key={index} sx={{ width: 200 }}>
              <CardContent>
                <Typography variant="h6">{product.title}</Typography>
                <Typography>{product.description}</Typography>
              </CardContent>
              {product.link && (
                <CardActions>
                  <Button href={product.link}>{product.linkText}</Button>
                </CardActions>
              )}
            </Card>
          ))}
        </Stack>
      </Fade>

      <Typography variant="h4">Resume</Typography>
      <Stepper orientation="vertical">
        {experience.map((job, index) => {
          return (
            <Step active key={index}>
              <Fade>
                <StepLabel
                  sx={{
                    "& .MuiStepLabel-label": {
                      fontSize: "20px",
                    },
                  }}
                >
                  <strong>{job.title}</strong>
                </StepLabel>
                <StepContent>
                  <h3>{job.company}</h3>
                  <h4>{job.date}</h4>
                  <ul>
                    {job.description.map((desc, index) => {
                      return <li key={index}>{desc}</li>;
                    })}
                  </ul>
                </StepContent>
              </Fade>
            </Step>
          );
        })}
      </Stepper>
      <Fade>
        <Typography variant="h4">Education & Skills</Typography>
        <Stack spacing={3} direction={{ xs: "column", sm: "row" }}>
          <Box>
            <h3>University of South Florida</h3>
            <h4>Bachelors of Science in Mechanical Engineering</h4>
          </Box>
          <Box>
            <ul>
              {skills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </Box>
        </Stack>
      </Fade>
      <Fade>
        <Typography variant="h4">Patent</Typography>
        <Box>
          <ul>
            <li>
              <strong>"Laser Projection System"</strong> - US-11988889-B2,
              US20210149144-A1 · A light projector and method of aligning the
              light projector is provided. A light projector steers an outgoing
              beam of light onto an object, passing light returned from the
              object through a focusing lens onto an optical detector. The light
              projector may generate a light pattern or template by rapidly
              moving the outgoing beam of light along a path on a surface. To
              place the light pattern/template in a desired location, the light
              projector may be aligned with an electronic model.
            </li>
          </ul>
        </Box>
      </Fade>
    </Stack>
  );
};

export default About;
