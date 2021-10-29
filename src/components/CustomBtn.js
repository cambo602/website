import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import { Link } from 'react-router-dom';

const StyledButton = withStyles({
    root:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#4f25f7",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,collor .3s",
        "&:hover":{
            backgroundColor: "#4f25f7"
        },
    },
    label: {
        textTransform: "capitalize",
    }
})(Button);

function CustomBtn(props) {
    const {txt, link} = props;
    return (
        <div>
            <StyledButton variant="contained"><a href={link}>{txt}</a></StyledButton>
        </div>
    )
}

export default CustomBtn
