import React, { Component } from 'react';
import './App.scss';
let marked = require("marked");

class App extends Component {
    constructor(props){
    super();
        this.state = {
        markdown : "# Heading\n## Sub-heading\n\n[This is a link.](https://www.freecodecamp.org)\n\n`This is inline code.`\n\n```\nThis is a code block.\n```\n\nThis is a list:\n* item 1\n* item 2\n* item 3\n\n> This is a blockquote.\n\n![Image](https://raw.githubusercontent.com/Johnny2136/FCC-Projects/master/images/images.png)\n\n**This is bolded text.**'"
    }
    this.handleChange =this.handleChange.bind(this);
}
    handleChange(event) {
        this.setState ({markdown: event.target.value});
    }

    render () {
        const renderer = new marked.Renderer();
        renderer.link = (href, title, text) => `<a href "${href}" target ="_blank">${text}</a>`
        return (
            <div>
                <h1 className="heading">Markdown Editor/Previewer</h1>
                <div className="container">
                    <div id="editor-window" title="editor window" className="outer-window">
                        <h1 className="window-heading">Markdown Input</h1>
                        <textarea 
                            placeholder="Enter Markdown" 
                            rows="40" 
                            value={this.state.markdown} 
                            id="editor" 
                            onChange= {(event) => this.handleChange(event)}>
                        </textarea>
                    </div>
                    <div title="previewer window" className="outer-window">
                        <h1 className="window-heading">Markdown Output</h1>
                        <div id="preview" dangerouslySetInnerHTML = {{ __html: marked(this.state.markdown, {breaks: true, renderer})}}>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}

export default App;