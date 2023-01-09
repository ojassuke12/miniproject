import { Avatar, Button, Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { Link as RouterLink } from "react-router-dom";


const Ras = () => {
  const classes = useStyles();
  return (
    <div className={classes.ras}>
      <section className={classes.ras__groupPhoto}>
        <div className={classes.ras__groupPhoto__container}>
          <img
            src="https://i.imgur.com/dRUPL6Q.jpg"
            alt="grpPhoto"
            className={classes.ras__groupPhoto__container__image}
          />
        </div>
      </section>
    </div>
  );
};

export default Ras;
