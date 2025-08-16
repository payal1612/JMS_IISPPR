const articles = [
  { id: 1, title: 'AI in Law', author: 'Alice Smith', status: 'Free', summary: 'Exploring AI applications in law.' },
  { id: 2, title: 'Diplomacy in the Digital Age', author: 'John Doe', status: 'Paid', summary: 'Diplomacy in the digital era.' },
  { id: 3, title: 'Public Policy Trends', author: 'Emily Zhang', status: 'Free', summary: 'Trends in public policy.' },
];

const ReaderArticles = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Browse Articles</h1>
    <div className="grid md:grid-cols-2 gap-6">
      {articles.map(a => (
        <div key={a.id} className="bg-white rounded shadow p-4 border border-blue-100">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-blue-900">{a.title}</span>
            <span className={`text-xs px-2 py-1 rounded ${a.status === 'Free' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'} ml-2`}>{a.status}</span>
          </div>
          <div className="text-gray-600 text-sm mb-1">By {a.author}</div>
          <div className="text-gray-700 text-sm mb-2">{a.summary}</div>
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs">{a.status === 'Free' ? 'Read/Download' : 'Pay & Access'}</button>
        </div>
      ))}
    </div>
  </div>
);

export default ReaderArticles; 