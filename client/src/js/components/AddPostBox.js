var React = require('react');
var Link = require('react-router').Link;
var NavigationBar=require('./NavigationBar');

var AddPostBox = React.createClass({
  componentDidMount: function(){
    $('#addPostButton').on('click', function () {

      $.ajax({
        type: 'POST',
        url: 'api/blog/add',
        data: $('#addForm').serialize() + '&addPoster=' + $('#addPoster').val().split('\\')[2],
        cache: false,
        success: function () {
          alert("Your Post has been Added");
        }
      })
    });
  },

  render: function () {
    return(
      <div className="container">
        <NavigationBar />
        <div className="row" id="addPostBox">
          <div className="col-md-3 pull-left"></div>
      		<div className="col-md-6 jumbotron">
      			<form role="form" id="addForm">
              <div className="form-group">

                <label for="addTitle">
                  Title
                </label><br/>
                <input type="text" className="form-control" id="addTitle" name="addTitle" required />

              </div>
              <div className="form-group">

      					<label for="addTopic">
      						Topic
      					</label>
      					<input type="text" className="form-control" id="addTopic" name="addTopic" required />

      				</div>
              <div className="form-group">

      					<label for="addText">
      						Details
      					</label>
      					<textarea type="text" className="form-control" id="addPlot" name="addText" required />

      				</div>
      				<div className="form-group">

                <label for="addAuthor">
                  Author
                </label>
                <input type="text" className="form-control" id="addAuthor" name="addAuthor" required />

      				</div>
              <div className="form-group">

                <label for="addPoster">
                  Upload Poster
                </label>
                <input type="file" className="form-control" id="addPoster" name="addPoster" required />

      				</div>
      			</form>
            <center>
            <button className="btn btn-primary" id="addPostButton">
              Add New Post
            </button>
            </center>
      		</div>
          <div className="col-md-3"></div>
      	</div>
      </div>
    );
  }

});

module.exports = AddPostBox;
