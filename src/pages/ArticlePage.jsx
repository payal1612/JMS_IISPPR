import { useParams } from "react-router-dom";
import articleData from "../data/articles";

const ArticlePage = () => {
  const { articleSlug } = useParams();

  const article = articleData.find(
    (a) => a.title.toLowerCase().replace(/\s+/g, "-") === articleSlug
  );

  if (!article) {
    return <div className="text-center text-red-600">Article not found.</div>;
  }

  // Sections to loop through
  const sections = [
    { title: "1. Introduction", content: article.intro },
    {
      title: "2. Background and Literature Review",
      content: article.bgReview,
    },
    {
      title: "3. Trends in Women’s Labor Force Participation (2014–2024)",
      content: article.trends,
    },
    {
      title: "4. Regional and Sectoral Disparities",
      content: article.regionalDisparities,
    },
    {
      title: "5. Employer Responses and Return-to-Work Challenges",
      content: article.challenges,
    },
    {
      title: "6. Psychological Aspects and Return-to-Work Realities",
      content: article.psychologicalAspects,
    },
    { title: "7. Additional Insights", content: article.insights },
    {
      title: "8. Conclusion and Policy Recommendations",
      content: article.conclusion,
    },
  ];

  const contributions = [
    { label: "Introduction", key: "Introduction" },
    { label: "Background", key: "Background" },
    { label: "Literature Review", key: "Literature" },
    {
      label: "Trends in Women’s Labor Force Participation",
      key: "Trends",
    },
    { label: "Regional and Sectoral Disparities", key: "Disparities" },
    {
      label: "Employer Responses and Return-to-Work Challenges",
      key: "Challenges",
    },
    {
      label: "Psychological Aspects and Return-to-Work Realities",
      key: "Realities",
    },
    { label: "Additional Insights", key: "Insights" },
    { label: "Conclusion", key: "Conclusion" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-900">{article.title}</h1>
      <p className="text-xl text-gray-700">By {article.author}</p>

      {sections.map((sec, index) => (
        <section
          key={index}
          className="text-gray-800 font-medium leading-relaxed mb-6"
        >
          <h2 className="font-bold text-black text-xl mb-2">{sec.title}</h2>
          {sec.content.map((para, idx) => (
            <p key={idx} className="mb-4">
              {para}
            </p>
          ))}
        </section>
      ))}

      <section className="text-gray-900 leading-relaxed">
        <h2 className="font-bold text-black text-xl mb-2">Contributions</h2>
        <div className="space-y-1">
          {contributions.map((item) => (
            <p className="text-gray-900 font-medium" key={item.key}>
              <span className="font-bold">{item.label} - </span>
              {article.contri[item.key]}
            </p>
          ))}
        </div>
      </section>

      <section className="text-gray-700 leading-relaxed">
        <h2 className="font-bold text-black text-xl mb-2">References</h2>
        <ul className="list-disc list-inside space-y-1">
          {Object.entries(article.ref).map(([key, refItem]) => (
            <li key={key}>
              <a
                href={refItem.toUrl}
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                {refItem.urlText}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ArticlePage;
