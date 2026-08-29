// pdfExport file
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';
// import { addDynamicWatermark, addWatermarkToAllPages } from './pdfWatermark.js';
import releaseDate from '../data/editions.js';
import articlesData from '../data/articles.js';

// Safe helper to invoke autoTable across different bundling formats
const runAutoTable = (pdf, options) => {
  if (typeof autoTable === 'function') {
    autoTable(pdf, options);
  } else if (typeof autoTable?.default === 'function') {
    autoTable.default(pdf, options);
  } else if (typeof pdf.autoTable === 'function') {
    pdf.autoTable(options);
  }
};

export const generateIssuePDF = async (issue, publisher, editorialBoard) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (2 * margin);

  let yPosition = margin;
  const lineHeight = 7;
  const titleHeight = 12;

  // Cover Page
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(44, 62, 80);
  pdf.text('Law, Diplomacy, Technology &', margin, yPosition);
  yPosition += titleHeight;
  pdf.text('Public Policy Review', margin, yPosition);
  yPosition += titleHeight + 10;

  // ISSN Tab/Section
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(44, 62, 80);
  pdf.text('ISSN (Print/Online): Application in process (ID: IDS70965, expected within 6 months)', margin, yPosition);
  yPosition += lineHeight + 5;

  // Issue Info
  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'bold');
  pdf.text(`Volume ${issue.volume} - ${issue.month} ${issue.year}`, margin, yPosition);
  yPosition += titleHeight + 15;

  // Publisher Info
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Publisher Information:', margin, yPosition);
  yPosition += lineHeight;
  pdf.setFontSize(10);
  pdf.text(publisher.name, margin, yPosition);
  yPosition += lineHeight;
  pdf.text(publisher.organization, margin, yPosition);
  yPosition += lineHeight;
  pdf.text(`${publisher.address.street}`, margin, yPosition);
  yPosition += lineHeight;
  pdf.text(`${publisher.address.city}, ${publisher.address.state} ${publisher.address.postalCode}`, margin, yPosition);
  yPosition += lineHeight;
  pdf.text(publisher.address.country, margin, yPosition);
  yPosition += lineHeight + 5;

  // Contact Info
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Contact Information:', margin, yPosition);
  yPosition += lineHeight;
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Email: ${publisher.contact.email}`, margin, yPosition);
  yPosition += lineHeight;
  pdf.text(`Phone: ${publisher.contact.phone}`, margin, yPosition);
  yPosition += lineHeight;
  pdf.text(`Website: ${publisher.contact.website}`, margin, yPosition);
  yPosition += lineHeight + 10;

  // Table of Contents
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Table of Contents', margin, yPosition);
  yPosition += lineHeight + 5;

  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  issue.articles.forEach((article, index) => {
    pdf.text(`${index + 1}. ${article.title}`, margin, yPosition);
    yPosition += lineHeight;
    pdf.text(`   By ${article.author}`, margin + 5, yPosition);
    yPosition += lineHeight;
  });

  yPosition += 10;

  // Editorial Board
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Editorial Board', margin, yPosition);
  yPosition += lineHeight + 5;

  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');
  editorialBoard.forEach((member, index) => {
    if (yPosition > pageHeight - 40) {
      pdf.addPage();
      yPosition = margin;
    }

    pdf.setFont('helvetica', 'bold');
    pdf.text(member.name, margin, yPosition);
    yPosition += lineHeight - 2;
    pdf.setFont('helvetica', 'normal');
    pdf.text(`${member.designation}, ${member.department}`, margin, yPosition);
    yPosition += lineHeight - 2;
    pdf.text(member.institution, margin, yPosition);
    yPosition += lineHeight - 2;
    pdf.text(`Email: ${member.email}`, margin, yPosition);
    yPosition += lineHeight - 2;
    pdf.text(`Phone: ${member.phone}`, margin, yPosition);
    yPosition += lineHeight;
  });

  // Articles
  issue.articles.forEach((article, index) => {
    pdf.addPage();
    yPosition = margin;

    // Article Title
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    const titleLines = pdf.splitTextToSize(article.title, contentWidth);
    titleLines.forEach(line => {
      pdf.text(line, margin, yPosition);
      yPosition += lineHeight;
    });
    yPosition += 5;

    // Author
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(100, 100, 100);
    pdf.text(`By ${article.author}`, margin, yPosition);
    yPosition += lineHeight + 10;

    // Abstract
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    pdf.text('Abstract:', margin, yPosition);
    yPosition += lineHeight;
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);
    const abstractLines = pdf.splitTextToSize(article.abstract, contentWidth);
    abstractLines.forEach(line => {
      pdf.text(line, margin, yPosition);
      yPosition += lineHeight - 1;
    });
    yPosition += 10;

    // Keywords
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    pdf.text('Keywords:', margin, yPosition);
    yPosition += lineHeight;
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);
    const keywordsText = article.keywords ? article.keywords.join(', ') : '';
    const keywordLines = pdf.splitTextToSize(keywordsText, contentWidth);
    keywordLines.forEach(line => {
      pdf.text(line, margin, yPosition);
      yPosition += lineHeight - 1;
    });
    yPosition += 10;

    // Author Bio
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    pdf.text('Author Biography:', margin, yPosition);
    yPosition += lineHeight;
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);
    const bioLines = pdf.splitTextToSize(article.authorBio || '', contentWidth);
    bioLines.forEach(line => {
      pdf.text(line, margin, yPosition);
      yPosition += lineHeight - 1;
    });
    yPosition += 10;

    // References
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    pdf.text('References:', margin, yPosition);
    yPosition += lineHeight;
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);
    (article.references || []).forEach((ref, refIndex) => {
      const refText = typeof ref === 'string' ? ref : (ref.heading || ref.title || ref.links || '');
      const refLines = pdf.splitTextToSize(`${refIndex + 1}. ${refText}`, contentWidth);
      refLines.forEach(line => {
        pdf.text(line, margin, yPosition);
        yPosition += lineHeight - 1;
      });
      yPosition += 2;
    });
    yPosition += 10;

    // Declarations
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    pdf.text('Declarations:', margin, yPosition);
    yPosition += lineHeight;
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);

    const declarations = [
      { name: 'Ethics Declaration', value: article.ethicsDeclaration },
      { name: 'Plagiarism Declaration', value: article.plagiarismDeclaration },
      { name: 'Peer Reviewed', value: article.peerReviewed },
      { name: 'Copy Edited', value: article.copyEdited }
    ];

    declarations.forEach(decl => {
      const status = decl.value ? '✓' : '✗';
      const color = decl.value ? [34, 139, 34] : [220, 20, 60];
      pdf.setTextColor(...color);
      pdf.text(`${status} ${decl.name}`, margin, yPosition);
      yPosition += lineHeight - 1;
    });

    yPosition += 5;
    pdf.setTextColor(60, 60, 60);
    pdf.text('AI Disclosure:', margin, yPosition);
    yPosition += lineHeight - 1;
    const aiLines = pdf.splitTextToSize(article.aiDisclosure || '', contentWidth);
    aiLines.forEach(line => {
      pdf.text(line, margin, yPosition);
      yPosition += lineHeight - 1;
    });
  });

  return pdf;
};

export const downloadPDF = (pdf, filename) => {
  pdf.save(filename);
};

export const generateResearchPDF = async (articles) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (2 * margin);

  let yPosition = margin;
  const lineHeight = 7;
  const titleHeight = 12;

  // Cover Page
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(44, 62, 80);
  pdf.text('Research Articles', margin, yPosition);
  yPosition += titleHeight + 10;

  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Law, Diplomacy, Technology & Public Policy Review', margin, yPosition);
  yPosition += lineHeight + 5;

  // ISSN Tab/Section
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(44, 62, 80);
  pdf.text('ISSN (Print/Online): Application in process (ID: IDS70965, expected within 6 months)', margin, yPosition);
  yPosition += lineHeight + 10;

  // Table of Contents
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Table of Contents', margin, yPosition);
  yPosition += lineHeight + 5;

  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  articles.forEach((article, index) => {
    pdf.text(`${index + 1}. ${article.title}`, margin, yPosition);
    yPosition += lineHeight;
    pdf.text(`   By ${article.author}`, margin + 5, yPosition);
    yPosition += lineHeight;
  });

  // Articles
  articles.forEach((article, index) => {
    pdf.addPage();
    yPosition = margin;

    // Article Title
    pdf.setFontSize(16);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    const titleLines = pdf.splitTextToSize(article.title, contentWidth);
    titleLines.forEach(line => {
      pdf.text(line, margin, yPosition);
      yPosition += lineHeight;
    });
    yPosition += 5;

    // Author
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(100, 100, 100);
    pdf.text(`By ${article.author}`, margin, yPosition);
    yPosition += lineHeight + 10;

    // Abstract
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    pdf.text('Abstract:', margin, yPosition);
    yPosition += lineHeight;
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);
    const abstractLines = pdf.splitTextToSize(article.abstract || '', contentWidth);
    abstractLines.forEach(line => {
      pdf.text(line, margin, yPosition);
      yPosition += lineHeight - 1;
    });
    yPosition += 10;

    // Keywords
    if (article.keywords) {
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(44, 62, 80);
      pdf.text('Keywords:', margin, yPosition);
      yPosition += lineHeight;
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(60, 60, 60);
      const keywordsText = article.keywords.join(', ');
      const keywordLines = pdf.splitTextToSize(keywordsText, contentWidth);
      keywordLines.forEach(line => {
        pdf.text(line, margin, yPosition);
        yPosition += lineHeight - 1;
      });
      yPosition += 10;
    }

    // Author Bio
    if (article.authorBio) {
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(44, 62, 80);
      pdf.text('Author Biography:', margin, yPosition);
      yPosition += lineHeight;
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(60, 60, 60);
      const bioLines = pdf.splitTextToSize(article.authorBio, contentWidth);
      bioLines.forEach(line => {
        pdf.text(line, margin, yPosition);
        yPosition += lineHeight - 1;
      });
      yPosition += 10;
    }

    // References
    if (article.references) {
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(44, 62, 80);
      pdf.text('References:', margin, yPosition);
      yPosition += lineHeight;
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(60, 60, 60);
      article.references.forEach((ref, refIndex) => {
        const refText = typeof ref === 'string' ? ref : (ref.heading || ref.title || ref.links || '');
        const refLines = pdf.splitTextToSize(`${refIndex + 1}. ${refText}`, contentWidth);
        refLines.forEach(line => {
          pdf.text(line, margin, yPosition);
          yPosition += lineHeight - 1;
        });
        yPosition += 2;
      });
    }
  });

  return pdf;
};

const drawJustifiedText = (pdf, text, x, yPosition, maxWidth, lineHeight, checkPageBreak) => {
  if (typeof text !== 'string') {
    console.warn('drawJustifiedText skipped non-string input:', text);
    return;
  }

  const words = text.split(/\s+/);
  let line = '';
  const lines = [];

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    if (pdf.getTextWidth(testLine) > maxWidth && i > 0) {
      lines.push(line.trim());
      line = words[i] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line.trim());

  lines.forEach((line, index) => {
    checkPageBreak(lineHeight);

    if (index !== lines.length - 1 && line.includes(' ')) {
      const wordsInLine = line.split(' ');
      const totalTextWidth = pdf.getTextWidth(line);
      const spaceCount = wordsInLine.length - 1;
      const extraSpace = (maxWidth - totalTextWidth) / spaceCount;
      let currentX = x;

      wordsInLine.forEach((word) => {
        pdf.text(word, currentX, yPosition.value);
        currentX += pdf.getTextWidth(word) + pdf.getTextWidth(' ') + extraSpace;
      });
    } else {
      pdf.text(line, x, yPosition.value);
    }

    yPosition.value += lineHeight - 1;
  });
};

// Helper to determine image dimensions
const getImageDimensions = (imgSrc) => {
  return new Promise((resolve) => {
    if (typeof Image === 'undefined') {
      return resolve({ width: 600, height: 400 });
    }
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth || img.width || 600,
        height: img.naturalHeight || img.height || 400,
      });
    };
    img.onerror = () => {
      resolve({ width: 600, height: 400 });
    };
    img.src = imgSrc;
  });
};

// Helper to draw structured academic tables in jsPDF
const drawTableInPDF = (pdf, table, margin, yPosition, contentWidth, pageHeight, checkPageBreak) => {
  if (!table) return;

  // Table Title
  if (table.title || table.id) {
    const tableTitle = table.title || `Table: ${table.id}`;
    pdf.setFontSize(10.5);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    checkPageBreak(12);
    const titleLines = pdf.splitTextToSize(tableTitle, contentWidth);
    titleLines.forEach((line) => {
      pdf.text(line, margin, yPosition.value);
      yPosition.value += 5.5;
    });
    yPosition.value += 1.5;
  }

  // Format headers and rows
  const headers = Array.isArray(table.headers) ? table.headers : [];
  const rows = Array.isArray(table.rows)
    ? table.rows.map((row) => {
        if (Array.isArray(row)) {
          return row.map((cell) => (cell !== null && cell !== undefined ? String(cell) : ''));
        }
        return [String(row)];
      })
    : [];

  if (headers.length > 0 || rows.length > 0) {
    checkPageBreak(25);
    runAutoTable(pdf, {
      head: headers.length > 0 ? [headers] : undefined,
      body: rows,
      startY: yPosition.value,
      margin: { left: margin, right: margin },
      theme: 'grid',
      headStyles: {
        fillColor: [112, 59, 95], // primary brand wine color #703b5f
        textColor: [255, 255, 255],
        fontSize: 8.5,
        fontStyle: 'bold',
        halign: 'left',
        valign: 'middle',
        cellPadding: 2.2,
      },
      bodyStyles: {
        fontSize: 7.8,
        textColor: [45, 55, 72],
        lineColor: [220, 220, 220],
        lineWidth: 0.1,
        cellPadding: 2,
        valign: 'top',
      },
      alternateRowStyles: {
        fillColor: [248, 250, 252],
      },
      styles: {
        overflow: 'linebreak',
        cellWidth: 'auto',
      },
    });

    if (pdf.lastAutoTable && pdf.lastAutoTable.finalY) {
      yPosition.value = pdf.lastAutoTable.finalY + 4;
    }
  }

  // Table Footnote / Source Note
  if (table.note) {
    pdf.setFontSize(7.5);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(110, 110, 110);
    checkPageBreak(8);
    const noteLines = pdf.splitTextToSize(`Note: ${table.note}`, contentWidth);
    noteLines.forEach((line) => {
      pdf.text(line, margin, yPosition.value);
      yPosition.value += 4;
    });
  }

  yPosition.value += 6;
};

// Helper to draw figures / images with captions in jsPDF
const drawFigureInPDF = async (pdf, figure, margin, yPosition, contentWidth, pageHeight, checkPageBreak) => {
  if (!figure) return;
  const imgSrc = figure.dataUri || figure.src || figure.url;
  if (!imgSrc || typeof imgSrc !== 'string') return;

  try {
    const dims = await getImageDimensions(imgSrc);
    const naturalWidth = dims.width || 600;
    const naturalHeight = dims.height || 400;

    // Calculate proportional dimensions in mm
    const maxImgWidth = Math.min(contentWidth, 160);
    let targetWidth = maxImgWidth;
    let targetHeight = (naturalHeight / naturalWidth) * targetWidth;

    // Constrain height if image is very tall so it fits cleanly
    const maxImgHeight = pageHeight - (2 * margin) - 45;
    if (targetHeight > maxImgHeight) {
      targetHeight = maxImgHeight;
      targetWidth = (naturalWidth / naturalHeight) * targetHeight;
    }

    // Check required vertical space
    const captionSpace = figure.caption ? 18 : 6;
    checkPageBreak(targetHeight + captionSpace);

    // Center image horizontally
    const imgX = margin + (contentWidth - targetWidth) / 2;

    // Determine format
    let format = 'PNG';
    if (imgSrc.startsWith('data:image/jpeg') || imgSrc.startsWith('data:image/jpg')) {
      format = 'JPEG';
    } else if (imgSrc.startsWith('data:image/webp')) {
      format = 'WEBP';
    }

    pdf.addImage(imgSrc, format, imgX, yPosition.value, targetWidth, targetHeight);
    yPosition.value += targetHeight + 3;

    // Caption
    if (figure.caption) {
      pdf.setFontSize(8.5);
      pdf.setFont('helvetica', 'italic');
      pdf.setTextColor(80, 80, 80);

      const figLabel = figure.id ? `${figure.id.replace('-', ' ').toUpperCase()}: ` : '';
      const captionText = `${figLabel}${figure.caption}`;
      const captionLines = pdf.splitTextToSize(captionText, contentWidth - 10);

      captionLines.forEach((line) => {
        checkPageBreak(5);
        const textW = pdf.getTextWidth(line);
        const textX = margin + (contentWidth - textW) / 2;
        pdf.text(line, Math.max(margin, textX), yPosition.value);
        yPosition.value += 4.2;
      });
    }

    yPosition.value += 6;
  } catch (err) {
    console.warn('Could not add figure to PDF:', err);
  }
};

// ✅ Main export function for individual articles with Full Tables and Figures support
export const generateArticlePDF = async (articles) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (2 * margin);

  const yPosition = { value: margin };
  const lineHeight = 7;
  const titleHeight = 12;

  const checkPageBreak = (requiredSpace) => {
    if (yPosition.value + requiredSpace > pageHeight - margin) {
      pdf.addPage();
      yPosition.value = margin;
    }
  };

  // Resolve full article data if passed article object lacks figures/tables/sections
  const rawArticle = articles || {};
  const matchedArticle =
    articlesData.find(
      (a) =>
        (rawArticle.id && a.id === rawArticle.id && rawArticle.issue && a.issue === rawArticle.issue) ||
        (rawArticle.title && a.title === rawArticle.title)
    ) || {};

  const fullArticle = {
    ...matchedArticle,
    ...rawArticle,
    figures:
      rawArticle.figures && rawArticle.figures.length > 0
        ? rawArticle.figures
        : matchedArticle.figures || [],
    tables:
      rawArticle.tables && rawArticle.tables.length > 0
        ? rawArticle.tables
        : matchedArticle.tables || [],
    content:
      rawArticle.content && rawArticle.content.length > 0
        ? rawArticle.content
        : matchedArticle.content || [],
  };

  const allFigures = fullArticle.figures || [];
  const allTables = fullArticle.tables || [];

  // Helper to resolve figure objects
  const resolveFig = (figRef) => {
    if (!figRef) return null;
    if (typeof figRef === 'string') {
      const match = allFigures.find((f) => f.id === figRef || f.figureId === figRef);
      return match || { dataUri: figRef, caption: '' };
    }
    if (figRef.dataUri || figRef.src || figRef.url) {
      return figRef;
    }
    if (figRef.figureId || figRef.id) {
      const targetId = figRef.figureId || figRef.id;
      const match = allFigures.find((f) => f.id === targetId || f.figureId === targetId);
      if (match) return { ...match, caption: figRef.caption || match.caption };
    }
    if (figRef.caption) {
      const match = allFigures.find((f) => f.caption === figRef.caption);
      if (match) return match;
    }
    return null;
  };

  // Title
  pdf.setFontSize(22);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(44, 62, 80);
  const titleLines = pdf.splitTextToSize(fullArticle.title || '', contentWidth);
  titleLines.forEach((line) => {
    pdf.text(line, margin, yPosition.value);
    yPosition.value += titleHeight;
  });
  yPosition.value += 6;

  // Author & Metadata
  if (fullArticle.author) {
    pdf.setFontSize(13);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(100, 100, 100);
    checkPageBreak(lineHeight + 5);
    const authorLines = pdf.splitTextToSize(`By ${fullArticle.author}`, contentWidth);
    authorLines.forEach((line) => {
      pdf.text(line, margin, yPosition.value);
      yPosition.value += 7;
    });

    // Add Issue, Volume, Serial
    pdf.setFontSize(10.5);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(80, 80, 80);
    const issueInfo = `Serial: ${fullArticle.serialNumber || fullArticle.id || '-'}   |   Issue: ${fullArticle.issue || '-'}   |   Volume: ${fullArticle.volume || '-'}`;
    pdf.text(issueInfo, margin, yPosition.value);
    yPosition.value += lineHeight + 4;
  }

  // Abstract
  if (typeof fullArticle.abstract === 'string' && fullArticle.abstract.trim()) {
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    checkPageBreak(lineHeight * 3);
    pdf.text('Abstract:', margin, yPosition.value);
    yPosition.value += lineHeight + 2;

    pdf.setFontSize(10.5);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);
    drawJustifiedText(pdf, fullArticle.abstract, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
    yPosition.value += 10;
  }

  // Keywords
  if (Array.isArray(fullArticle.keywords) && fullArticle.keywords.length > 0) {
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    checkPageBreak(lineHeight * 3);
    pdf.text('Keywords:', margin, yPosition.value);
    yPosition.value += lineHeight + 2;

    pdf.setFontSize(10.5);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);
    drawJustifiedText(pdf, fullArticle.keywords.join(', '), margin, yPosition, contentWidth, lineHeight, checkPageBreak);
    yPosition.value += 10;
  }

  // Introduction
  if (Array.isArray(fullArticle.intro)) {
    const filtered = fullArticle.intro.filter((p) => typeof p === 'string' && p.trim());
    if (filtered.length) {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(44, 62, 80);
      checkPageBreak(lineHeight * 3);
      pdf.text('Introduction:', margin, yPosition.value);
      yPosition.value += lineHeight + 3;

      pdf.setFontSize(10.5);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(60, 60, 60);
      for (const para of filtered) {
        drawJustifiedText(pdf, para, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
        yPosition.value += 3;
      }
      yPosition.value += 10;
    }
  }

  // Content Sections (with inline tables and figures)
  if (Array.isArray(fullArticle.content)) {
    for (const section of fullArticle.content) {
      // Heading
      if (section.heading) {
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(44, 62, 80);
        const headingLines = pdf.splitTextToSize(section.heading, contentWidth);
        headingLines.forEach((line) => {
          checkPageBreak(lineHeight);
          pdf.text(line, margin, yPosition.value);
          yPosition.value += lineHeight;
        });
        yPosition.value += 4;
      }

      // Paragraphs
      if (Array.isArray(section.paragraphs)) {
        const filtered = section.paragraphs.filter((p) => typeof p === 'string' && p.trim());
        pdf.setFontSize(10.5);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(60, 60, 60);

        for (const para of filtered) {
          drawJustifiedText(pdf, para, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
          yPosition.value += 3;
        }
        yPosition.value += 4;
      }

      // Section Figures
      const rawSectionFigures = section.figures
        ? section.figures
        : section.figure
        ? [section.figure]
        : section.images
        ? section.images
        : section.image
        ? [section.image]
        : [];

      for (const figRef of rawSectionFigures) {
        const resolved = resolveFig(figRef);
        if (resolved) {
          await drawFigureInPDF(pdf, resolved, margin, yPosition, contentWidth, pageHeight, checkPageBreak);
        }
      }

      // Section Tables
      const sectionTables = section.tables
        ? section.tables
        : section.table
        ? [section.table]
        : [];

      for (const tbl of sectionTables) {
        drawTableInPDF(pdf, tbl, margin, yPosition, contentWidth, pageHeight, checkPageBreak);
      }

      yPosition.value += 6;
    }
  }

  // Root Tables fallback if not mapped into sections
  if (
    allTables.length > 0 &&
    !fullArticle.content?.some((s) => s.table || s.tables)
  ) {
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    checkPageBreak(lineHeight * 2);
    pdf.text('Tables & Policy Frameworks:', margin, yPosition.value);
    yPosition.value += lineHeight + 4;

    for (const tbl of allTables) {
      drawTableInPDF(pdf, tbl, margin, yPosition, contentWidth, pageHeight, checkPageBreak);
    }
  }

  // Conclusion
  if (Array.isArray(fullArticle.conclusion)) {
    const filtered = fullArticle.conclusion.filter((p) => typeof p === 'string' && p.trim());
    if (filtered.length) {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(44, 62, 80);
      checkPageBreak(lineHeight * 3);
      pdf.text('Conclusion:', margin, yPosition.value);
      yPosition.value += lineHeight + 3;

      pdf.setFontSize(10.5);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(60, 60, 60);
      for (const para of filtered) {
        drawJustifiedText(pdf, para, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
        yPosition.value += 3;
      }
      yPosition.value += 10;
    }
  }

  // Acknowledgements
  if (Array.isArray(fullArticle.acknowledegements)) {
    const filtered = fullArticle.acknowledegements.filter((p) => typeof p === 'string' && p.trim());
    if (filtered.length) {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(44, 62, 80);
      checkPageBreak(lineHeight * 3);
      pdf.text('Acknowledgements:', margin, yPosition.value);
      yPosition.value += lineHeight + 3;

      pdf.setFontSize(10.5);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(60, 60, 60);
      for (const para of filtered) {
        drawJustifiedText(pdf, para, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
        yPosition.value += 3;
      }
      yPosition.value += 10;
    }
  }

  // References
  if (Array.isArray(fullArticle.references) && fullArticle.references.length > 0) {
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    checkPageBreak(lineHeight * 2);
    pdf.text('References:', margin, yPosition.value);
    yPosition.value += lineHeight + 4;

    pdf.setFontSize(9.5);
    pdf.setFont('helvetica', 'normal');

    for (let index = 0; index < fullArticle.references.length; index++) {
      const ref = fullArticle.references[index];
      if (typeof ref === 'string') {
        const refText = `${index + 1}. ${ref}`;
        pdf.setTextColor(60, 60, 60);
        drawJustifiedText(pdf, refText, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
      } else {
        if (ref.heading || ref.title) {
          const refText = `${index + 1}. ${ref.heading || ref.title}`;
          pdf.setTextColor(60, 60, 60);
          drawJustifiedText(pdf, refText, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
        }
        if (ref.links) {
          pdf.setTextColor(0, 0, 255);
          drawJustifiedText(pdf, `   ${ref.links}`, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
        }
      }
      yPosition.value += 4;
    }
  }

  return pdf;
};