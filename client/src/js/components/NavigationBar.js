var React = require('react');
var Link = require('react-router').Link;

var NavigationBar = React.createClass({
  render: function () {
    return(
      <div className="navbar navbar-fixed-top">
        <div className="container" id="navbar">
          <div className="navbar-collapse collapse navbar-responsive-collapse">
            <ul className="nav navbar-nav" id="navbar-list">
              <li className="active"><Link to="/">Posts</Link></li>
              <li> <span> | </span> </li>
              <li><Link to="/categorySpace/Space">Space</Link></li>
              <li> <span> | </span> </li>
              <li><Link to="/categoryTech/Tech">Tech</Link></li>
              <li> <span> | </span> </li>
              <li><Link to="/categoryPhysics/Physics">Physics</Link></li>
            </ul>
            <ul className="nav navbar-nav pull-right" id="navbar-list">
              <li><Link to="/addpost">Add Post</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NavigationBar;
