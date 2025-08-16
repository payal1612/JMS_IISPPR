const articles = [
  { id: 1, title: 'AI in Law', author: 'Alice Smith', status: 'Submitted' },
  { id: 2, title: 'Diplomacy in the Digital Age', author: 'John Doe', status: 'Under Review' },
];

const EditorArticles = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Articles to Review</h1>
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
          {articles.map(a => (
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
  </div>
);

export default EditorArticles; 