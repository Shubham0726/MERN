import React from 'react';
import { withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import config from '../../pages/InputText/config';
import styles from './style';

const SelectOptions = (props) => {
        const { game, handleGameChange, onBlur, classes } = props;
        return (
            <>
              <br />
              <h2>Select the game you want to play?</h2>
              <FormControl variant="outlined">
                <Select
                  native
                  value={game}
                  className={classes.select}
                  onBlur={onBlur}
                  onChange={handleGameChange}
                >
                  {config.sports.map(({ label, name }) => (<option value={name} key={name}>{label}</option>))}
                </Select>
              </FormControl>    
            </>
        )
}

export default withStyles(styles)(SelectOptions);