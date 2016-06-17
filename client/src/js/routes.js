var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var IndexRoute=Router.IndexRoute;

//var MainLayout=require('./components/MainLayout').MainLayout;

var MainBlogBox = require('./components/MainBlogBox');
var CategorySpaceBox = require('./components/CategorySpaceBox');
var CategoryTechBox = require('./components/CategoryTechBox');
var CategoryPhysicsBox = require('./components/CategoryPhysicsBox');
var AddPostBox = require('./components/AddPostBox');
var FullPostBox = require('./components/FullPostBox');
// var Hello=require('./components/hello');

module.exports = (
  <Route>
    <Route path="/" handler={MainBlogBox} />
    <Route path="/categorySpace/:topic" handler={CategorySpaceBox} />
    <Route path="/categoryTech/:topic" handler={CategoryTechBox} />
    <Route path="/categoryPhysics/:topic" handler={CategoryPhysicsBox} />
    <Route path="/fullpost/:_id" handler={FullPostBox} />
    <Route path="/addpost" handler={AddPostBox} />
  </Route>
);
