import { useLocation } from 'react-router-dom';

const myArticles = [
  { id: 1, title: 'AI in Law', status: 'Published', keywords: ['AI', 'Law'], abstract: 'Exploring AI applications in law.' },
  { id: 2, title: 'Legal Tech for Students', status: 'Under Review', keywords: ['Legal Tech', 'Students'], abstract: 'How legal tech is empowering students.' },
  { id: 3, title: 'Policy and Diplomacy', status: 'Draft', keywords: ['Policy', 'Diplomacy'], abstract: 'The intersection of policy and diplomacy.' },
];

const AuthorDashboard = () => {
  const location = useLocation();
  const submitted = location.state && location.state.submitted;

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Author Dashboard</h1>

      {submitted && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-800 rounded p-3 text-sm sm:text-base">
          Article Submitted Successfully!
        </div>
      )}

      <h2 className="text-lg sm:text-xl font-semibold mb-3">My Articles</h2>

      <div className="space-y-4">
        {myArticles.length === 0 ? (
          <div className="text-gray-500">No articles submitted yet.</div>
        ) : (
          myArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded shadow p-4 border border-blue-100 space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="font-semibold text-blue-900">{article.title}</span>
                <span className="text-xs sm:text-sm px-2 py-1 rounded bg-blue-100 text-blue-700 mt-1 sm:mt-0">
                  {article.status}
                </span>
              </div>
              <div className="text-gray-600 text-sm">
                <strong>Keywords:</strong> {article.keywords.join(', ')}
              </div>
              <div className="text-gray-700 text-sm">{article.abstract}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AuthorDashboard;
