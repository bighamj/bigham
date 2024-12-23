import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import React from "react";

const About = () => {
  const experience = [
    {
      title: "Senior Product Manager",
      company: "Lowe's Companies, Inc.",
      date: `May 2024 - Present`,
      description: [
        "Contributing and building products used at Lowe's via the Engineering Platforms and Architecture team.",
        "Lead high-impact products such as click stream analytics, ETL automation, and MLOps, driving revenue through 500k monthly tasks and 15k transactions per second.",
        "Oversee product scaling efforts, ensuring successful launch and user adoption. ",
        "Mentor junior team members, fostering a product-focused and user-centered mindset.",
      ],
    },
    {
      title: "Product Manager / Lead Developer",
      company: "Virtual Technology Simplified (Acquired by Ceinsys Geospatial)",
      date: `Feb 2022 - May 2024 (2 Years 4 Months)`,
      description: [
        "Led product development from concept to launch, scaling 3D data capture for thousands of job sites daily.",
        "Drove product improvements, increasing user site efficiency by 80%.",
        "Managed a cross-functional team, contributing to a successful company acquisition",
      ],
    },
    {
      title: "Product Owner / Product Manager",
      company: "FARO Technologies",
      date: `June 2018 - Feb 2022 (3 Years 9 Months)`,
      description: [
        "Spearheaded multiple high-growth products, resulting in 120% quarter-over-quarter revenue increase.",
        "Delivered executive-level initiatives and guided company strategy through customer interactions and technical demonstrations",
        "Supported sales teams, closing deals via product evaluations and technical support.",
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
    "Product Marketing",
    "Javascript",
    "React.js",
    "React Native",
    "Node.js",
    "Express.js",
    "MongoDB",
    "AWS",
    "Docker",
    "AWS Lambda",
    "Swift",
    "ARKit (SceneKit, RealityKit)",
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
      <Typography variant="h2">Work Experience</Typography>
      <Stepper orientation="vertical">
        {experience.map((job, index) => {
          return (
            <Step active key={index}>
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
            </Step>
          );
        })}
      </Stepper>
      <Typography variant="h4">Education</Typography>
      <Box>
        <h3>University of South Florida</h3>
        <h4>Bachelors of Science in Mechanical Engineering</h4>
      </Box>
      <Typography variant="h4">Skills</Typography>
      <Box>
        <ul>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </Box>
      <Typography variant="h4">Accomplishments</Typography>
      <Box>
        <ul>
          <li>
            <strong>Patent</strong> - "Laser Projection System" US-11988889-B2,
            US20210149144-A1 · A light projector and method of aligning the
            light projector is provided. A light projector steers an outgoing
            beam of light onto an object, passing light returned from the object
            through a focusing lens onto an optical detector. The light
            projector may generate a light pattern or template by rapidly moving
            the outgoing beam of light along a path on a surface. To place the
            light pattern/template in a desired location, the light projector
            may be aligned with an electronic model.
          </li>
        </ul>
      </Box>
    </Stack>
  );
};

export default About;
