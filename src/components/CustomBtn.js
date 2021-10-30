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
        background: "#d65151",
        color: "#000",
        transform: "none",
        boxShadow: "6px 6px 0 0 #913737",
        transition: "background .3s,border-color .3s,collor .3s",
        "&:hover":{
            backgroundColor: "#913737"
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
            <Link to={{pathname: link}} target="">
            <StyledButton variant="contained">
                {txt}
            </StyledButton>
            </Link>
        </div>
    )
}

export default CustomBtn
