  import { useState } from "react";
  import { useLocation } from "react-router-dom";
  import { Download } from "lucide-react";
  import articleData from "../data/articles";
  import ResearchCard from "../components/ResearchCard";
  import ResearchEnhancements from "../components/ResearchEnhancements";
  import { generateResearchPDF, downloadPDF } from "../utils/pdfExport";

  const ResearchPage = () => {
    const [researchArticles, setResearchArticles] = useState(articleData);
    const [downloading, setDownloading] = useState(false);
    const location = useLocation();
    const isAdmin = location.pathname.startsWith("/admin");

    const handleDelete = (id) => {
      setResearchArticles((prev) =>
        prev.filter((articles) => articles.id !== id)
      );
    };

    return (
      <div
        className="w-full min-h-screen flex items-center justify-center py-12 px-4"
        style={{
        background: 'linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)',
      }}
      >
        <div className="max-w-4xl w-full">
         
          {/* Heading */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 animate-fadeInUp">
            <h1
              className="text-3xl text-white font-bold font-serif"
            //style={{ color: '#693155ff' }}
            >
              Research Articles
            </h1>
          </div>

          {/* Article List */}
          <div className="grid gap-6 md:grid-cols-1 animate-fadeInUp" >
            {researchArticles.map((articles) => (
              <div
                key={articles.id}
                className="backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition duration-300"
                style={{
                  backgroundColor: "rgba(143, 126, 137, 0.08)", // ✅ light brown
                  color: "#693155ff",
                }}
              >
                <ResearchCard
                  articles={articles}
                  onDelete={isAdmin ? handleDelete : null}
                />
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          /* Buttons with brown background theme */
          button.bg-primary,
          button.bg-primary-dark,
          .btn-brown {
            background-color: #693155ff !important;
            color: white !important;
          }
        `}</style>
      </div>
    );
  };

  export default ResearchPage;
