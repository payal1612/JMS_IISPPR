import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// import { addDynamicWatermark, addWatermarkToAllPages } from './pdfWatermark.js';

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
    const keywordsText = article.keywords.join(', ');
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
    const bioLines = pdf.splitTextToSize(article.authorBio, contentWidth);
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
    article.references.forEach((ref, refIndex) => {
      const refLines = pdf.splitTextToSize(`${refIndex + 1}. ${ref}`, contentWidth);
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
    const aiLines = pdf.splitTextToSize(article.aiDisclosure, contentWidth);
    aiLines.forEach(line => {
      pdf.text(line, margin, yPosition);
      yPosition += lineHeight - 1;
    });

    // ✅ Add dynamic watermark to this article page
    // try {
    //   addDynamicWatermark(pdf, article);
    // } catch (error) {
    //   console.warn(`Failed to add watermark for article ${article.id}:`, error);
    // }
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
    const abstractLines = pdf.splitTextToSize(article.abstract, contentWidth);
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
        const refLines = pdf.splitTextToSize(`${refIndex + 1}. ${ref}`, contentWidth);
        refLines.forEach(line => {
          pdf.text(line, margin, yPosition);
          yPosition += lineHeight - 1;
        });
        yPosition += 2;
      });
    }

    // ✅ Add dynamic watermark to this article page
    // try {
    //   addDynamicWatermark(pdf, article);
    // } catch (error) {
    //   console.warn(`Failed to add watermark for article ${article.id}:`, error);
    // }
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

// ✅ Main export function
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

  // Title
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(44, 62, 80);
  const titleLines = pdf.splitTextToSize(articles.title || '', contentWidth);
  titleLines.forEach(line => {
    pdf.text(line, margin, yPosition.value);
    yPosition.value += titleHeight;
  });
  yPosition.value += 15;

  // Author
  if (articles.author) {
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(100, 100, 100);
    checkPageBreak(lineHeight + 5);
    const authorLines = pdf.splitTextToSize(`${articles.author}`, contentWidth);
    authorLines.forEach(line => {
      pdf.text(line, margin, yPosition.value);
      yPosition.value += 8;
    });

    // Add Issue, Volume, and Date below author
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(80, 80, 80);
    const issueInfo = `Issue: ${articles.issue || '-'}   Volume: ${articles.volume || '-'}`;
    pdf.text(issueInfo, margin, yPosition.value);
    yPosition.value += lineHeight;

    if (articles.releaseDate) {
      const date = new Date(articles.releaseDate);
      const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      pdf.text(`Date of Publication: ${formattedDate}`, margin, yPosition.value);
      yPosition.value += lineHeight;
      
    }

    yPosition.value += lineHeight + 10;
  }

  // Abstract
  if (typeof articles.abstract === 'string') {
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    checkPageBreak(lineHeight * 3);
    pdf.text('Abstract:', margin, yPosition.value);
    yPosition.value += lineHeight + 2;

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);
    drawJustifiedText(pdf, articles.abstract, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
    yPosition.value += 15;
  }

  // Keywords
  if (Array.isArray(articles.keywords) && articles.keywords.length > 0) {
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    checkPageBreak(lineHeight * 3);
    pdf.text('Keywords:', margin, yPosition.value);
    yPosition.value += lineHeight + 2;

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(60, 60, 60);
    drawJustifiedText(pdf, articles.keywords.join(', '), margin, yPosition, contentWidth, lineHeight, checkPageBreak);
    yPosition.value += 15;
  }

  // Introduction
  if (Array.isArray(articles.intro)) {
    const filtered = articles.intro.filter(p => typeof p === 'string' && p.trim());
    if (filtered.length) {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(44, 62, 80);
      checkPageBreak(lineHeight * 3);
      pdf.text('Introduction:', margin, yPosition.value);
      yPosition.value += lineHeight + 5;

      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(60, 60, 60);
      for (const para of filtered) {
        drawJustifiedText(pdf, para, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
        yPosition.value += 3;
      }
      yPosition.value += 15;
    }
  }

  // Content Sections
  if (Array.isArray(articles.content)) {
    for (const section of articles.content) {
      if (section.heading) {
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(44, 62, 80);
        const headingLines = pdf.splitTextToSize(section.heading, contentWidth);
        headingLines.forEach(line => {
          checkPageBreak(lineHeight);
          pdf.text(line, margin, yPosition.value);
          yPosition.value += lineHeight;
        });
        yPosition.value += 5;
      }

      if (Array.isArray(section.paragraphs)) {
        const filtered = section.paragraphs.filter(p => typeof p === 'string' && p.trim());
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(60, 60, 60);

        for (const para of filtered) {
          drawJustifiedText(pdf, para, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
          yPosition.value += 5;
        }
      }

      yPosition.value += 8;
    }
  }

  // Conclusion
  if (Array.isArray(articles.conclusion)) {
    const filtered = articles.conclusion.filter(p => typeof p === 'string' && p.trim());
    if (filtered.length) {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(44, 62, 80);
      checkPageBreak(lineHeight * 3);
      pdf.text('Conclusion:', margin, yPosition.value);
      yPosition.value += lineHeight + 5;

      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(60, 60, 60);
      for (const para of filtered) {
        drawJustifiedText(pdf, para, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
        yPosition.value += 3;
      }
      yPosition.value += 15;
    }
  }

  // Acknowledgements
  if (Array.isArray(articles.acknowledegements)) {
    const filtered = articles.acknowledegements.filter(p => typeof p === 'string' && p.trim());
    if (filtered.length) {
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(44, 62, 80);
      checkPageBreak(lineHeight * 3);
      pdf.text('Acknowledgements:', margin, yPosition.value);
      yPosition.value += lineHeight + 5;

      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(60, 60, 60);
      for (const para of filtered) {
        drawJustifiedText(pdf, para, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
        yPosition.value += 3;
      }
      yPosition.value += 15;
    }
  }

  // References
  if (Array.isArray(articles.references)) {
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(44, 62, 80);
    checkPageBreak(lineHeight * 2);
    pdf.text('References:', margin, yPosition.value);
    yPosition.value += lineHeight + 5;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');

    for (let index = 0; index < articles.references.length; index++) {
      const ref = articles.references[index];
      if (ref.heading) {
        const refText = `${index + 1}. ${ref.heading}`;
        pdf.setTextColor(60, 60, 60);
        drawJustifiedText(pdf, refText, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
      }
      if (ref.links) {
        pdf.setTextColor(0, 0, 255);
        drawJustifiedText(pdf, `   ${ref.links}`, margin, yPosition, contentWidth, lineHeight, checkPageBreak);
      }
      yPosition.value += 8;
    }
  }

  // ✅ Add dynamic watermarks to all pages
  // try {
  //   addWatermarkToAllPages(pdf, articles);
  // } catch (error) {
  //   console.warn('Failed to add watermarks to PDF:', error);
  // }

  return pdf;
};
