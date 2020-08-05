import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const PJBSelect = ( { children , ...props } ) => {
    
    const classes = useStyles();

    return (
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select">{props.label}</InputLabel>
        <Select labelId="select" id="select" label={props.label} value={props.value} onChange={props.onChange}>
          <MenuItem value="" disabled>{`Select a ${props.label}`}</MenuItem>
          {children}
        </Select>
      </FormControl>
    )
}

export default PJBSelect;
