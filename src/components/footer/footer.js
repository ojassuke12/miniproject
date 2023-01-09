import { Container, Link, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import CallIcon from "@material-ui/icons/Call";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link as RouterLink } from "react-router-dom";


const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      <Container
        maxWidth={false}
        className={classes.container}
        disableGutters={true}
      >
        <div className={classes.mainContainer}>
          <div className={classes.contactus}>
            <Typography variant="subtitle2" className={classes.title}>
              CONTACT US :
            </Typography>
            <div className={classes.contactUs__item}>
              <LocationOnIcon />
              <Typography variant="body2">
              Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan,Katol Road,Nagpur - 440 013 (M.S.) (India)
              </Typography>
            </div>
            <div className={classes.contactUs__item}>
              <CallIcon />
              <Typography variant="body2">+91 9607980531/2</Typography>
              <Typography variant="body2">(91)-(712) - 2580011</Typography>
            </div>
            {/* <div className={classes.contactUs__item}>
              <MailIcon />
              <Typography variant="body2">work@gmail.com</Typography>
            </div> */}
          </div>
          <div className={classes.reachUs}>
            <Typography variant="subtitle2" className={classes.title}>
              REACH US AT :
            </Typography>
            <div className={classes.icons}>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
              <InstagramIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener"
                color="inherit"
              >
              <LinkedInIcon />
              </Link>
            </div>
          </div>
          <div className={classes.copyright}>
            <Typography variant="body2">
              Copyright cse/rcoem @2022 All rights reserved
            </Typography>
            {/* <Typography variant="body2">
              <Link
                href="#"
                target="_blank"
                rel="noopener"
                color="inherit"
                underline="none"
              >
                Privacy policy
              </Link>
            </Typography>
            <Typography variant="body2">
              <RouterLink to='/login' className={classes.text}>
                Member login
              </RouterLink>
            </Typography> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
