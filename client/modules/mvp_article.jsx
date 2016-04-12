"use strict";

import React from 'react';
import { Link } from 'react-router';

class Article extends React.Component {
	
	constructor(props) {
		
    super(props);
		
    this.state = {
      articleTitle: "",
      contributors: [],
      tags: [],
      content: []
    };
    
    this.insertNewBlock = () => {
      let blocks = this.state.content;
      blocks.push('');
      this.setState({content: blocks});
    }

    this.save = (evt) => {
      evt.preventDefault();
      console.log("Save method called");
      console.log(JSON.stringify(this.state));
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
					<input type="text" placeholder="Article Title"/>
					<input type="text" placeholder="Contributor Name"/>
					<input type="text" placeholder="tag1, tag2 ..."/>
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