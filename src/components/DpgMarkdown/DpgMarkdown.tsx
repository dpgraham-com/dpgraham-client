import { Article } from "features/Article";
import React from "react";
import ReactMarkdown from "react-markdown";

interface DpgMarkdownProps {
  article: Article;
}

/**
 * Wrapper around react-markdown library for rendering markdown safely
 * that we apply some default styling to.
 * @param article {Article}
 * @constructor
 */
function DpgMarkdown({ article }: DpgMarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        img: ({ ...props }) => (
          <img style={{ maxWidth: "100%" }} alt="alt description" {...props} />
        ),
      }}
    >
      {article.content.toString()}
    </ReactMarkdown>
  );
}

export default DpgMarkdown;
