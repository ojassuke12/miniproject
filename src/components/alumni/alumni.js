import { Avatar, Link, Typography } from "@material-ui/core";
import React from "react";

// import image from "../../images/profiles/person.jpg";
// import LinkedInIcon from "@material-ui/icons/LinkedIn ";
import useStyles from "./style";

function Profile({ name, designation, linkedInURL, image }) {
  const classes = useStyles();
  return (
    <div className={classes.profile}>
      <Avatar alt="Remy Sharp" src={image} className={classes.profile__image} />
      {/* <Typography variant="subtitle2">{name}</Typography> */}
      <div className={classes.profile__name}>{name}</div>
      <div className={classes.profile__socialIcons}>
        {/* {linkedInURL ? (
          <Link
            href={linkedInURL}
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedInIcon fontSize="large" />
          </Link>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
}

export default Profile;
