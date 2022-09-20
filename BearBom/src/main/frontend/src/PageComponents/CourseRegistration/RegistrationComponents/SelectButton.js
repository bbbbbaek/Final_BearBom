import {Button, createTheme, styled, ThemeProvider} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useState } from "react";


const SelectButton = ({ children, selected, onClick, right}) => {
    //const classes = useStyles()

    return (
      <Button
        disableRipple
        onClick={onClick}
        variant="outlined"
        //className={right ? classes.basicBtnR : classes.basicBtn}
        color={selected ? "secondary" : "primary"}
        style={selected ? { background: '#edeae7', minWidth:250 ,width: '100%' } : { minWidth:250 ,width: '100%' }}
        endIcon={selected
          ? <CheckCircleIcon color="secondary" fontSize="large" />
          : <CheckCircleIcon color="primary" fontSize="large" />}
      >
        {children}
      </Button>
    )
  }
  
  export default SelectButton