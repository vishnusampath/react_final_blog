var React = require('react');
var Link = require('react-router').Link;
var NavigationBar=require('./NavigationBar');

var FullPostBox = React.createClass({
  getInitialState: function () {
    return {
      postObj: {}
    };
  },

  loadPost: function(){
    $.ajax({
      type: 'GET',
      url: '/api/post/' + this.props.params._id,
      cache: false,
      success: function (result) {
        this.setState({postObj: result});
      }.bind(this)

    })
  },

  componentDidMount: function () {
    this.loadPost();
    //setInterval(this.loadBlog, 6000);
  },

  render: function(){
      return(
        <div className="container" id="fullPostBox">
          <NavigationBar />
          <div className="row wrap-content" id="postElement">
            <div className="col-md-4">
               <img id="poster" alt="Bootstrap Image Preview" src={this.state.postObj.poster} />
            </div>
            <div className="col-md-8">
              <div className="list-group" id="list-group">
                <div className="list-group-item" id="list-group-item">
                  <ul className="list-unstyled" id="ulist">
                    <li id="title">
                      {this.state.postObj.title}
                    </li>

                    <li id="text">
                      {this.state.postObj.text}
                    </li>

                    <li id="author">
                      <span>Posted by :  </span> {this.state.postObj.author_name}
                    </li>
                  </ul>
                  <input type="text" id="postID" value={this.state.postObj._id} hidden readOnly />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
});

module.exports = FullPostBox;
