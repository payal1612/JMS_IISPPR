import articles from "../../data/articles";
import ArticlePage from "../../components/ArticlePage";

const DisplacedByDegree = () => {
  const article = articles.find((a) => a.id === 6 && a.issue === 1); // Serial 6, Issue 1

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
      figures={article.figures}
      tables={article.tables}
      conclusion={article.conclusion}
      acknowledegements={article.acknowledegements}
      references={article.references}
    />
  ) : (
    <p>Article not found</p>
  );
};

export default DisplacedByDegree;
