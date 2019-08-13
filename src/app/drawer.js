import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { loadCSS } from 'fg-loadcss';
import clsx from 'clsx';
import Icon from '@material-ui/core/Icon';

import './drawer.scss';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  const icons = [
    {
      icon: 'fa fa-user',
      color: '#009688'
    },
    {
      icon: 'fa fa-briefcase',
      color: '#00bcd4'
    },
    {
      icon: 'fa fa-keyboard',
      color: '#3f51b5'
    },
    {
      icon: 'fa fa-chart-bar',
      color: '#9c27b0'
    },
    {
      icon: 'fa fa-star',
      color: '#F44336'
    },
    {
      icon: 'fa fa-university',
      color: '#ff9800'
    },
    {
      icon: 'fa fa-id-card',
      color: '#795548'
    },
    {
      icon: 'fa fa-file',
      color: '#424242'
    }
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div>
          <h1 className="name-logo">
            J. Tanner <br /> Porter
            <Typography style={{ color: 'black' }} variant="overline" display="block">
              Full Stack Developer
          </Typography>
          </h1>
        </div>
        <Divider />
        <List>
          {['About', 'Experience', 'Projects', 'Skills', 'Awards', 'Education', 'Contact', 'Resume'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><Icon className={clsx(classes.icon, icons[index].icon)} style={{color: icons[index].color}} /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          {console.log(icons)}
          {/* <ListItem button key="About">
            <ListItemIcon><Icon className={clsx(classes.icon, "fa fa-user")} color="primary" /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItem> */}
        </List>
      </Drawer>
      <main>
        <div className="overlay"></div>
        <Container className="hero-container">
          <h2 className="hero-text">
            I want to <span className="teal">make things</span> <br /> that <span className="underline">make a difference.</span>
          </h2>
        </Container>
        {/* <Grid container spacing={3}>
          <Grid item xs={12}>
          </Grid>
        </Grid> */}
        {/* Content goes here . . . */}
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography> */}
      </main>
    </div>
  );
}