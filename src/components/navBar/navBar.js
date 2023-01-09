import {
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  SwipeableDrawer,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import useStyles from "./style";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const NavBar = () => {
  const classes = useStyles();
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobile(open);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClicks = () => {
    setOpens(!opens);
  };

  const mobileNav = (
    <div className={classes.mobile}>
      <IconButton
        onClick={toggleDrawer(false)}
        area-label="menu"
        className={classes.buttonR}
      >
        <ChevronRightIcon />
      </IconButton>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItem button>
          <Link to="/" className={classes.text}>
            <ListItemText primary="HOME" />
          </Link>
        </ListItem>
        <ListItem button to="/aboutus">
          <Link to="/about" className={classes.text}>
            <ListItemText primary="ABOUT US" />
          </Link>
        </ListItem>
        <ListItem button to="/Events">
          <Link to="/Events" className={classes.text}>
            <ListItemText primary="Events" />
          </Link>
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="OUR CHAPTERS" className={classes.text} />
          {open ? (
            <ExpandLess className={classes.buttonR} />
          ) : (
            <ExpandMore className={classes.buttonR} />
          )}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <Link to="/cs" className={classes.text}>
                <ListItemText primary="CS" />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link to="/ras" className={classes.text}>
                <ListItemText primary="RAS" />
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <Link to="/ourteam" className={classes.text}>
            <ListItemText primary="OUR TEAM" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/joinus" className={classes.text}>
            <ListItemText primary="JOIN US" />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <nav className={classes.navbar}>
        <Link to="/">
          <div
            src="https://i.imgur.com/a4w0PtN.png"
            className={classes.navbar__logo}
            alt="logo"
          />
        </Link>
        <ul className={classes.navbar__list}>
          <li className={classes.navbar__list__listItem}>
            <Link to="/" className={classes.navbar__list__listItem__link}>
              HOME
            </Link>
          </li>
          <li className={classes.navbar__list__listItem}>
            <Link to="/about" className={classes.navbar__list__listItem__link}>
              ABOUT US
            </Link>
          </li>
          <li className={`${classes.navbar__list__listItem} ${classes.hover}`}>
            <Link
              to="/Events"
              className={classes.navbar__list__listItem__link}
            >
              EVENTS
            </Link>
            {/* <Paper
              elevation={3}
              className={`${classes.subListItem} subListItem`}
            >
              <ul className={classes.subItem}>
                <li className={classes.navbar__list__listItem}>
                  <Link
                    to="/webinars"
                    className={classes.navbar__list__listItem__link}
                  >
                    WEBINARS
                  </Link>
                </li>
              </ul>
            </Paper> */}
          </li>
          <li className={`${classes.navbar__list__listItem} ${classes.hover}`}>
            <Link to="/cs" className={classes.navbar__list__listItem__link}>
              Club Students
            </Link>
            <Paper
              elevation={3}
              className={`${classes.subListItem} subListItem`}
            >
              <ul className={classes.subItem}>
                <li className={classes.navbar__list__listItem}>
                  <Link
                    to="/cs"
                    className={classes.navbar__list__listItem__link}
                  >
                    COMPUTER SOCIETY
                  </Link>
                </li>
              </ul>
            </Paper>
          </li>
          <li className={classes.navbar__list__listItem}>
            <Link
              to="/ourteam"
              className={classes.navbar__list__listItem__link}
            >
              OUR TEAM
            </Link>
          </li>
          <li className={classes.navbar__list__listItem}>
            <Link
              to="/alumni"
              className={classes.navbar__list__listItem__link}>
              Alumni
            </Link>
          </li>
          <li className={classes.navbar__list__listItem}>
            <Link to="/joinus" className={classes.navbar__list__listItem__link}>
              JOIN US
            </Link>
          </li>
        </ul>
        {mobile ? (
          <SwipeableDrawer
            anchor="right"
            open={mobile}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(false)}
          >
            {mobileNav}
          </SwipeableDrawer>
        ) : (
          ""
        )}
        <IconButton
          aria-label="menu"
          className={classes.button}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </nav>
    </div>
  );
};

export default NavBar;
