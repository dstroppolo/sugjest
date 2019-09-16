import React, { Component } from 'react';
import {Card} from 'primereact/card';
import IdeaBoxButton from './IdeaBoxButton';

class IdeaBox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: ""
         }
    }
    render() { 

        let header = (
            <div>
                <div style={{padding:"4px", color:"#9999A6"}}>Suggested by {this.props.owner}</div>
                <div style={{width:"100%", height:"3px", backgroundColor:"#32A9E1"}}></div>
            </div>
            )

        return (
            <Card title={this.props.title} header={header} className="ui-card-shadow" style={{margin: "2.5em 0"}}>
                <div>{this.props.description}</div>
                <br />
                <div className="p-grid p-justify-even	">
                    <IdeaBoxButton 
                        title="Great Idea"
                        counter={this.props.upvotes}
                        icon="pi pi-thumbs-up"
                        className="p-button-success"
                    />

                    <IdeaBoxButton 
                        title="Idea Sucks"
                        counter={this.props.downvotes}
                        icon="pi pi-thumbs-down"
                        className="p-button-warning"
                    />
                </div>

                       
            </Card>
        );
    }
}
 
export default IdeaBox;