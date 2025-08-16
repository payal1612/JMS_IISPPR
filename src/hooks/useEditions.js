import { useState } from 'react';
import initialEditions from '../data/editions';

const useEditions = () => {
  const [editions, setEditions] = useState(initialEditions);

  const addArticleToEdition = (editionId, articleId) => {
    setEditions((prev) => prev.map((e) =>
      e.id === editionId ? { ...e, articles: [...e.articles, articleId] } : e
    ));
  };

  const publishEdition = (editionId) => {
    setEditions((prev) => prev.map((e) =>
      e.id === editionId ? { ...e, published: true } : e
    ));
  };

  return { editions, addArticleToEdition, publishEdition };
};

export default useEditions; 