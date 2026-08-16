import articles from "../../data/articles";
import ArticlePage from "../../components/ArticlePage";

const SovereigntyStrategyAndSystemicStrain = () => {
  const article = articles.find((a) => a.id === 4 && a.issue === 1); // Serial 4, Issue 1

  return article ? (
    <ArticlePage
      id={article.id}
      issue={article.issue}
      volume={article.volume}
      title={article.title}
      author={article.author}
      abstract={article.abstract}
      intro={article.intro}
      content={article.content}
      conclusion={article.conclusion}
      references={article.references}
    />
  ) : (
    <p>Article not found</p>
  );
};

export default SovereigntyStrategyAndSystemicStrain;
