import marked from "marked";
import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

class Markdown extends React.PureComponent {
  state = { markdown: "" };

  componentDidMount() {
    const readmePath = require("../markdowns/" + this.props.md);

    fetch(readmePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        this.setState({
          markdown: marked(text),
        });
      });
  }

  render() {
    return (
      <ReactMarkdown
        source={this.state.markdown}
        renderers={{
          code: CodeBlock,
        }}
        escapeHtml={false}
      />
    );
  }
}

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Markdown;
