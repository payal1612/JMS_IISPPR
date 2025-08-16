import { useState } from "react";
import { useLocation } from "react-router-dom";
import blogsData from "../data/blogs";
import BlogCard from "../components/BlogCard";

const BlogPage = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const handleDelete = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  return (
    <div className="bg-primary-light/25 w-full min-h-screen flex items-center justify-center">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold font-serif text-primary-dark mb-8">
          Blog
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-sm border border-accent-light rounded-lg p-6 flex flex-col gap-2 hover:border-primary hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-medium">
                  {blog.author}
                </span>
                <span className="text-primary/50 text-xs">
                  {new Date(blog.date).toLocaleDateString()}
                </span>
              </div>
              <h2 className="text-xl font-bold text-primary-dark font-serif mb-1">
                {blog.title}
              </h2>
              <div className="text-subtext text-base leading-relaxed mb-2">
                {blog.summary}
              </div>
              <button className="self-start mt-auto text-sm font-semibold text-accent hover:text-accent-dark hover:underline transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
