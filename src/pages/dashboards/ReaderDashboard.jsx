import React from 'react';

const articles = [
  { id: 1, title: 'AI in Law', author: 'Alice Smith', status: 'Free', summary: 'Exploring AI applications in law.' },
  { id: 2, title: 'Diplomacy in the Digital Age', author: 'John Doe', status: 'Paid', summary: 'Diplomacy in the digital era.' },
  { id: 3, title: 'Public Policy Trends', author: 'Emily Zhang', status: 'Free', summary: 'Trends in public policy.' },
];

const blogs = [
  { id: 1, title: 'How to Write a Research Paper', author: 'Admin', date: '2024-06-01', summary: 'Tips for writing effective research papers.' },
  { id: 2, title: 'The Future of Legal Tech', author: 'Editor', date: '2024-05-20', summary: 'Legal tech trends and predictions.' },
  { id: 3, title: 'Student Voices in Policy', author: 'Alice Smith', date: '2024-05-10', summary: 'Empowering students in policy debates.' },
  { id: 4, title: 'Open Access Publishing', author: 'Emily Zhang', date: '2024-04-15', summary: 'The pros and cons of open access.' },
];

const ReaderDashboard = () => (
  <div className="p-6 space-y-10">
    <h1 className="text-2xl font-bold mb-4">Reader Dashboard</h1>

    {/* Browse Articles */}
    <section>
      <h2 className="text-xl font-semibold mb-2">Browse Articles</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((a) => (
          <div key={a.id} className="bg-white rounded shadow p-4 border border-blue-100">
            <div className="flex justify-between items-center mb-1">
              <span className="font-semibold text-blue-900">{a.title}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  a.status === 'Free'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                } ml-2`}
              >
                {a.status}
              </span>
            </div>
            <div className="text-gray-600 text-sm mb-1">By {a.author}</div>
            <div className="text-gray-700 text-sm mb-2">{a.summary}</div>
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs">
              {a.status === 'Free' ? 'Read/Download' : 'Pay & Access'}
            </button>
          </div>
        ))}
      </div>
    </section>

    {/* More Blogs */}
    <section>
      <h2 className="text-xl font-semibold mb-2">More Blogs to Read</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((b) => (
          <div key={b.id} className="bg-white rounded shadow p-4 border border-blue-100">
            <div className="font-semibold text-blue-900 text-lg mb-1">{b.title}</div>
            <div className="text-gray-500 text-xs mb-1">
              By {b.author} &middot; {b.date}
            </div>
            <div className="text-gray-700 text-sm mb-2">{b.summary}</div>
            <button className="text-blue-700 hover:underline text-xs">Read Blog</button>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default ReaderDashboard;
