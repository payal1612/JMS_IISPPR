import React from 'react';

const Issues = ({ onIssueClick }) => {
  const issuesList = [
    { id: 1, title: "2025 Issue: 1", description: "Description for 2025 Issue 1" },
    { id: 2, title: "2025 Issue: 2", description: "Description for 2025 Issue 2" },
    { id: 3, title: "2025 Issue: 3", description: "Description for 2025 Issue 3" },
    { id: 4, title: "2025 Issue: 4", description: "Description for 2025 Issue 4" },
    // Add more issues as needed
  ];

  return (
    <div>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {issuesList.map((issue) => (
          <div
            key={issue.id} onClick={() => onIssueClick(issue.title)} 
            className="cursor-pointer bg-white rounded-xl shadow-md p-6 text-gray-800 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-bold text-purple-900 mb-2">{issue.title}</h3>
            <p className="text-gray-700">{issue.description}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Issues;
