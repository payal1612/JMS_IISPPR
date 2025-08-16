import { useState } from 'react';
import useArticles from '../../hooks/useArticles';

const reviews = [
  { id: 1, article: 'AI in Law', reviewer: 'Emily Zhang', feedback: 'Well written, needs more citations.', status: 'Pending' },
  { id: 2, article: 'Diplomacy in the Digital Age', reviewer: 'Michael Brown', feedback: 'Good analysis.', status: 'Completed' },
];

const settings = {
  editorialEmail: 'editor@email.com',
  reviewDeadline: '14 days',
};

const EditorDashboard = () => {
  const { articles, updateArticleStatus } = useArticles();
  const [alert, setAlert] = useState(null);

  const handleAction = (id, action) => {
    updateArticleStatus(id, action === 'approve' ? 'Approved' : 'Rejected');
    setAlert({
      type: action === 'approve' ? 'success' : 'error',
      message: action === 'approve' ? 'Article approved.' : 'Article rejected and author notified.',
    });
    setTimeout(() => setAlert(null), 3000);
  };

  const submittedArticles = articles.filter((a) => a.status === 'Submitted');

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold mb-4">Editor Dashboard</h1>

      {alert && (
        <div
          className={`mb-4 rounded p-3 border ${
            alert.type === 'success'
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-red-50 border-red-200 text-red-800'
          }`}
        >
          {alert.message}
        </div>
      )}

      {/* All Articles */}
      <section>
        <h2 className="text-xl font-semibold mb-2">All Articles</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded shadow text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Author</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => (
                <tr key={a.id} className="border-t">
                  <td className="px-4 py-2">{a.id}</td>
                  <td className="px-4 py-2">{a.title}</td>
                  <td className="px-4 py-2">{a.author}</td>
                  <td className="px-4 py-2">{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Reviews */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Reviews</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded shadow text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Article</th>
                <th className="px-4 py-2">Reviewer</th>
                <th className="px-4 py-2">Feedback</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((r) => (
                <tr key={r.id} className="border-t">
                  <td className="px-4 py-2">{r.id}</td>
                  <td className="px-4 py-2">{r.article}</td>
                  <td className="px-4 py-2">{r.reviewer}</td>
                  <td className="px-4 py-2">{r.feedback}</td>
                  <td className="px-4 py-2">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Settings */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Settings</h2>
        <div className="bg-white border rounded shadow p-4 max-w-md">
          <div>
            <b>Editorial Email:</b> {settings.editorialEmail}
          </div>
          <div>
            <b>Review Deadline:</b> {settings.reviewDeadline}
          </div>
        </div>
      </section>

      {/* Submitted Articles */}
      <section>
        <h2 className="text-lg font-semibold mb-2">Submitted Articles (Action Required)</h2>
        <div className="space-y-4">
          {submittedArticles.length === 0 ? (
            <div className="text-gray-500">No articles awaiting review.</div>
          ) : (
            submittedArticles.map((article) => (
              <div key={article.id} className="bg-white rounded shadow p-4 border border-blue-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-blue-900">{article.title}</span>
                  <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 ml-2">
                    {article.status}
                  </span>
                </div>
                <div className="text-gray-600 text-sm mb-1">By {article.author}</div>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleAction(article.id, 'approve')}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleAction(article.id, 'reject')}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default EditorDashboard;
