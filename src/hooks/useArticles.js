import { useState } from 'react';
import initialArticles from '../data/articles';

const useArticles = () => {
  const [articles, setArticles] = useState(initialArticles);

  const addArticle = (article) => {
    setArticles((prev) => [
      ...prev,
      { ...article, id: Date.now(), status: 'Submitted', assignedReviewers: [], feedback: [] },
    ]);
  };

  const updateArticleStatus = (id, status) => {
    setArticles((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
  };

  const assignReviewers = (id, reviewers) => {
    setArticles((prev) => prev.map((a) => (a.id === id ? { ...a, assignedReviewers: reviewers, status: 'Under Review' } : a)));
  };

  const addFeedback = (id, reviewer, feedback) => {
    setArticles((prev) => prev.map((a) =>
      a.id === id
        ? { ...a, feedback: [...a.feedback, { reviewer, ...feedback }] }
        : a
    ));
  };

  const reviseArticle = (id, revision) => {
    setArticles((prev) => prev.map((a) =>
      a.id === id
        ? { ...a, ...revision, status: 'Revised' }
        : a
    ));
  };

  return { articles, addArticle, updateArticleStatus, assignReviewers, addFeedback, reviseArticle };
};

export default useArticles; 