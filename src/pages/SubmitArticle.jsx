import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useArticles from '../hooks/useArticles';

const SubmitArticle = () => {
  const { addArticle } = useArticles();
  const [form, setForm] = useState({ title: '', abstract: '', keywords: '', pdf: null });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.abstract || !form.keywords || !form.pdf) {
      setError('All fields are required.');
      return;
    }
    addArticle({
      title: form.title,
      abstract: form.abstract,
      keywords: form.keywords.split(','),
      pdfUrl: form.pdf.name,
      author: 'Alice Smith', // Dummy author
    });
    navigate('/author', { state: { submitted: true } });
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-8 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Submit New Article</h1>
      {error && <div className="mb-4 text-red-600 bg-red-50 border border-red-200 rounded p-2">{error}</div>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input name="title" value={form.title} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Abstract</label>
          <textarea name="abstract" value={form.abstract} onChange={handleChange} className="w-full border rounded px-3 py-2" rows={3} />
        </div>
        <div>
          <label className="block font-medium mb-1">Keywords (comma separated)</label>
          <input name="keywords" value={form.keywords} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">PDF Upload</label>
          <input name="pdf" type="file" accept="application/pdf" onChange={handleChange} className="w-full" />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Submit Article</button>
      </form>
    </div>
  );
};

export default SubmitArticle; 