import React, {Component} from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  renderLinks() {
    let title = "Diabet.io";
    return(
      <div style={{display: 'flex', width: '100vw'}}>
        <h3>{title}</h3>
        <h3><Link to={'/'} style={{textDecoration: 'none', marginLeft: '10px'}}>New Measurement</Link></h3>
        <h3><Link to={'/overview'} style={{textDecoration: 'none', marginLeft: '10px'}}>Overview</Link></h3>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <div className="links-list">
            { this.renderLinks() }
          </div>
        </div>
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
}

export default NavBar;

// <h2><Link to={'/overview'} key={idx}>Overview</Link></h2>
// <h2><Link to={'/stats'} key={idx}>Stats</Link></h2>
// <h2><Link to={'/settings'} key={idx}>Settings</Link></h2>
