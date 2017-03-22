import React, {Component} from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  renderLinks() {
    return(
      <div>
        <h2><Link to={'/'}>New Measurement</Link></h2>
      </div>
    );
  }

  render() {
    let title = "Diabet.io";
    return (
      <div>
        <div>
          <h2>{title}</h2>
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
