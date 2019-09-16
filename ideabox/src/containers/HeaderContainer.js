import React, { Component } from 'react';
import { Button } from 'primereact/button';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style = {{ backgroundColor: "#253135", height: "4em", position: "fixed", top:0, width:"100%", zIndex:100}} className="p-grid p-align-center p-justify-around">
                <div style ={{ paddingLeft:"1em", color: "white", fontSize:"2em" }} className="p-col-2">
                    SugJest
                </div>
                <div style ={{ paddingLeft:"1em", color: "white" }} className="p-lg-offset-5 p-md-offset-3 p-sm-offset-2">
                    <Button label="New Idea" icon="pi pi-plus" />
                    <span style={{margin:"0 0.3em"}} />
                    <Button label="Change Board" icon="pi pi-refresh" />
                </div>
            </div>
         );
    }
}
 
export default HeaderContainer;