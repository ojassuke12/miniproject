import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";

import seminar from "../../images/aboutus/seminar.png";
import hackathon from "../../images/aboutus/hackathon.png";
import competition from "../../images/aboutus/competition.png";
import network from "../../images/aboutus/network.png";
import webinar from "../../images/aboutus/webinar.png";
import workshops from "../../images/aboutus/workshop.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./style";

function About() {
  const classes = useStyles();

  return (
    <div className={classes.About}>
      <Paper elevation={10} className={classes.About__about}>
        <img
          src="https://i.imgur.com/of53LT6.jpg"
          alt="college"
          className={classes.About__about__image}
        />
        <div className={classes.About__about__text}>
          <Typography variant="h6">
            <span className={classes.About__about__text__header}>
              AIML Student Branch of Shri Ramdeobaba College of Engineering
              and Management
            </span>{" "}
            is a student community that strives to inform, learn, entertain, and
            inspire action through the events and experiences we create. We
            promote student empowerment, develop professional skills, and foster
            technological innovations and build networks. ​ Our community
            consists of amateurs to experts, who understand the potential of
            volunteering and how priceless volunteers are!
          </Typography>
          {/* <Typography variant="h6">
            It is a student community that strives to inform, learn, entertain,
            and inspire action through the events and experiences we create. We
            promote student empowerment, develop professional skills, and foster
            technological innovations and build networks. ​ Our community
            consists of amateurs to experts, who understand the potential of
            volunteering and how priceless volunteers are!
          </Typography> */}
        </div>
      </Paper>
      <Paper elevation={12} className={classes.About__ourCommunity}>
        <Typography
          variant="h4"
          className={classes.About__ourCommunity__header}
        >
          OUR COMMUNITY
        </Typography>
        <img
          src="https://i.imgur.com/YNBzywy.jpg"
          alt="pyramid"
          loading="lazy"
          className={classes.About__ourCommunity__pyramid}
        />
        <div className={classes.About__ourCommunity__text}>
          <Typography variant="h6">
          Computer Science & Engineering with specialization in Artificial Intelligence & Machine Learning (AL & ML) is a four years undergraduate course, designed to enable students to build intelligent machines, software, or applications with a cutting-edge combination of Artificial Intelligence, Machine learning and Deep Learning technologies after equipping them with the basic fundamentals of Computer Science and Engineering.
          </Typography>
        </div>
      </Paper>
      <section className={classes.About__WhatWeDo}>
        <Typography variant="h4" className={classes.About__WhatWeDo__header}>
          WHAT WE DO
        </Typography>
        <Timeline align="left" className={classes.About__WhatWeDo__timeline}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={seminar} alt="seminars" />
                <Typography>Seminars</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={webinar} alt="webinars" loading="lazy" />
                <Typography>Webinars</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={workshops} alt="workshops" loading="lazy" />
                <Typography>Workshops</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={competition} alt="competition" loading="lazy" />
                <Typography>Competitions</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={hackathon} alt="hackathon" loading="lazy" />
                <Typography>Hackathons</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={network} alt="network" loading="lazy" />
                <Typography>Help Build Network</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
      <Paper elevation={10} className={classes.About__Work}>
        <Typography variant="h4" className={classes.About__Work__header}>
        </Typography>
        <img
          src="https://i.imgur.com/hhDe6eE.jpg"
          alt="work"
          loading="lazy"
          className={classes.About__Work__image}
        />
        <div>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Faculty</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Comprises of faculty members who hold
                officer positions and maintain the workflow.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Program Committee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Responsible for planning and execution of activities and events.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Membership Committee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Responsible for recruiting new members, maintaining their data,
                funds management and coordinating with existing members.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Social Media Committee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This committee consists of 3 teams: <br />
                1. Content Team - Responsible for generating content and
                deciding what goes up on our social media accounts and posters.{" "}
                <br />
                2. Design Team - Responsible for desiging the posters, flyers
                and social media posts. <br />
                3. Website Team - Manages Website and keep it updated
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </div>
  );
}

export default About;
