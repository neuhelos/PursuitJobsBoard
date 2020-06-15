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

const AddJobsPostSelect = ( { children , ...props } ) => {
    
    const classes = useStyles();

    return (
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">{props.label}</InputLabel>
        <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" {...props.select}>
          <MenuItem value="" disabled>{`Select a ${props.label}`}</MenuItem>
          {children}
        </Select>
      </FormControl>
    )
}

export default AddJobsPostSelect;
