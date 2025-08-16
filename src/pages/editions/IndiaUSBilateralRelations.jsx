import articles from "../../data/articles";
import ArticlePage from "../../components/ArticlePage";

const IndiaUSBilateralRelations = () => {
  const article = articles.find((a) => a.id === 14); // ID

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

export default IndiaUSBilateralRelations;
