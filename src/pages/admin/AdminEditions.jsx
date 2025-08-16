const editions = [
  { id: 1, volume: 'Vol. 1', date: '2024-01-01', articles: 5 },
  { id: 2, volume: 'Vol. 2', date: '2024-06-01', articles: 3 },
];

const AdminEditions = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">All Editions</h1>
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
          {editions.map(e => (
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
  </div>
);

export default AdminEditions; 