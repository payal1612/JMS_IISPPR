const reviews = [
  { id: 1, article: 'AI in Law', reviewer: 'Emily Zhang', feedback: 'Well written, needs more citations.', status: 'Pending' },
  { id: 2, article: 'Diplomacy in the Digital Age', reviewer: 'Michael Brown', feedback: 'Good analysis.', status: 'Completed' },
];

const EditorReviews = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Review Assignments</h1>
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
          {reviews.map(r => (
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
  </div>
);

export default EditorReviews; 