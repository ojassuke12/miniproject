import React from "react";
import ListIcon from "@material-ui/icons/List";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Link,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import useStyles from "./style";

import network from "../..//images/joinUs/network.png";
import thinking from "../../images/joinUs/thinking.png";
import ieeeorg from "../../images/joinUs/ieeeorg.png";
import ieeetv from "../../images/joinUs/ieeetv.png";
import magazine from "../../images/joinUs/magazine.png";
import scholarship from "../../images/joinUs/scholarship.png";
import softskills from "../../images/joinUs/softskills.png";
import travelgrants from "../../images/joinUs/travelgrants.png";
import awards from "../../images/joinUs/awards.png";

const JoinUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.JoinUs}>
      <section className={classes.JoinUs__form}>
        <Typography variant="h4">BECOME AN AIML Member</Typography>
        <Typography variant="h5" className={classes.JoinUs__form__text}>
          Join a community of over 100+ technology and engineering
          professionals united by a common desire to continuously learn,
          interact, collaborate, and innovate
        </Typography>
        <a href="https://forms.gle/CGzNY15s37wPUSgZ6" style={{ textDecoration: 'none' }}
        >
          <Button
            startIcon={<ListIcon />}
            size="large"
            className={classes.JoinUs__form__button}
          >
            Google Form Submission
          </Button>
        </a>
      </section>
      <section className={classes.JoinUs__benefits}>
        <div className={classes.JoinUs__benefits__benefit}>
          <img
            src={softskills}
            alt="skills"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">SOFT SKILLS</Typography>
          <Typography variant="body1">
            Build your professional skills including leadership, teamwork,
            communication, and prioritization
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <img
            src={network}
            alt="network"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">NETWORK</Typography>
          <Typography variant="body1">
            Make friends and network with an unparalled, global community of professionals
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <img
            src={awards}
            alt="awards"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">AWARDS</Typography>
          <Typography variant="body1">
            Submit projects or papers for consideration and have the opportunity to win awards and funding while gaining peer recognition for your efforts
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <img
            src={travelgrants}
            alt="travel"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">TRAVEL GRANTS</Typography>
          <Typography variant="body1">
            These grants were created to help you focus on your goals of advancing your potential in areas not local to you
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          {/* Empy Element */}
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
        <img
            src={scholarship}
            alt="scholarship"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">SCHOLARSHIPS</Typography>
          <Typography variant="body1">
            Funds to help students pay for an undergraduate or post-graduate degree
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <img
            src={magazine}
            alt="magazine"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">MAGAZINES</Typography>
          <Typography variant="body1">
            Collection of premium magazines, journals and access to some latest research papers
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          {/* Empty Event */}
        </div>
      </section>
      <section className={classes.JoinUs__globalBenefits}>
        <div className={classes.JoinUs__globalBenefits__header}>
          <img src={thinking} alt="thinking" />
          <Typography
            variant="h4"
            className={classes.JoinUs__globalBenefits__header__text}
          >
            STILL NOT SATISFIED?
          </Typography>
        </div>
        <Typography variant="h5">
          Check out the AIML Benefits Finder to know more...
        </Typography>
      </section>
      <section className={classes.JoinUs__testemonials}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.JoinUs__testemonials__carousel}>
            <Typography variant="h4">Testemonials</Typography>
            <div className={classes.JoinUs__testemonials__carousel__content}>
              <div
                className={
                  classes.JoinUs__testemonials__carousel__content__person
                }
              >
                <Avatar
                  alt="Profil Photo"
                  src="https://i.imgur.com/mq9Fx7x.jpg"
                  className={
                    classes.JoinUs__testemonials__carousel__content__person__image
                  }
                />
                <Typography variant="subtitle1">Gaurav Kedia</Typography>
                <Typography variant="overline">Website Design Head</Typography>
              </div>
              <Typography variant="body1">
                "Our AIML Student Branch provides networking opportunities among
                various entrepreneurs and students so that the members achieve
                problem-solving and leadership skills, this will help students
                to come up with new ideas and to determine what they are willing
                to achieve. The Student Branch teaches the students about the
                professional environment of the corporate world and also
                provides technical and fun activities to keep the students
                active and engaged throughout their campus life."
              </Typography>
            </div>
          </div>
          <div className={classes.JoinUs__testemonials__carousel}>
            <Typography variant="h4">Testemonials</Typography>
            <div className={classes.JoinUs__testemonials__carousel__content}>
              <div
                className={
                  classes.JoinUs__testemonials__carousel__content__person
                }
              >
                <Avatar
                  alt="Profile Photo"
                  src="#"
                  className={
                    classes.JoinUs__testemonials__carousel__content__person__image
                  }
                />
                <Typography variant="subtitle1">Ojas Suke</Typography>
                <Typography variant="overline">Backend Designer Lead</Typography>
              </div>
              <Typography variant="body1">
                "AIML has given me the chance to improve my management skills.
                Being exposed to multitudinous scenarios, I learned valuable
                wisdom about effectively managing my time, developing new work
                processes, voicing opinions while being open to feedback and
                above all, networking with a relevant group of professionals.
                AIML members are uniquely positioned to provide the innovative
                solutions needed in the technical industries going forward. In
                addition to the human networks that can be tapped for advice or
                assistance, there are many web resources with special access
                just for members."
              </Typography>
            </div>
          </div>
          <div className={classes.JoinUs__testemonials__carousel}>
            <Typography variant="h4">Testemonials</Typography>
            <div className={classes.JoinUs__testemonials__carousel__content}>
              <div
                className={
                  classes.JoinUs__testemonials__carousel__content__person
                }
              >
                <Avatar
                  alt="Profile Photo"
                  src="#"
                  className={
                    classes.JoinUs__testemonials__carousel__content__person__image
                  }
                />
                <Typography variant="subtitle1">John</Typography>
                <Typography variant="overline">Secretary</Typography>
              </div>
              <Typography variant="body1">
                "Joining AIML has provided me with professional exposure. It
                also exposed me to various new opportunities and gave me a
                chance to organize technical events, seminars, webinars and to
                network with people all over the world."
              </Typography>
            </div>
          </div>
        </Carousel>
      </section>
      <section className={classes.JoinUs__accordion}>
        <Typography className={classes.JoinUs__accordion__heading} variant="h4">
          FAQ
        </Typography>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">What is AIML</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Artificial Intelligence and Machine Learning
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Is AIML only for CS and IT Engineering Students?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, AIML is available to all branches of engineering.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Is there any payment for AIML Membership
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>No, it is free</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
            What are the Applications of the Program?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            
The major focus of the programme is to create skilled engineers to innovate, design, think and provide intelligent solutions to problems in a variety of domains such as Education, healthcare, security, information forensics, Data virtualization, Agriculture, efficient transportation, smart cities and business applications, in various government and public sectors etc.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
            What are some top companies operating in AI&ML?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>GOOGLE,
IBM,
Intel,
Alibaba Cloud,
VMware,
Infosys,
Amazon Web Services,
Microsoft Azure,
NVidia,
Apple,
Twitter,</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
            What are some career prospects of AI&ML?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This Programme aims to bridge the demands of the industry and to produce the high-end and skill oriented AI scientists and engineers for the betterment of the society. Artificial intelligence and machine learning is identified as one of the top areas for jobs and research. The jobs in AI include Soft analysts and developers, computer scientists and computer engineers, AI Algorithm specialists, research scientists, AI & ML Engineer, Business Intelligence Developer, Machine Learning and Artificial Intelligence Scientist, AI Software Engineer etc.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">Why do students join the AIML?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Being member of AIML Community will help you boost your carrer, you will be getting notification of any event conducted by AIML you will also get the latest information of students achivement and also you will get new notification about carrer opportunities.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  );
};

export default JoinUs;
