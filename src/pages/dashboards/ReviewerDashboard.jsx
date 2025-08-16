import React from 'react';

const reviews = [
  { id: 1, article: 'AI in Law', feedback: 'Needs more references.', status: 'Pending' },
  { id: 2, article: 'Diplomacy in the Digital Age', feedback: 'Well structured.', status: 'Completed' },
];

const ReviewerDashboard = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Reviewer Dashboard</h1>

    <h2 className="text-lg font-semibold mb-2">My Reviews</h2>
    <div className="space-y-4">
      {reviews.length === 0 ? (
        <div className="text-gray-500">No reviews assigned yet.</div>
      ) : (
        reviews.map((r) => (
          <div key={r.id} className="bg-white rounded shadow p-4 border border-blue-100">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-blue-900">{r.article}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  r.status === 'Completed'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                } ml-2`}
              >
                {r.status}
              </span>
            </div>
            <div className="text-gray-700 text-sm">{r.feedback}</div>
          </div>
        ))
      )}
    </div>
  </div>
);

export default ReviewerDashboard;
