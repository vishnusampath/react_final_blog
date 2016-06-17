var React = require('react');
var Link = require('react-router').Link;
var NavigationBar=require('./NavigationBar');

var CategorySpaceBox = React.createClass({

  getInitialState: function () {
    return {
      categoryJSONArray: []
    };
  },

  loadCategory: function(){
    $.ajax({
      type: 'GET',
      url: '/api/blog/' + this.props.params.topic,
      cache: false,
      success: function (result) {
        this.setState({categoryJSONArray: result});
      }.bind(this)

    })
  },

  componentDidMount: function () {
    this.loadCategory();
    //setInterval(this.loadCategory, 6000);
  },

  render: function () {
    return(
      <div className="container" id="mainCategoryBox">
        <NavigationBar />
        <MainCategoryBox jsonData = {this.state.categoryJSONArray} />
      </div>
    );
  }
});

var MainCategoryBox = React.createClass({

  render: function () {
    var postrows = [];
    this.props.jsonData.forEach(function (post){
       postrows.push(<CategoryPost key={post._id} postObj={post} />);
     }.bind(this));

    return(<div>{postrows}</div>);
  }
});

var CategoryPost = React.createClass({
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

module.exports = CategorySpaceBox;
