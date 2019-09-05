import React, { Component } from 'react';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function validate() {
    return yup.object().shape({
      name: yup.string()
      .required('Name is required'),
      email: yup.string().email()
      .required('Email is required'),
      pwd: yup.string().min(8)
      .required("Password is required"),
      Cpwd: yup.string().min(8)
      .required("Confirm password  is required")
      .oneOf([yup.ref('pwd'), null], 'Passwords must match'),
    
    });
     }
     const divStyle = {
        color: 'red',
      };

class FormDialog extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            pwd: '',
            Cpwd: '',
            open: false,
            error: {
                name: '',
                email: '',
                pwd: '',
                Cpwd: '',

            },
            touched : {
                name: false,
                email: false,
                pwd: false,
                Cpwd: false
            },
        };
    }

   handleClickOpen = () => {
    this.setState({open: true});
  }

   handleClose = () => {
    this.setState({open: false});
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
    if (touchCheck === 4) return true;
    return false;
}

  handleValidate = (field) => {
    const { name, email, pwd, Cpwd, error } = this.state;
    console.log('ss', field)
    const schema = validate();
    schema.validate({name, email, pwd, Cpwd },{abortEarly: false})
    .then(() => {
        this.setState({error:{ ...error,[field]: ''}})
    }).catch((err) => {
        console.log(err);
        // object
        err.inner.forEach((errors) => {
            console.log(errors, field)
            if (errors.path === field) {
                console.log('ddd', field)
                this.setState({error:{ ...error,[field]: errors.message }})
            }
            console.log('ll', error);
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
     const { open, name, email, pwd, Cpwd, touched, error } = this.state;
     console.log({"Name": name, "EMail": email, "password": pwd, "Confirm password": Cpwd})
    return (
        <div>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            ADD TRAINEE
          </Button>
          <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Trainee</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter your trainee details
              </DialogContentText>
    
    
          <Grid container spacing={3}>
            <Grid item xs={12}>
    
          <TextField
            id="outlined-name"
            label="Name"
            value={name}
            onBlur={() => this.onBlur('name')}
            onChange={this.handleChange('name')}
            margin="normal"
            variant="outlined"
            fullWidth
          />
          {(error.name) ? <p style={divStyle}> {error.name}</p> : ''}
    
            </Grid>
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
            <Grid item xs={6}>
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
            <Grid item xs={6}>
            <TextField
                autoFocus
                password={Cpwd}
                id="name"
                label="Confirm Password"
                type="email"
                onBlur={() => this.onBlur('Cpwd')}
            onChange={this.handleChange('Cpwd')}
                margin="normal"
                variant="outlined"
                fullWidth
              />
                 {(error.Cpwd) ? <p style={divStyle}> {error.Cpwd}</p> : ''}
            </Grid>
          </Grid> 
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
            {this.hasTouched() ?     <Button onClick={this.handleClose} color="primary">
                Submit
              </Button> :
                <Button variant="contained" color="danger" disabled>Submit</Button> }
            </DialogActions>
          </Dialog>
        </div>
      );
 }
}

export default FormDialog;
