"use strict";

import React from 'react';
import { Link } from 'react-router';

class Article extends React.Component {
	
	constructor(props) {
		
    super(props);
		
    this.state = {
      articleTitle: "Article Title",
      contributors: ["Your Name"],
      tags: ["Tag1", "Tag2"],
      content: ["Type your article here."]
    };
    
    this.insertNewBlock = () => {
      let blocks = this.state.content;
      blocks.push('');
      this.setState({content: blocks});
    }

    this.save = (evt) => {
      evt.preventDefault();
      console.log("Save method called");
      console.log(evt);
      // $.post('/articles', JSON.stringify(this.state));
    }

  }

	render() {

    let textBlocks = this.state.content.map(content => {
      return <TextBlock content={content} />
    });

		return (
			<div className="article-root">

				<ul role="nav">
					<li><Link to="/">Home</Link></li>
				</ul>

				<button onClick={this.save}>Save</button>

				<button onClick={this.insertNewBlock}>Insert New Block</button>

				<form onSubmit={this.save}>
					<input type="text" defaultValue={this.state.articleTitle} />
					<input type="text" defaultValue={this.state.contributors.join(', ')}/>
					<input type="text" defaultValue={this.state.tags.join(', ')}/>
          <button type="submit">Save</button>
          {textBlocks}
				</form>

			</div>
		);
	}

}

class TextBlock extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <textarea>
        {this.props.content}
      </textarea>
      );
  }

}

module.exports = Article;