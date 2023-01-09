import React from "react";
import { Button, Typography } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//profile component
import Profile from "../../components/profile/profile";
//data file of members
import {
  Faculty,
  programCommittee,
  membershipCommittee,
} from "../../data/profile";

import useStyles from "./style";

const OurTeam = () => {
  const classes = useStyles();
  return (
    <div className={classes.OurTeam}>
      <section className={classes.OurTeam__headers}>
        <Typography variant="h3">OUR TEAM</Typography>
        <div className={classes.OurTeam__headers__buttons}>
          <Button
            variant="contained"
            className={classes.OurTeam__headers__committee}
            href="#Faculty"
          >
            Faculty
          </Button>
          <Button
            variant="contained"
            className={classes.OurTeam__headers__committee}
            href="#program"
          >
            Event Committee
          </Button>
        </div>
      </section>


      <section className={classes.OurTeam__group}>
        <Typography variant="h4" className={classes.OurTeam__title}>
          Faculty
        </Typography>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.Ourteam__group__team}>
            {Faculty.slice(0, 5).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
          <div className={classes.Ourteam__group__team}>
            {Faculty.slice(5, 11).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
        </Carousel>
      </section>
      <section className={classes.OurTeam__group}>
        <Typography variant="h4" className={classes.OurTeam__title}>
          Event Committee 
        </Typography>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.Ourteam__group__team}>
            {programCommittee.slice(0, 6).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
        </Carousel>
      </section>
      
    

      {/* <section className={classes.OurTeam__group} id="alumni">
        <Typography variant="h4" className={classes.OurTeam__title}>
          ALUMNI MEMBERS
        </Typography>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.Ourteam__group__team}>
            {membershipCommittee.slice(0, 6).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
        </Carousel>
      </section> */}
    </div>
  );
};

export default OurTeam;
