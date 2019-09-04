import React, { Component } from 'react';
import * as yup from 'yup';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { SelectOption, RadioField, Button, MathLogic } from '../../component';
// Component styles
import styles from './styles';

// let yup = require('yup');
 function Validate() {
return yup.object().shape({
  value: yup.string()
  .required('Name is required')
  .min(3, 'Min 3 characters required'),
  game: yup.string()
  .required('Game is required'),
  footballRole: yup.string()
  .required("Football Role is required"),
  cricketRole: yup.string()
  .required("Cricket Role is required"),

});
 }

 const divStyle = {
    color: 'red',
  };

class Form extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            game: '',
            cricketRole: '',
            footballRole: '',
            error: {
                value:'',
                game:'',
                cricketRole:'',
                footballRole:'',

            },
            touched : {
                value: false,
                game: false,
                footballRole: false,
                cricketRole: false
            },
        };
    }

    handleNameChange = field => (event) => {
        const { touched } = this.state;
        this.setState({ value: event.target.value, touched: {...touched, [field]: true}}, () => {this.handleValidate(field)});
    }

    onBlur = (value) => {
        this.handleValidate(value);
    }
   
    handleGameChange = field => (event) => {
        const { touched } = this.state;
        this.setState({ game: event.target.value, touched: {...touched, [field]: true}}, () =>{this.handleValidate(field)});
    }
    handleCricRoleChange = field => (event) => {
        const { touched } = this.state;
        this.setState({ cricketRole: event.target.value, touched: {...touched,[field]: true}}, () =>{this.handleValidate(field)});
    }
    handleFootRoleChange = field => (event) => {
        console.log(field, '????????????????')
        const { touched } = this.state;
        this.setState({ footballRole: event.target.value, touched: {...touched,[field]: true}}, () =>{this.handleValidate(field)});
    }
    hasTouched = () => {
        const { touched } = this.state;
        console.log(touched)
        let touchCheck = 0;
        Object.keys(touched).forEach((a) => {
            if(touched[a] === true) touchCheck += 1;
        });
        if (touchCheck === 3) return true;
        return false;
    }
    handleValidate = (field) => {
        console.log(field)
        const { value, error, game, footballRole, cricketRole } = this.state;
        const schema = Validate();
        schema.validate({value, game, footballRole, cricketRole},{abortEarly: false})
        .then(() => {
            console.log('>>>>>>>>>>>>', error)
            this.setState({error:{ ...error,[field]: ''}})
        }).catch((err) => {
            console.log('>>>>>>>>>>sss>>', err, error)
            err.inner.forEach((errors) => {
                if (errors.path === field) {
                    this.setState({error:{ ...error,[field]: errors.message }})
                }
            });
        if (!(err.inner.some(err => err.path === field))) {
            console.log('in>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<', err)
            this.setState({
            error: { ...error, [field]: '' },
            });
        }
        });
    }

    render() {
        const { value, game, cricketRole, footballRole, error, touched } = this.state;
        const { classes } = this.props;
        console.log({"value": value, "Sports": game, "CricketRole": cricketRole, "FootballRole": footballRole, "error": error});
        return (
            <div  className={classes.root}>
            <h2 className={classes.heading}>Validation Demo</h2>
                <TextField
                    label="Name"
                    value={value}
                    onBlur={() => this.onBlur('value')}
                    onChange={this.handleNameChange('value')}
                    variant="outlined"
                    fullWidth
                />
                {(error.value) ? <p style={divStyle}> {error.value}</p> : ''}
                <br />
                <FormControl variant="outlined">
                <SelectOption 
                    game={game}
                    onBlur={() => this.onBlur('game')}
                    handleGameChange={this.handleGameChange('game')}
                />
                   {(error.game) ? <p style={divStyle}> {error.game}</p> : ''}
                </FormControl>
                <RadioField
                  game={game}
                  className={classes.radio}
                  onBlur={() => this.onBlur('cricketRole')}
                  handleCricRoleChange={this.handleCricRoleChange('cricketRole')}
                  handleFootRoleChange={this.handleFootRoleChange('footballRole')}
                />
                   {(error.footballRole) ? <p style={divStyle}> {error.footballRole}</p> : ''}
               <div className={classes.btn}>
               {this.hasTouched() ?    <Button variant="contained" color="primary">Submit</Button> :
                <Button variant="contained" color="primary" disabled>Submit</Button> }
               </div>
            </div>
        )
    }
}

export default withStyles(styles)(Form);