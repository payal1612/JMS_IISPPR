const BlogCard = ({ blog, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-blue-100 hover:shadow-2xl transition flex flex-col gap-3">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl font-bold text-blue-900">{blog.title}</h2>
        {onDelete && (
          <button
            onClick={() => onDelete(blog.id)}
            className="text-red-600 hover:text-red-800 bg-red-50 border border-red-200 rounded px-3 py-1 text-sm font-semibold transition"
          >
            Delete
          </button>
        )}
      </div>
      <div className="flex items-center gap-3 mb-1">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{blog.author}</span>
        <span className="text-gray-400 text-xs">{new Date(blog.date).toLocaleDateString()}</span>
      </div>
      <div className="text-gray-700 text-base leading-relaxed">{blog.summary}</div>
    </div>
  );
};

export default BlogCard; 