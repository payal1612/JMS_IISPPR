const myArticles = [
  { id: 1, title: 'AI in Law', status: 'Published', keywords: ['AI', 'Law'], abstract: 'Exploring AI applications in law.' },
  { id: 2, title: 'Legal Tech for Students', status: 'Under Review', keywords: ['Legal Tech', 'Students'], abstract: 'How legal tech is empowering students.' },
  { id: 3, title: 'Policy and Diplomacy', status: 'Draft', keywords: ['Policy', 'Diplomacy'], abstract: 'The intersection of policy and diplomacy.' },
];

const AuthorArticles = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">My Articles</h1>
    <div className="space-y-4">
      {myArticles.map(article => (
        <div key={article.id} className="bg-white rounded shadow p-4 border border-blue-100">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-blue-900">{article.title}</span>
            <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 ml-2">{article.status}</span>
          </div>
          <div className="text-gray-600 text-sm mb-1">Keywords: {article.keywords.join(', ')}</div>
          <div className="text-gray-700 text-sm">{article.abstract}</div>
        </div>
      ))}
    </div>
  </div>
);

export default AuthorArticles; 