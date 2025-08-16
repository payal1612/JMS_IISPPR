const reviews = [
  { id: 1, article: 'AI in Law', feedback: 'Needs more references.', status: 'Pending' },
  { id: 2, article: 'Diplomacy in the Digital Age', feedback: 'Well structured.', status: 'Completed' },
];

const ReviewerReviews = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">My Reviews</h1>
    <div className="space-y-4">
      {reviews.map(r => (
        <div key={r.id} className="bg-white rounded shadow p-4 border border-blue-100">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-blue-900">{r.article}</span>
            <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 ml-2">{r.status}</span>
          </div>
          <div className="text-gray-700 text-sm">{r.feedback}</div>
        </div>
      ))}
    </div>
  </div>
);

export default ReviewerReviews; 