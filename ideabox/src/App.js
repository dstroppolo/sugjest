import React from 'react';
import './App.css';

import IdeaContainer from './containers/IdeaContainer';
import HeaderContainer from './containers/HeaderContainer';
import MenuContainer from './containers/MenuContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="p-grid" style={{paddingTop: "4em"}}>
        <IdeaContainer/>
        <MenuContainer />
      </div>
    </div>
  );
}

export default App;
