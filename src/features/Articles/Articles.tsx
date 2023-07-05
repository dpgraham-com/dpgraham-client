import { ArticleList } from "components/ArticleList";
import { MarkdownArticle } from "components/MarkdownArticle";
import React from "react";
import { Route, Routes } from "react-router-dom";

export interface Article {
  id: number;
  title: string;
  updateDate: Date;
  createDate: string;
  content: string;
}

export function Articles() {
  return (
    <Routes>
      <Route path="" element={<ArticleList />} />
      <Route path=":id" element={<MarkdownArticle />} />
    </Routes>
  );
}
