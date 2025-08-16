# Law, Diplomacy, Tech & Public Policy Review (LDTPPR) — Journal Management System

A modern, academic, **frontend-only Journal Management System** for the Law, Diplomacy, Tech & Public Policy Review (LDTPPR). Built with React, Vite, and Tailwind CSS. This project simulates the full journal article lifecycle, editorial workflow, and public-facing pages for an academic journal.

---

## 🚀 Tech Stack
- **React** (`.jsx`)
- **Vite** (fast dev/build)
- **Tailwind CSS** (clean, academic, responsive UI)
- **React Router v6+** (routing)
- **No backend** — all data is static or managed in React state

---

## 🧠 Data Flow & Structure
- **Articles, users, editions, and blogs** are stored as static arrays in `/src/data/`.
- **Custom hooks** (`useArticles`, `useEditions`) manage workflow state and transitions (e.g., article status, edition publishing).
- **No authentication** — role-based dashboards are accessible via direct routes.
- **All actions** (approve, reject, assign, publish, etc.) update local state only.

### Example Data Structures
```js
// Article
{
  id, title, author, abstract, status, assignedReviewers, feedback, keywords, pdfUrl
}
// User
{
  id, name, role // (author, editor, reviewer, admin, reader)
}
// Edition
{
  id, title, releaseDate, articles // (array of article ids)
}
// Blog
{
  id, title, content, createdBy
}
```

---

## 🗺️ Routes & Pages

### Dashboards (Role-based)
- `/admin` — Super Admin Dashboard
- `/editor` — Editor Dashboard
- `/reviewer` — Reviewer Dashboard
- `/author` — Author Dashboard
- `/reader` — Reader Dashboard

### Article Lifecycle & Editorial Workflow
- `/submit-article` — Article submission form (title, abstract, keywords, PDF upload)
- `/editor/assign-reviewers` — Assign reviewers to approved articles
- `/editor/review-feedback` — Review feedback from reviewers
- `/editor/editions` — Add accepted articles to an edition
- `/editor/publish` — Publish edition to public view
- `/author/revise` — Author revision upload form

### Public & Static Pages
- `/blog` — Public blog (all users can view, only Super Admin can delete)
- `/publisher` — Publisher details
- `/issn` — ISSN details
- `/contact` — Contact Us (form)
- `/research` — Research articles (published editions)
- `/ethics` — Ethical Guidelines (real data)
- `/plagiarism` — Plagiarism & AI Content Policy (real data)
- `/editorial-board` — Editorial Board (real data)
- `/contact-us` — Contact Information (real data)
- `*` (any other route) — Landing page with hero section and navigation cards

---

## 📄 Static Page Content

### `/ethics` — Ethical Guidelines
- Author, Editorial, Reviewer responsibilities
- Anti-predatory publishing, misconduct handling, inclusivity & diversity

### `/plagiarism` — Plagiarism & AI Content Policy
- Definition, screening, consequences, AI-generated content policy

### `/editorial-board` — Editorial Board
- Board members, library staff, student editorial panel

### `/contact-us` — Contact Information
- Office and publisher addresses

---

## 🎨 UI/UX & Styling
- All pages use Tailwind CSS for a clean, academic, and whitespace-optimized look
- Responsive layouts for mobile, tablet, and desktop
- Consistent navigation via a top navbar (all main sections linked)
- Cards, forms, badges, and alerts for clear, modern presentation

---

## 📝 How to Use
1. Clone the repo and run `npm install`
2. Start the dev server with `npm run dev`
3. Navigate to any route (see above) to explore the full workflow and static content

---

## 📢 Contributions
This project is frontend-only and ready to be connected to a backend. PRs and suggestions are welcome!
