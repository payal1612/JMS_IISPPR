const articles = [
  { id: 1, title: 'AI in Law', author: 'Alice Smith', status: 'Published' },
  { id: 2, title: 'Diplomacy in the Digital Age', author: 'John Doe', status: 'Under Review' },
  { id: 3, title: 'Public Policy Trends', author: 'Emily Zhang', status: 'Draft' },
];

const editions = [
  { id: 1, volume: 'Vol. 1', date: '2024-01-01', articles: 5 },
  { id: 2, volume: 'Vol. 2', date: '2024-06-01', articles: 3 },
];

const settings = {
  journalName: 'Law, Diplomacy, Tech & Public Policy Review',
  issn: '1234-5678',
  contact: 'iisppresearch@gmail.com',
};

const users = [
  { id: 1, name: 'Alice Smith', email: 'alice@email.com', role: 'Author' },
  { id: 2, name: 'John Doe', email: 'john@email.com', role: 'Editor' },
  { id: 3, name: 'Emily Zhang', email: 'emily@email.com', role: 'Reviewer' },
  { id: 4, name: 'Super Admin', email: 'admin@email.com', role: 'Admin' },
];

const AdminDashboard = () => (
  <div className="p-4 sm:p-6 space-y-8 sm:space-y-10">
    <h1 className="text-xl sm:text-2xl font-bold mb-4">Super Admin Dashboard</h1>

    {/* Articles */}
    <section>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Articles</h2>
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

    {/* Editions */}
    <section>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Editions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Volume</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2"># Articles</th>
            </tr>
          </thead>
          <tbody>
            {editions.map((e) => (
              <tr key={e.id} className="border-t">
                <td className="px-4 py-2">{e.id}</td>
                <td className="px-4 py-2">{e.volume}</td>
                <td className="px-4 py-2">{e.date}</td>
                <td className="px-4 py-2">{e.articles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Settings */}
    <section>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Settings</h2>
      <div className="bg-white border rounded shadow p-4 w-full max-w-md">
        <div className="mb-2">
          <strong>Journal Name:</strong> {settings.journalName}
        </div>
        <div className="mb-2">
          <strong>ISSN:</strong> {settings.issn}
        </div>
        <div>
          <strong>Contact:</strong> {settings.contact}
        </div>
      </div>
    </section>

    {/* Manage Users */}
    <section>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="px-4 py-2">{u.id}</td>
                <td className="px-4 py-2">{u.name}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2">{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
);

export default AdminDashboard;
