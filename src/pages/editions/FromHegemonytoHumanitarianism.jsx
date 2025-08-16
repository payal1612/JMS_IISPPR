import articles from "../../data/articles";
import ArticlePage from "../../components/ArticlePage";

const FromHegemonytoHumanitarianism = () => {
  const article = articles.find((a) => a.id === 2 && a.issue === 4); // ID 2, Issue 4

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

export default FromHegemonytoHumanitarianism;