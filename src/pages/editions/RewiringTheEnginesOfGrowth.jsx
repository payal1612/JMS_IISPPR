import articles from "../../data/articles";
import ArticlePage from "../../components/ArticlePage";

const RewiringTheEnginesOfGrowth = () => {
  const article = articles.find((a) => a.id === 1 && a.issue===2); // ID

  return article ? (
    <ArticlePage
      id={article.id}
      issue={article.issue}
      volume={article.volume}
      title={article.title}
      author={article.author}
      abstract={article.abstract}
      content={article.content}
      conclusion={article.conclusion}
      references={article.references}
    />
  ) : (
    <p>Article not found</p>
  );
};

export default RewiringTheEnginesOfGrowth;
