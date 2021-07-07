import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    background: '#fff',
    borderRadius: '4px',
    boxShadow: '3px 18px 84px -10px #ddd',
    width: '50%',
    marginTop: '50px',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
      marginLeft: 'auto',
      marginRight: 'auto',
      fontWeight: 300,
      err: {
        color: 'red',
    }
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Typography variant="h1" className={classes.title}>
            <span className={classes.err}>404</span> Page Not Found
          </Typography>
    </div>
  );
}
