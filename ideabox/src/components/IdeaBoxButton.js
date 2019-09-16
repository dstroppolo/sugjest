import React from 'react';
import {Button} from 'primereact/button';

const getColorScheme = className => {
    switch (className) {
        case "p-button-seconday":
            return "#C8C8C8";
        case "p-button-success":
            return "#34A835";
        case "p-button-info":
            return "#00CDFA";
        case "p-button-warning":
            return "#FFB901";
        case "p-button-danger":
            return "#E91124";
        default: 
            return "#106FBF";
    }
}

function IdeaBoxButton(props) {
    return (
        <div style={{padding:"2px 0"}}>
            <Button label={props.title} icon={props.icon} style={{borderRadius: `5px  ${props.counter ? "0 0" : "5px 5px"} 5px`}} className={props.className}/>
            { props.counter &&
            <span style={{
                borderRight:"1px solid "+getColorScheme(props.className), 
                borderTop:"1px solid  "+getColorScheme(props.className),
                borderBottom:"1px solid "+getColorScheme(props.className),
                padding:"6px",
                borderRadius:"0 5px 5px 0"
            }}> 
                {props.counter}
            </span> }
        </div>
    )
}



export default IdeaBoxButton;