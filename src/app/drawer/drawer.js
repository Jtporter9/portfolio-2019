import React, { useState } from "react";
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
import JtDevLogo from '../../images/logo-alt-2.png';

//SCSS
import './drawer.scss';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
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

const PermanentDrawerLeft = props => {
  const classes = useStyles();

  const { appBar, drawer, drawerPaper, toolbar, content } = classes;
  const { navLayout } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  PermanentDrawerLeft.handleClickOutside = () => setIsOpen(false);

  console.log(1, drawer, navLayout);
  

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  const icons = [
    {
      icon: 'fa fa-user',
      color: '#009688',
      anchor: '#about'
    },
    {
      icon: 'fa fa-briefcase',
      color: '#00bcd4',
      anchor: '#experience'
    },
    {
      icon: 'fa fa-keyboard',
      color: '#3f51b5',
      anchor: '#projects'
    },
    {
      icon: 'fa fa-chart-bar',
      color: '#9c27b0',
      anchor: '#skills'
    },
    {
      icon: 'fa fa-star',
      color: '#F44336',
      anchor: '#awards'
    },
    {
      icon: 'fa fa-university',
      color: '#ff9800',
      anchor: '#education'
    },
    {
      icon: 'fa fa-id-card',
      color: '#795548',
      anchor: '#contact'
    },
    {
      icon: 'fa fa-file',
      color: '#424242',
      anchor: 'https://docs.google.com/document/d/1RlUb7U_8oEDtm-BiAnOWgN2nOYUBqSrpQm0sKx0aMXI/edit?usp=sharing',
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ];

  return (
    <div className='drawer'>
      <CssBaseline />
      <Drawer
        className={[drawer, navLayout]}
        variant="permanent"
        classes={{
          paper: drawerPaper,
        }}
        anchor="left"
      >
        <div>
          <a className="name-logo" href="#intro">
            <img src={JtDevLogo} style={{ width: '100px' }} alt="JT Porter" />
            <h1>
            JT Porter
            <Typography style={{ color: 'black' }} variant="overline" display="block">
                Full Stack Developer
          </Typography>
            </h1>
          </a>
        </div>
        <Divider />
        <List className="side-bar-nav-list">
          {['About', 'Experience', 'Projects', 'Skills', 'Awards', 'Education', 'Contact', 'Resume'].map((text, index) => (
            <a className="icon-anchor" href={icons[index].anchor}>
              <ListItem button key={text}>
                <ListItemIcon><Icon className={clsx(classes.icon, icons[index].icon)} style={{ color: icons[index].color }} /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </a>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default PermanentDrawerLeft;