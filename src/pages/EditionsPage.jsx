import React, { useState } from "react";
import { Download } from "lucide-react";
import { generateArticlePDF, downloadPDF } from "../utils/pdfExport";
import { useLocation,useNavigate, } from "react-router-dom";
import articleData from "../data/articles";
import ResearchCard from "../components/ResearchCard";
import articles from "../data/articles";
import ResearchEnhancements from "../components/ResearchEnhancements";
// import WatermarkInfo from "../components/WatermarkInfo";
import { motion } from "framer-motion";
import FilterDropdown from "../components/FilterDropdown";
import Issues from "./issues/Issues";

const EditionsPage = () => {
  const [downloading, setDownloading] = useState({});
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  const [selectedIssue, setSelectedIssue] = useState("All");
  const [selectedVolume, setSelectedVolume] = useState("All");

 
  const handleDelete = (id) => {
    // Note: Delete functionality would be implemented here
    console.log('Delete article with id:', id);
  };

  const handleDownloadAllIndividually = async () => {
    setDownloading({ all: true });

    try {
      console.log('Starting batch PDF generation with watermarks for', articles.length, 'articles');
      
      for (const article of articles) {
        console.log(`Generating PDF with watermarks for Serial ${article.serialNumber}...`);
        
        const pdf = await generateArticlePDF(article);

        const sanitizedTitle = (article.title || "Untitled")
          .replace(/[^a-zA-Z0-9\s]/g, "")
          .replace(/\s+/g, "_")
          .substring(0, 50);

        // Enhanced filename with watermark indicator
        const filename = `LDTPPR_WM_Serial${article.serialNumber}_${sanitizedTitle}.pdf`;

        downloadPDF(pdf, filename);
        
        // Add small delay between downloads to prevent browser blocking
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      console.log('All PDFs generated successfully with watermarks');
    } catch (error) {
      console.error("Error downloading article PDFs:", error);
      alert("Error downloading PDFs. Please try again.");
    } finally {
      setDownloading({ all: false });
    }
  };

  const filteredArticles = articleData.filter((article) => {
    if (selectedIssue === "All") return true;
    if (selectedVolume === "All")
      return String(article.issue) === String(selectedIssue);
    return (
      String(article.issue) === String(selectedIssue) &&
      String(article.volume) === String(selectedVolume)
    );
  });

  const navigate = useNavigate();
  return (
    <div
      className="relative min-h-screen text-white grid gap-4"
      style={{
        background:
          "linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)",
      }}
    >
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white py-12 text-center"
        style={{
          background: "linear-gradient(to right, #482742ff)",
        }}
      >
        <h1 className="text-4xl font-bold font-serif mb-2">Journal Issues</h1>
        <p className="text-accent-light max-w-2xl mx-auto px-4 mb-4">
          Explore our latest research publications and journal editions
        </p>
        <div className="flex justify-center">
          {/* <WatermarkInfo /> */}
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header with Filter + Download */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2
              className="text-2xl font-serif font-semibold"
              style={{ color: "#ffffff" }}
            >
              Journal Issues
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 items-center">


{/* use this in future if you want to add filter or download button. Juss change them according to your needs, redited from /src/components/FilterDropDown.jsx */}


              {/* <FilterDropdown
                articleData={articleData}
                onIssueSelect={(issue) => setSelectedIssue(issue)}
                onVolumeSelect={(volume) => setSelectedVolume(volume)}
              /> */}

              {/* <motion.button
                onClick={handleDownloadAllIndividually}
                disabled={downloading.all}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-4 py-2 font-medium rounded-lg transition disabled:opacity-50 shadow-md"
                style={{
                  backgroundColor: "#482742ff",
                  color: "white",
                }}
                title="Download all articles as individual PDFs with watermarks"
              >
                <Download className="w-4 h-4 mr-2" />
                {downloading.all ? "Generating..." : "Download All Issues"}
                <span className="text-xs opacity-75 ml-1"></span>
              </motion.button> */}




              
            </div>
          </div>

          {/* Issues Container
          <Issues
        onIssueClick={(issueTitle) => {
          const issueNumber = issueTitle.match(/Issue:\s*(\d+)/)?.[1];
          if (issueNumber) {
            navigate(`/editions/${issueNumber}`);
          }
        }} 
      /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default EditionsPage;
