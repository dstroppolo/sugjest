import React, { Component } from 'react';
import {Menu} from 'primereact/menu';

class MenuContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    items = [
        {label: 'New Idea', icon: 'pi pi-fw pi-plus'},
        {label: 'Change Board', icon: 'pi pi-fw pi-refresh'}
    ]

    render() { 
        return (
            <div className="p-lg-2" style={{margin:"2.5em", paddingTop:0}}> 
                <Menu model={this.items} />
            </div>
         );
    }
}
 
export default MenuContainer;