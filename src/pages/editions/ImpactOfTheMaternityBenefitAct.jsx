import articles from "../../data/articles";
import ArticlePage from "../../components/ArticlePage";

const ImpactOfTheMaternityBenefitAct = () => {
  const article = articles.find((a) => a.id === 8 && a.issue === 1); // Serial 8, Issue 1

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

export default ImpactOfTheMaternityBenefitAct;
