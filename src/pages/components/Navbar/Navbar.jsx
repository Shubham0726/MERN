import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
      paddingLeft: 20,
      paddingRight: 20,
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Trainee Portal
          </Typography>
          <Link to="/login" className={classes.link}>LOGIN</Link>
          <Link to="/trainee" className={classes.link}>TRAINEE</Link>
          <Link to="/input-demo" className={classes.link}>INPUT DEMO</Link>
          <Link to="/children-demo" className={classes.link}>CHILDREN DEMO</Link>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
