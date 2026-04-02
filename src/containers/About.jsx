import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { Fade } from "react-swift-reveal";
import capture from "../assets/360Capture.webp";
import airflow from "../assets/airflow.png";
import buildit from "../assets/buildit.jpg";
import sphere from "../assets/sphere.webp";
import testkube from "../assets/testkube.png";
import usf from "../assets/usf.png";

const About = () => {
  const experience = [
    {
      title: "Senior Product Manager",
      company: "Lowe's Companies, Inc.",
      date: "May 2024 - Present",
      description: [
        "Define and execute roadmap for internal platform products enabling ETL automation, clickstream analytics, and QA test automation",
        "Drove ~$4M in annual savings by replacing third-party tools with custom internal solutions",
        "Mentoring 2 direct PMs and engineers; lead workshops on product tooling for 50+ junior PMs",
        "Evangelized platform adoption from 1 store to 800+ stores in under 3 months",
      ],
      impact: "$4M+ saved annually",
    },
    {
      title: "Product Manager / Lead Developer",
      company: "Virtual Technology Simplified (Acquired by Ceinsys Geospatial)",
      date: "Feb 2022 - May 2024",
      description: [
        "Built and scaled a 3D capture platform (React, Node.js, AWS) from 0 to 1, supporting thousands of job sites",
        "Owned end-to-end product development: discovery, design, delivery, and rollout",
        "Reduced on-site time by 80% via field-data automation",
        "Collaborated with engineering, sales, and ops to ensure adoption and ROI realization",
      ],
      impact: "80% efficiency gain | Acquisition driver",
    },
    {
      title: "Product Owner / Product Manager",
      company: "FARO Technologies",
      date: "June 2018 - Feb 2022",
      description: [
        "Launched cloud collaboration and 3D inspection tools for construction and manufacturing use cases",
        "Delivered 120% QoQ revenue growth by prioritizing high-value workflows",
        "Partnered with sales and customer success to improve onboarding and retention",
        "Inventor on US Patent 11,988,889 B2 for laser projection systems",
      ],
      impact: "120% QoQ growth | 1 patent",
    },
    {
      title: "Senior Field Application Engineer",
      company: "FARO Technologies",
      date: "Dec 2016 - Jun 2018",
      description: [
        "Generated technical training program for AEC customers, creating new revenue stream",
        "Developed product marketing plans and updated technical documentation",
        "Helped customers improve results by recommending cost-saving, efficiency-focused changes",
      ],
      impact: "New revenue stream",
    },
    {
      title: "Field Application Engineer",
      company: "FARO Technologies",
      date: "Jun 2015 - Dec 2016",
      description: [
        "Presented at industry conferences to showcase products and build brand awareness",
        "Delivered technical presentations tailored to audience expertise levels",
        "Spearheaded resolution of critical field issues, maintaining high customer satisfaction",
      ],
      impact: "High customer satisfaction",
    },
    {
      title: "Engineering Intern",
      company: "City of Bradenton - Public Works",
      date: "Mar 2012 - May 2015",
      description: [
        "Reviewed infrastructure and commercial construction: utility testing, shop drawings, specifications",
        "Created 10-year capital improvements program for wastewater rehabilitation",
        "Compiled and mapped City's Lift Station system into ArcGIS from 50+ years of historical plans",
      ],
      impact: "10-year capital program created",
    },
  ];

  const products = [
    {
      title: "Clickstream Analytics Platform",
      company: "Lowe's",
      description:
        "User journey tracking platform enabling teams to understand end-user behavior and optimize conversion funnels.",
      metrics: ["800+ stores onboarded", "Real-time insights", "ETL automation"],
      image: "",
      status: "Internal Platform",
    },
    {
      title: "Apache Airflow Infrastructure",
      company: "Lowe's",
      description:
        "Internally hosted and customized Airflow deployment handling business-critical ETL workflows at enterprise scale.",
      metrics: ["$4M+ annual savings", "Scalable orchestration", "Custom plugins"],
      image: airflow,
      status: "Internal Platform",
    },
    {
      title: "Tesseract Test Automation",
      company: "Lowe's",
      description:
        "Automated test execution platform for end-to-end testing, reducing manual QA effort and accelerating release cycles.",
      metrics: ["Automated scheduling", "E2E testing", "Quality gates"],
      image: testkube,
      status: "Internal Platform",
    },
    {
      title: "360Capture",
      company: "VTS (Acquired by Ceinsys)",
      description:
        "Leverage your team's knowledge to provide real-time data on asset condition via 360 degree data collection and AI-powered analysis.",
      metrics: ["80% time reduction", "3D visualization", "AWS-powered"],
      image: capture,
      link: "https://www.vtscapture.com/",
      status: "Acquired",
    },
    {
      title: "FARO Sphere",
      company: "FARO Technologies",
      description:
        "Cloud-based digital reality platform providing centralized, collaborative experience across reality capture and 3D modeling applications.",
      metrics: ["120% QoQ growth", "Cloud collaboration", "3D modeling"],
      image: sphere,
      link: "https://www.faro.com/en/LP/FARO-Sphere",
      status: "Live Product",
    },
    {
      title: "BuildIT Construction",
      company: "FARO Technologies",
      description:
        "Automated inspection and layout software for 3D construction data, enabling continuous construction verification.",
      metrics: ["Automated workflows", "Layout optimization", "Quality control"],
      image: buildit,
      link: "https://www.faro.com/en/Products/Software/BuildIT-Construction",
      status: "Live Product",
    },
  ];

  const skillCategories = [
    {
      category: "Strategy & Leadership",
      skills: [
        "Product Roadmapping",
        "Platform Strategy",
        "0 to 1 Product Launch",
        "Team Leadership",
        "Mentoring",
        "Stakeholder Management",
        "Cross-functional Collaboration",
      ],
    },
    {
      category: "Technical Product",
      skills: [
        "Developer Tools",
        "Analytics Infrastructure",
        "ETL/Data Pipelines",
        "Cloud Architecture (AWS)",
        "API Design",
        "QA Automation",
        "Clickstream Analytics",
      ],
    },
    {
      category: "Methodologies",
      skills: [
        "Agile / Scrum",
        "SAFe",
        "User-Centered Design",
        "Design Thinking",
        "User Story Mapping",
        "Backlog Prioritization",
        "Metrics & KPIs",
      ],
    },
    {
      category: "Tools",
      skills: [
        "Jira / Confluence",
        "Figma",
        "Miro",
        "Git/GitHub/GitLab",
        "SQL / NoSQL",
        "Docker / Kubernetes",
        "Segment / Amplitude",
      ],
    },
  ];

  const certifications = [
    "Certified Scrum Product Owner (CSPO)",
    "Google Data Analytics Certificate",
    "Google Project Management Certificate",
    "AWS Fundamentals Specialization",
    "Google Agile Project Management",
    "Bentley Accredited Developer: iTwin Platform",
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
      spacing={6}
    >
      {/* Products Section */}
      <Fade>
        <Box sx={{ width: "100%", maxWidth: 1200, textAlign: "center" }}>
          <Typography variant="h3" sx={{ mb: 1, fontWeight: 600 }}>
            Products I've Built
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            Internal platforms and customer-facing products driving measurable impact
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    boxShadow: 2,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  {product.image ? (
                    <CardMedia
                      component="img"
                      sx={{
                        width: "100%",
                        objectFit: "contain",
                        height: 140,
                        padding: "16px",
                        backgroundColor: "#f5f5f5",
                      }}
                      image={product.image}
                      alt={product.title}
                    />
                  ) : (
                    <Box
                      sx={{
                        height: 140,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#f5f5f5",
                        padding: "16px",
                      }}
                    >
                      <Typography variant="h6" color="text.secondary">
                        {product.company}
                      </Typography>
                    </Box>
                  )}

                  <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                      <Typography variant="h6" fontWeight={600}>
                        {product.title}
                      </Typography>
                    </Stack>

                    <Chip
                      label={product.status}
                      size="small"
                      color={product.status === "Acquired" ? "success" : "primary"}
                      variant="outlined"
                      sx={{ mb: 1.5 }}
                    />

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {product.description}
                    </Typography>

                    <Stack spacing={0.5}>
                      {product.metrics.map((metric, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                            fontWeight: 500,
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "primary.main",
                            }}
                          />
                          {metric}
                        </Typography>
                      ))}
                    </Stack>
                  </CardContent>

                  {product.link && (
                    <CardActions sx={{ pt: 0 }}>
                      <Button
                        size="small"
                        href={product.link}
                        target="_blank"
                        endIcon={<OpenInNewIcon />}
                      >
                        View Product
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      <Divider sx={{ width: "80%", my: 2 }} />

      {/* Experience Section */}
      <Fade>
        <Box sx={{ width: "100%", maxWidth: 900 }}>
          <Typography variant="h3" sx={{ mb: 3, textAlign: "center", fontWeight: 600 }}>
            Experience
          </Typography>

          <Stepper orientation="vertical" nonLinear>
            {experience.map((job, index) => (
              <Step active key={index}>
                <StepLabel
                  sx={{
                    "& .MuiStepLabel-label": {
                      fontSize: "18px",
                      fontWeight: 600,
                    },
                  }}
                >
                  {job.title}
                </StepLabel>
                <StepContent>
                  <Stack spacing={0.5} sx={{ mb: 1 }}>
                    <Typography variant="subtitle1" fontWeight={500} color="primary">
                      {job.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {job.date}
                    </Typography>
                    <Chip
                      label={job.impact}
                      size="small"
                      color="success"
                      variant="outlined"
                      sx={{ width: "fit-content", mt: 0.5 }}
                    />
                  </Stack>

                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    {job.description.map((desc, idx) => (
                      <Typography component="li" variant="body2" key={idx} sx={{ mb: 0.5 }}>
                        {desc}
                      </Typography>
                    ))}
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Fade>

      <Divider sx={{ width: "80%", my: 2 }} />

      {/* Education */}
      <Fade>
        <Box sx={{ width: "100%", maxWidth: 600 }}>
          <Typography variant="h3" sx={{ mb: 3, textAlign: "center", fontWeight: 600 }}>
            Education
          </Typography>

          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 3,
              borderRadius: 3,
              boxShadow: 2,
            }}
          >
            <Box sx={{ flexShrink: 0, marginRight: 3 }}>
              <img
                src={usf}
                alt="USF Logo"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "12px",
                }}
              />
            </Box>
            <CardContent sx={{ padding: 0 }}>
              <Typography variant="h6" fontWeight={600}>
                University of South Florida
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                B.S. in Mechanical Engineering
              </Typography>
              <Typography variant="body2" color="text.secondary">
                2009 - 2015
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Fade>

      <Divider sx={{ width: "80%", my: 2 }} />

      {/* Skills */}
      <Fade>
        <Box sx={{ width: "100%", maxWidth: 1200 }}>
          <Typography variant="h3" sx={{ mb: 3, textAlign: "center", fontWeight: 600 }}>
            Skills & Expertise
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {skillCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    padding: 2,
                    borderRadius: 3,
                    boxShadow: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                    {category.category}
                  </Typography>
                  <Stack spacing={1}>
                    {category.skills.map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        color="primary"
                        variant="outlined"
                        size="small"
                        sx={{ width: "fit-content" }}
                      />
                    ))}
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      <Divider sx={{ width: "80%", my: 2 }} />

      {/* Certifications */}
      <Fade>
        <Box sx={{ width: "100%", maxWidth: 800, textAlign: "center" }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
            Certifications
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={1}
            useFlexGap
          >
            {certifications.map((cert, idx) => (
              <Chip
                key={idx}
                label={cert}
        
                variant="outlined"
                sx={{ px: 1 }}
              />
            ))}
          </Stack>
        </Box>
      </Fade>

      <Divider sx={{ width: "80%", my: 2 }} />

      {/* Patent */}
      <Fade>
        <Box sx={{ width: "100%", maxWidth: 800 }}>
          <Typography variant="h3" sx={{ mb: 2, textAlign: "center", fontWeight: 600 }}>
            Patent
          </Typography>

          <Card sx={{ padding: 3, borderRadius: 3, boxShadow: 2 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              "Laser Projection System"
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              US-11988889-B2, US20210149144-A1
            </Typography>
            <Typography variant="body2">
              A light projector and method of aligning the light projector. The system steers an
              outgoing beam of light onto an object, passing light returned from the object through a
              focusing lens onto an optical detector. The light projector generates a light pattern
              or template by rapidly moving the outgoing beam of light along a path on a surface,
              aligning with an electronic model to place the pattern in desired locations.
            </Typography>
          </Card>
        </Box>
      </Fade>

      <Divider sx={{ width: "80%", my: 2 }} />

      {/* Contact Section */}
      <Fade>
        <Box
          sx={{
            width: "100%",
            maxWidth: 800,
            textAlign: "center",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            borderRadius: 4,
            padding: { xs: 3, md: 5 },
            mb: 4,
          }}
        >
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
            Let's Connect
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
            Interested in discussing product strategy, platform development, or potential
            opportunities? I'd love to hear from you.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="inherit"
              size="large"
              href="https://www.linkedin.com/in/joshuabigham/"
              target="_blank"
              startIcon={<LinkedInIcon />}
              sx={{
                backgroundColor: "white",
                color: "primary.main",
                "&:hover": { backgroundColor: "#f0f0f0" },
                minWidth: "200px",
              }}
            >
              Connect on LinkedIn
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href="mailto:jbigham0517@gmail.com"
              startIcon={<EmailIcon />}
              sx={{
                borderColor: "white",
                color: "white",
                "&:hover": { borderColor: "#f0f0f0", backgroundColor: "rgba(255,255,255,0.1)" },
                minWidth: "200px",
              }}
            >
              Send Email
            </Button>
          </Stack>
        </Box>
      </Fade>
    </Stack>
  );
};

export default About;
