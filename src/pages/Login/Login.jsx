import React, { Component } from 'react';
import * as yup from 'yup';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

function validate() {
    return yup.object().shape({
      email: yup.string().email()
      .required('Email is required'),
      pwd: yup.string().min(8)
      .required("Password is required"),
    
    });
     }
     const divStyle = {
        color: 'red',
      };

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            pwd: '',
            error: {
                email: '',
                pwd: '',

            },
            touched : {
                email: false,
                pwd: false,
            },
        };
    }

  handleChange = field => (event) => {
      const { touched } = this.state;
    this.setState({ [field]: event.target.value, touched: {...touched, [field]: true}}, () => {this.handleValidate(field)});
}

onBlur = (value) => {
    this.handleValidate(value);
}

hasTouched = () => {
    const { touched } = this.state;
    let touchCheck = 0;
    Object.keys(touched).forEach((a) => {
        if(touched[a] === true) touchCheck += 1;
    });
    if (touchCheck === 2) return true;
    return false;
}

  handleValidate = (field) => {
    const { email, pwd,  error } = this.state;
    const schema = validate();
    schema.validate({ email, pwd },{abortEarly: false})
    .then(() => {
        this.setState({error:{ ...error,[field]: ''}})
    }).catch((err) => {
        err.inner.forEach((errors) => {
            if (errors.path === field) {
                console.log('ddd', field)
                this.setState({error:{ ...error,[field]: errors.message }})
            }
        });
        if (!(err.inner.some(err => err.path === field))) {
            console.log('in>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<', err)
            this.setState({
            error: { ...error, [field]: '' },
            });
        }
    })
}

 render () {
     const { email, pwd, error } = this.state;
     const { classes } = this.props;
     console.log({"EMail": email, "password": pwd })
    return (
         <div className={classes.root}>
         <img src="./0.png" height="90px" alt="image" />
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <TextField
                autoFocus
                id="name"
                value={email}
                onBlur={() => this.onBlur('email')}
            onChange={this.handleChange('email')}
                label="Email Address"
                type="email"
                margin="normal"
                variant="outlined"
                fullWidth
              />
              {(error.email) ? <p style={divStyle}> {error.email}</p> : ''}
            </Grid>
            <Grid item xs={12}>
            <TextField
                autoFocus
                id="name"
                password={pwd}
                label="Password"
                type="email"
                onBlur={() => this.onBlur('pwd')}
            onChange={this.handleChange('pwd')}
                margin="normal"
                variant="outlined"
                fullWidth
              />
                 {(error.pwd) ? <p style={divStyle}> {error.pwd}</p> : ''}
            </Grid>
          </Grid>
            {this.hasTouched() ?     <Button onClick={this.handleClose} color="primary">
                Submit
              </Button> :
                <Button variant="contained" color="danger" disabled>Submit</Button> }
        </div>
      );
 }
}

export default withStyles(styles)(Login);
