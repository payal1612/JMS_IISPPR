import React, { useState } from "react";
import { ZoomIn, X, Maximize2, Table as TableIcon, Download, Loader2, FileText } from "lucide-react";
import articlesData from "../data/articles";
import { generateArticlePDF, downloadPDF } from "../utils/pdfExport";

// Enhanced Academic Table Component
const AcademicTable = ({ table }) => {
  if (!table) return null;

  const headers = table.headers || [];
  const rows = table.rows || [];

  return (
    <div className="my-8 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden font-sans">
      <div className="bg-slate-50 border-b border-gray-200 px-4 py-3 sm:px-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <TableIcon className="w-4 h-4 text-new-primary flex-shrink-0" />
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 tracking-tight">
            {table.title || `Table: ${table.id || ""}`}
          </h3>
        </div>
        {table.id && (
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-gray-200/70 text-gray-700">
            {table.id.toUpperCase()}
          </span>
        )}
      </div>

      <div className="overflow-x-auto max-w-full">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100/90 text-gray-800 border-b border-gray-300">
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="py-3 px-3 sm:px-4 font-semibold whitespace-nowrap border-r border-gray-200 last:border-r-0"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700 font-normal">
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={
                  rIdx % 2 === 0
                    ? "bg-white hover:bg-slate-50/80 transition-colors"
                    : "bg-slate-50/50 hover:bg-slate-100/80 transition-colors"
                }
              >
                {Array.isArray(row) ? (
                  row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="py-2.5 px-3 sm:px-4 align-top leading-relaxed border-r border-gray-200 last:border-r-0"
                    >
                      {cell}
                    </td>
                  ))
                ) : (
                  <td
                    colSpan={headers.length || 1}
                    className="py-2.5 px-3 sm:px-4 align-top leading-relaxed"
                  >
                    {String(row)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.note && (
        <div className="bg-slate-50/80 border-t border-gray-200 px-4 py-2 text-xs text-gray-500 italic">
          Note: {table.note}
        </div>
      )}
    </div>
  );
};

// Academic Figure / Image Component with Click to Enlarge Lightbox
const AcademicFigure = ({ figure, onZoom }) => {
  if (!figure || (!figure.dataUri && !figure.src && !figure.url)) return null;
  const imgSrc = figure.dataUri || figure.src || figure.url;

  return (
    <figure className="my-8 flex flex-col items-center font-sans">
      <div
        onClick={() => onZoom(figure)}
        className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition-all duration-300 hover:shadow-md hover:border-new-primary/50 max-w-full"
      >
        <img
          src={imgSrc}
          alt={figure.caption || "Article Figure"}
          className="max-h-[500px] w-auto max-w-full rounded-lg object-contain transition-transform duration-300 group-hover:scale-[1.01]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-2 text-white font-medium text-xs sm:text-sm backdrop-blur-[1px] rounded-lg">
          <Maximize2 className="w-4 h-4" />
          <span>Click to enlarge</span>
        </div>
      </div>
      {figure.caption && (
        <figcaption className="mt-3 text-center text-xs sm:text-sm text-gray-600 italic max-w-2xl px-4 leading-normal">
          <span className="font-semibold text-gray-800 not-italic">
            {figure.id ? `${figure.id.replace("-", " ").toUpperCase()}: ` : ""}
          </span>
          {figure.caption}
        </figcaption>
      )}
    </figure>
  );
};

const ArticlePage = ({
  id,
  issue,
  volume,
  title,
  author,
  abstract,
  intro,
  content,
  conclusion,
  acknowledegements,
  references,
  figures: propFigures,
  tables: propTables,
  article: propArticle,
}) => {
  const [zoomedFigure, setZoomedFigure] = useState(null);
  const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);

  // Auto-resolve article from dataset if figures or tables were not explicitly passed
  const matchedArticle =
    propArticle ||
    articlesData.find(
      (a) =>
        (id && a.id === id && issue && a.issue === issue) ||
        (title && a.title === title)
    ) ||
    {};

  const allFigures = propFigures || matchedArticle.figures || [];
  const allTables = propTables || matchedArticle.tables || [];

  // Helper to resolve figure objects
  const resolveFigure = (figRef) => {
    if (!figRef) return null;
    if (typeof figRef === "string") {
      const match = allFigures.find((f) => f.id === figRef || f.figureId === figRef);
      return match || { dataUri: figRef, caption: "" };
    }
    if (figRef.dataUri || figRef.src || figRef.url) {
      return figRef;
    }
    if (figRef.figureId || figRef.id) {
      const targetId = figRef.figureId || figRef.id;
      const match = allFigures.find((f) => f.id === targetId || f.figureId === targetId);
      if (match) {
        return { ...match, caption: figRef.caption || match.caption };
      }
    }
    if (figRef.caption) {
      const match = allFigures.find((f) => f.caption === figRef.caption);
      if (match) return match;
    }
    return null;
  };

  const handleDownloadPDF = async () => {
    setIsDownloadingPDF(true);
    try {
      const fullArticleToExport = {
        ...matchedArticle,
        id: id || matchedArticle.id,
        serialNumber: id || matchedArticle.serialNumber || matchedArticle.id,
        issue: issue || matchedArticle.issue,
        volume: volume || matchedArticle.volume,
        title: title || matchedArticle.title,
        author: author || matchedArticle.author,
        abstract: abstract || matchedArticle.abstract,
        intro: intro || matchedArticle.intro,
        content: content || matchedArticle.content,
        conclusion: conclusion || matchedArticle.conclusion,
        acknowledegements: acknowledegements || matchedArticle.acknowledegements,
        references: references || matchedArticle.references,
        figures: allFigures,
        tables: allTables,
      };

      const pdf = await generateArticlePDF(fullArticleToExport);
      const sanitizedTitle = (fullArticleToExport.title || "article")
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s+/g, "_")
        .substring(0, 50);
      const filename = `LDTPPR_Serial${fullArticleToExport.serialNumber || fullArticleToExport.id || "1"}_${sanitizedTitle}.pdf`;
      downloadPDF(pdf, filename);
    } catch (err) {
      console.error("Error generating article PDF:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloadingPDF(false);
    }
  };

  return (
    <div className="bg-primary-light min-h-screen py-8 sm:py-10 px-4 sm:px-6 md:px-8">
      <div className="bg-white shadow-md rounded-xl max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-serif">
        {/* Top bar with serial, volume info and Export PDF Action */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md border border-slate-200">
              Serial {id || matchedArticle.serialNumber || matchedArticle.id}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 font-medium">
              Issue {issue || matchedArticle.issue} · Volume {volume || matchedArticle.volume}
            </span>
          </div>

          <button
            onClick={handleDownloadPDF}
            disabled={isDownloadingPDF}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#703b5f] hover:bg-[#572d4a] text-white text-xs sm:text-sm font-sans font-medium rounded-lg shadow-sm transition-all duration-200 hover:shadow disabled:opacity-60 cursor-pointer"
            title="Download full article PDF with figures and tables"
          >
            {isDownloadingPDF ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Exporting PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download / Export PDF</span>
              </>
            )}
          </button>
        </div>

        {/* Title and author - smaller on mobile */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-gray-900 leading-tight">
          {title || matchedArticle.title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 text-center font-medium">
          By {author || matchedArticle.author}
        </p>

        {/* Abstract */}
        <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">
          Abstract
        </h2>
        <p className="mb-6 sm:mb-8 text-base leading-loose text-gray-800 text-justify indent-4 sm:indent-8">
          {abstract || matchedArticle.abstract}
        </p>

        {/* Intro */}
        {((intro && intro.length > 0) || (matchedArticle.intro && matchedArticle.intro.length > 0)) && (
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 mt-8 sm:mt-10">
            Introduction
          </h2>
        )}
        {(intro || matchedArticle.intro)?.map((para, index) => (
          <p
            key={index}
            className="mb-4 text-base leading-loose text-gray-800 text-justify indent-4 sm:indent-8"
          >
            {para}
          </p>
        ))}

        {/* Content sections */}
        {(content || matchedArticle.content)?.map((section, index) => {
          // Resolve any tables attached to this section
          const sectionTables = section.tables
            ? section.tables
            : section.table
            ? [section.table]
            : [];

          // Resolve any figures attached to this section
          const rawSectionFigures = section.figures
            ? section.figures
            : section.figure
            ? [section.figure]
            : section.images
            ? section.images
            : section.image
            ? [section.image]
            : [];

          const resolvedSectionFigures = rawSectionFigures
            .map(resolveFigure)
            .filter(Boolean);

          return (
            <div key={index} className="mt-8 sm:mt-10 mb-8 sm:mb-12">
              {section.heading && (
                <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
                  {section.heading}
                </h2>
              )}

              {/* Render Section Paragraphs */}
              {section.paragraphs?.map((para, pIndex) => (
                <p
                  key={pIndex}
                  className="mb-4 text-base text-gray-700 leading-loose text-justify indent-4 sm:indent-8"
                >
                  {para}
                </p>
              ))}

              {/* Render Figures attached to this Section */}
              {resolvedSectionFigures.map((fig, fIdx) => (
                <AcademicFigure
                  key={fIdx}
                  figure={fig}
                  onZoom={(f) => setZoomedFigure(f)}
                />
              ))}

              {/* Render Tables attached to this Section */}
              {sectionTables.map((tbl, tIdx) => (
                <AcademicTable key={tIdx} table={tbl} />
              ))}
            </div>
          );
        })}

        {/* Root Article Tables fallback if not mapped to sections */}
        {allTables.length > 0 &&
          !(content || matchedArticle.content)?.some((s) => s.table || s.tables) && (
            <div className="mt-8 sm:mt-10 mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
                Tables & Policy Frameworks
              </h2>
              {allTables.map((tbl, idx) => (
                <AcademicTable key={idx} table={tbl} />
              ))}
            </div>
          )}

        {/* Conclusion */}
        {(conclusion || matchedArticle.conclusion) &&
          (conclusion || matchedArticle.conclusion).length > 0 && (
            <div className="mt-8 sm:mt-10 mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
                Conclusion
              </h2>
              {typeof (conclusion || matchedArticle.conclusion)[0] === "string"
                ? (conclusion || matchedArticle.conclusion).map((para, index) => (
                    <p
                      key={index}
                      className="mb-4 text-base leading-loose text-gray-800 text-justify indent-4 sm:indent-8"
                    >
                      {para}
                    </p>
                  ))
                : (conclusion || matchedArticle.conclusion).map((sec, index) => (
                    <div key={index} className="mb-4 sm:mb-6">
                      {sec.heading && (
                        <h3 className="text-lg sm:text-xl font-semibold text-primary-dark mb-3 sm:mb-4">
                          {sec.heading}
                        </h3>
                      )}
                      {sec.paragraphs?.map((para, pIndex) => (
                        <p
                          key={pIndex}
                          className="mb-3 sm:mb-4 text-base leading-loose text-gray-800 text-justify indent-4 sm:indent-8"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  ))}
            </div>
          )}

        {/* Acknowledgements */}
        {(acknowledegements || matchedArticle.acknowledegements) && (
          <div className="mt-8 sm:mt-10 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
              ACKNOWLEDGEMENTS
            </h2>
            {typeof (acknowledegements || matchedArticle.acknowledegements)[0] === "string" &&
              (acknowledegements || matchedArticle.acknowledegements).map((para, index) => (
                <p
                  key={index}
                  className="mb-4 text-base leading-loose text-gray-800 text-justify indent-4 sm:indent-8"
                >
                  {para}
                </p>
              ))}
          </div>
        )}

        {/* References */}
        {(references || matchedArticle.references) &&
          (references || matchedArticle.references).length > 0 && (
            <div className="mt-8 sm:mt-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
                References
              </h2>
              <ul className="list-decimal list-outside sm:list-inside space-y-2 sm:space-y-3 pl-6 sm:pl-0">
                {(references || matchedArticle.references).map((ref, index) => (
                  <li key={index} className="text-sm sm:text-base text-gray-800 mb-2 sm:mb-3">
                    {ref.links ? (
                      <a
                        href={ref.links}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-900 break-words"
                      >
                        {ref.heading || ref.title || ref.text || ref.links}
                      </a>
                    ) : (
                      <span>{ref.heading || ref.title || ref.text || String(ref)}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>

      {/* Lightbox / Zoom Modal */}
      {zoomedFigure && (
        <div
          onClick={() => setZoomedFigure(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-5xl overflow-auto rounded-xl bg-white p-4 sm:p-6 shadow-2xl flex flex-col items-center"
          >
            <button
              onClick={() => setZoomedFigure(null)}
              className="absolute top-3 right-3 rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 transition-colors"
              title="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={zoomedFigure.dataUri || zoomedFigure.src || zoomedFigure.url}
              alt={zoomedFigure.caption || "Enlarged figure"}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
            />
            {zoomedFigure.caption && (
              <p className="mt-4 text-center text-sm font-medium text-gray-800 max-w-3xl">
                {zoomedFigure.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;