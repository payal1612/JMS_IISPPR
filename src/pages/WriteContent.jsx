import { useState } from 'react';
import { FileText, Edit3 } from 'lucide-react';

const WriteContent = () => {
  const [tab, setTab] = useState('paper');
  const [success, setSuccess] = useState('');
  const [paperForm, setPaperForm] = useState({ title: '', abstract: '', keywords: '', pdf: null });
  const [blogForm, setBlogForm] = useState({ title: '', content: '', image: null });

  const handlePaperChange = (e) => {
    const { name, value, files } = e.target;
    setPaperForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };
  const handleBlogChange = (e) => {
    const { name, value, files } = e.target;
    setBlogForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handlePaperSubmit = (e) => {
    e.preventDefault();
    setSuccess('Research paper submitted successfully!');
    setPaperForm({ title: '', abstract: '', keywords: '', pdf: null });
    setTimeout(() => setSuccess(''), 3000);
  };
  const handleBlogSubmit = (e) => {
    e.preventDefault();
    setSuccess('Blog post submitted successfully!');
    setBlogForm({ title: '', content: '', image: null });
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 mt-10">
      <div className="flex gap-4 mb-8 justify-center">
        <button
          className={`flex items-center gap-2 px-6 py-2 rounded-t-xl font-semibold shadow-sm transition-all duration-200 ${tab === 'paper' ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-900 shadow-md' : 'bg-gray-50 text-gray-500 hover:bg-blue-50'}`}
          onClick={() => setTab('paper')}
        >
          <FileText className="w-5 h-5" /> Research Paper
        </button>
        <button
          className={`flex items-center gap-2 px-6 py-2 rounded-t-xl font-semibold shadow-sm transition-all duration-200 ${tab === 'blog' ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-pink-900 shadow-md' : 'bg-gray-50 text-gray-500 hover:bg-pink-50'}`}
          onClick={() => setTab('blog')}
        >
          <Edit3 className="w-5 h-5" /> Blog
        </button>
      </div>
      <div className="bg-white/90 rounded-2xl shadow-xl p-8 border border-blue-50">
        {success && <div className="mb-4 bg-green-50 border border-green-200 text-green-800 rounded p-3 text-center font-medium shadow">{success}</div>}
        {tab === 'paper' ? (
          <form className="space-y-6" onSubmit={handlePaperSubmit}>
            <div>
              <label className="block font-semibold mb-1 text-blue-900">Title</label>
              <input name="title" value={paperForm.title} onChange={handlePaperChange} className="w-full border border-blue-100 rounded-lg px-3 py-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-blue-900">Abstract</label>
              <textarea name="abstract" value={paperForm.abstract} onChange={handlePaperChange} className="w-full border border-blue-100 rounded-lg px-3 py-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200" rows={3} />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-blue-900">Keywords <span className="font-normal text-gray-400">(comma separated)</span></label>
              <input name="keywords" value={paperForm.keywords} onChange={handlePaperChange} className="w-full border border-blue-100 rounded-lg px-3 py-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-blue-900">PDF Upload</label>
              <input name="pdf" type="file" accept="application/pdf" onChange={handlePaperChange} className="w-full text-blue-700" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition">Submit Paper</button>
          </form>
        ) : (
          <form className="space-y-6" onSubmit={handleBlogSubmit}>
            <div>
              <label className="block font-semibold mb-1 text-pink-900">Title</label>
              <input name="title" value={blogForm.title} onChange={handleBlogChange} className="w-full border border-pink-100 rounded-lg px-3 py-2 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-200" />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-pink-900">Content</label>
              <textarea name="content" value={blogForm.content} onChange={handleBlogChange} className="w-full border border-pink-100 rounded-lg px-3 py-2 bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-200" rows={5} />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-pink-900">Image Upload <span className="font-normal text-gray-400">(optional)</span></label>
              <input name="image" type="file" accept="image/*" onChange={handleBlogChange} className="w-full text-pink-700" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-pink-700 hover:to-purple-700 transition">Submit Blog</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default WriteContent; 