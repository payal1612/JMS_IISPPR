import articles from "../../data/articles";
import ArticlePage from "../../components/ArticlePage";

const ScriptsSymbolsSoftPower = () => {
  const article = articles.find((a) => a.id === 9); // ID 9

  return article ? (
    <ArticlePage
      id={article.id}
      issue={article.issue}
      volume={article.volume}
      title={article.title}
      author={article.author}
      authorAbbrev={article.authorAbbrev}
      abstract={article.abstract}
      keyword={article.keyword}
      intro={article.intro}
      content={article.content}
      conclusion={article.conclusion}
      references={article.references}
    />
  ) : (
    <p>Article not found</p>
  );
};

export default ScriptsSymbolsSoftPower;
