import {Button, styled} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import React, { useState } from "react";

/*const useStyles = styled(theme => ({
    basicBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '285px',
        color: "#1F283D",
        height: '100%',
        fontSize: '16px',
        [theme.breakpoints.down(900)]:{
            maxWidth: '100%',
        }
    },
    basicBtnR: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '285px',
        height: '100%',
        color: "#1F283D",
        fontSize: '16px',
        marginLeft: 30,
        [theme.breakpoints.down(900)]:{
            maxWidth: '100%',
            marginLeft: 13
        }
    }}));*/

const SelectButton = ({ children, selected, onClick, right}) => {
    //const classes = useStyles()

    return (
      <Button
        disableRipple
        onClick={onClick}
        variant="outlined"
        //className={right ? classes.basicBtnR : classes.basicBtn}
        color={selected ? 'inherit' : 'info'}
        style={selected ? { background: '#c0c0c0', minWidth:300 ,width: '100%' } : { minWidth:300 ,width: '100%' }}
        endIcon={selected
          ? <CheckCircleIcon color="inherit" fontSize="large" />
          : <CheckCircleIcon color="info" fontSize="large" />}
      >
        {children}
      </Button>
    )
  }
  
  export default SelectButton