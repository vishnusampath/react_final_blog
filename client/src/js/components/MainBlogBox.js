var React = require('react');
var Link = require('react-router').Link;
var NavigationBar=require('./NavigationBar');

var MainBlogBox = React.createClass({

  getInitialState: function () {
    return {
      blogJSONArray: []
    };
  },

  loadBlog: function(){
    $.get('/api/blog', function (result) {

    this.setState({
      blogJSONArray: result
      });
    }.bind(this));
  },

  componentDidMount: function () {
    this.loadBlog();
    //setInterval(this.loadBlog, 6000);
  },

  render: function () {
    return(
      <div className="container" id="mainBox">
        <NavigationBar />
        <MainBox jsonData = {this.state.blogJSONArray} />
      </div>
    );
  }
});

var MainBox = React.createClass({
  readPostByID: function () {

  },

  render: function () {
    var postrows = [];
    this.props.jsonData.forEach(function (post){
       postrows.push(<BlogPost key={post._id} postObj={post} onReadPost={this.readPostByID} />);
     }.bind(this));

    return(<div>{postrows}</div>);
  }
});

var BlogPost = React.createClass({
  getInitialState: function () {
    var postObj = this.props.postObj;
    return postObj;
  },

  render: function(){
      return(
        <div className="row wrap-content" id="postElement">
          <div className="col-md-4">
             <img id="overviewposter" alt="Bootstrap Image Preview" src={this.props.postObj.poster} />
          </div>
          <div className="col-md-8">
            <div className="list-group" id="list-group">
              <div className="list-group-item" id="list-group-item">
                <ul className="list-unstyled" id="ulist">
                  <li id="title">
                    {this.props.postObj.title}
                  </li>

                  <li id="overview-text">
                    {this.props.postObj.text}
                  </li>

                  <li id="author">
                    <span>Posted by :  </span> {this.props.postObj.author_name}
                  </li>
                </ul>
                <input type="text" id="postID" value={this.props.postObj._id} hidden readOnly />
                <div className="buttons">
                  <Link to={'/fullpost/'+this.props.postObj._id} className="btn btn-primary" > Read more... </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = MainBlogBox;
