"use strict";

import React from 'react';
import { Link } from 'react-router';

class Article extends React.Component {
	
	constructor(props) {
		
    super(props);
		
    this.state = {
      articleTitle: "Article Title",
      contributors: ["Contributor 1", "Contributor 2", "..."],
      tags: ["Tag1", "Tag2", "..."],
      content: ["Type your article here."]
    };
    
    this.insertNewBlock = () => {
      let blocks = this.state.content;
      blocks.push('');
      this.setState({content: blocks});
    }

    this.updateTextBlock = (index, content) => {
      oldContent = this.state.content;
      oldContent[index] = content;
      this.setState({content: oldContent});
    }

    this.save = (evt) => {
      evt.preventDefault();
      console.log("Save method called");
      console.log(evt, evt.target);
      // $.post('/articles', JSON.stringify(this.state));
    }

  }

	render() {

    let textBlockIndex = -1;

    let textBlocks = this.state.content.map(content => {
      textBlockIndex++;
      return <TextBlock content={content} index={textBlockIndex} onChange={(index, content) => this.updateTextBlock} />
    });

		return (
			<div className="article-root">

				<ul role="nav">
					<li><Link to="/">Home</Link></li>
				</ul>

				<button onClick={this.insertNewBlock}>Insert New Block</button>

				<form onSubmit={this.save}>
					<input type="text" value={this.state.articleTitle} />
					<input type="text" value={this.state.contributors.join(', ')}/>
					<input type="text" value={this.state.tags.join(', ')}/>
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