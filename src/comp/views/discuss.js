import React, { Component } from "react";
import Card from "../stateless/comments";

export default class home extends Component {
  render() {
    return (
      <div>
        <Comments />
      </div>
    );
  }
}
var data = [
  {
    id: 1,
    author: "Simon",
    text: "this is the first comment"
  },
  {
    id: 2,
    author: "Dave",
    text: "this is the second comment"
  }
];

var CommentsBox = React.createClass({
  getInitialState: function() {
    return { data: data };
  },
  handleFormSubmit: function(comment) {
    //update array for demo purposes - would be fetched from server etc..
    data.push(comment);
    this.setState({ data: data });
  },
  render: function() {
    return (
      <div className="comments">
        <h2>Simple comment box with React</h2>
        <CommentList data={this.state.data} />
        <CommentForm onFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentnodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return <div className="comments_list">{commentnodes}</div>;
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h3 className="comment_author">{this.props.author}</h3>
        {this.props.children}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return { author: "", text: "" };
  },
  handleAuthorChange: function(e) {
    this.setState({ author: e.target.value });
  },
  handleTextChange: function(e) {
    this.setState({ text: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author,
      text = this.state.text;

    if (!author || !text) {
      //output error message
      return;
    }

    this.props.onFormSubmit({ author: author, text: text });
    this.setState({ author: "", text: "" });
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Add a comment</legend>
          <input
            type="text"
            placeholder="Name"
            onChange={this.handleAuthorChange}
            value={this.state.author}
          />
          <input
            type="text"
            placeholder="Comment"
            onChange={this.handleTextChange}
            value={this.state.text}
          />
          <input type="submit" value="Post Comment" className="button" />
        </fieldset>
      </form>
    );
  }
});

ReactDOM.render(
  <CommentsBox data={data} />,
  document.getElementById("comments")
);
