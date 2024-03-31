import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="markdown-previewer">
      <textarea
        className="markdown-input"
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown here..."
      />
      <div className="markdown-output">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;