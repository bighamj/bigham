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
        "Manage several products, including critical applications which Lowe's depends upon to run it's retail business. Products support 500k task runs for critical operations and up to 21k transactions per second (TPS) for click stream analytics.",
        "Leading multiple products and critical initiatives within the company, including clickstream analytics, data extract, transfer, load (ETL) automation and MLOPS, and session replay for user experience management and analysis.",
        "Mentor junior team members to help them advance in their careers and improve the team overall.",
      ],
    },
    {
      title: "Product Manager / Lead Developer",
      company: "Virtual Technology Simplified",
      date: `Feb 2022 - May 2024 (2 Years 4 Months)`,
      description: [
        "Lead team from concept to launch of product, managing and delivering all aspects of product development including roadmapping, developing, and deploying.",
        "Prioritized roadmap in order to achieve product goals and metrics from concept to implementation.",
        "Managed product demonstrations and support for performance evaluation.",
        "Coordinated and lead internal and external development teams.",
        "Mentored junior team members, fostering growth in their technical development knowledge and project management skills.",
        "Integrated new technologies into existing systems, increasing capabilities and improving overall performance.",
        "Tested and deployed scalable and highly available software products.",
      ],
    },
    {
      title: "Product Owner / Product Manager",
      company: "FARO Technologies",
      date: `June 2018 - Feb 2022 (3 Years 9 Months)`,
      description: [
        "Defined product requirements, road maps, and workflows for introduction to development teams, writing product requirements and usage scenarios.",
        "Developed and maintained a prioritized list of enhancements/features based on revenue impact/cost savings.",
        "Generated, coordinated internal teams, and ensured successful execution of release/launch plans, communicating needs and project status to product execution team.",
        "Worked with a worldwide software development team to ensure that the product was delivered on time and with the features and quality expected by the customer.",
        `Represented the "voice of the customer" to the R&D, customer service, supply chain, production, and total quality teams from ideation through launch and reach out to end users and potential customers on a regular schedule.`,
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
            <strong>Patent</strong> - "Laser Projection System" 17/068217 ·
            Filed May 20, 202117/068217 · A light projector and method of
            aligning the light projector is provided. A light projector steers
            an outgoing beam of light onto an object, passing light returned
            from the object through a focusing lens onto an optical detector.
            The light projector may generate a light pattern or template by
            rapidly moving the outgoing beam of light along a path on a surface.
            To place the light pattern/template in a desired location, the light
            projector may be aligned with an electronic model.
          </li>
        </ul>
      </Box>
    </Stack>
  );
};

export default About;
