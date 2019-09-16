import React from 'react';
import IdeaBox from '../components/IdeaBox';

export default class IdeaContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            ideas: []
         }
    }

    componentDidMount = () => {
        fetch("http://localhost:8080/ideas/all", {method: "GET"})
            .then( res => {
                return res.json()
            })
            .then( json => {
                this.setState({ideas: json})
            })
    }

    renderIdeas = () => {
        let ideas = [];
        if(this.state.ideas && this.state.ideas.length > 0) {
            ideas = this.state.ideas.map( idea => {
                return (
                    <IdeaBox 
                        title={idea.title} 
                        description={idea.description}
                        owner={idea.owner}
                        upvotes={idea.upvotes}
                        downvotes={idea.downvotes}    
                    />
                )
            })
        }
        return ideas;
    }

    render() {
        return (
            <div className="p-col-10 p-lg-6 p-offset-1 p-lg-offset-2">
                { this.renderIdeas() }
            </div>
        )
    }

}
