import React from "react";
import { useParams } from "react-router-dom";
import ResearchCard from "../../components/ResearchCard"; 
import articleData from "../../data/articles"; 

const FilteredIssuePage = () => {
  const { issueId } = useParams();

  const filteredArticles = articleData.filter(
    (article) => String(article.issue) === issueId
  );

  return (
    <div className="min-h-screen p-8"
    style={{
    background: 'linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)',
  }}>
      <h2 className="text-3xl text-white mb-6">
        July 2026 Issue {issueId}
      </h2>

      <div className="grid gap-6">
        {filteredArticles.length ? (
          filteredArticles.map((article) => (
            <ResearchCard key={article.id} articles={article} />
          ))
        ) : (
          <p className="text-white">No articles found for this issue.</p>
        )}
      </div>
    </div>
  );
};

export default FilteredIssuePage;
