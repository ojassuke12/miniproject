import React from "react";
import { Button, Typography } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//profile component
import Profile from "../../components/alumni/alumni";
//data file of members
import {
  Batch_20
} from "../../data/alumni";

import useStyles from "./style";




const Alumni = () => {
  const classes = useStyles();
  return (
    <div className={classes.Alumni}>
      <section className={classes.Alumni__headers}>
        <Typography variant="h3">Alumni</Typography>
        <div className={classes.Alumni__headers__buttons}>
          <Button
            variant="contained"
            className={classes.Alumni__headers__committee}
            href="#Batch_24"
          >
            Batch '20
          </Button>
        </div>
      </section>


      <section className={classes.Alumni__group}>
        <Typography variant="h4" className={classes.Alumni__title}>
          Batch '20
        </Typography>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.Alumni__group__team}>
            {Batch_20.slice(0, 6).map((person) => (
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
          <div className={classes.Alumni__group__team}>
            {Batch_20.slice(6,12).map((person) => (
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
      
    </div>
  );
};

export default Alumni;
