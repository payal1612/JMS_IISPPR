import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FilterDropdown = ({ articleData, onIssueSelect, onVolumeSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIssue, setExpandedIssue] = useState(null);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const issues = Array.from(new Set(articleData.map((a) => a.issue)));
  const volumesByIssue = {};
  issues.forEach((issue) => {
    volumesByIssue[issue] = Array.from(
      new Set(articleData.filter((a) => a.issue === issue).map((a) => a.volume))
    );
  });

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleIssueSelect = (issue) => {
    onIssueSelect(issue);
    onVolumeSelect("All");
    setExpandedIssue(expandedIssue === issue ? null : issue);
  };

  const handleVolumeSelect = (issue, volume) => {
    onIssueSelect(issue);
    onVolumeSelect(volume);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2 font-medium rounded-lg shadow-md text-white"
        style={{ backgroundColor: "#3f2344" }}
      >
        Filter
        {/* <svg
          className="ml-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg> */}

        <FiChevronDown className = "ml-2 h-4 w-4"/>
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-2 w-64 right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-3 text-black">
          <div className="space-y-2 text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={onIssueSelect === "All"}
                onChange={() => {
                  onIssueSelect("All");
                  onVolumeSelect("All");
                  setExpandedIssue(null);
                  setIsOpen(false);
                }}
              />
              <span>All Issues</span>
            </label>

            {issues.map((issue) => (
              <div key={issue}>
                <label className="flex items-center space-x-2 font-semibold">
                  <input
                    type="checkbox"
                    checked={expandedIssue === issue}
                    onChange={() => handleIssueSelect(issue)}
                  />
                  <span>Issue {issue}</span>
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedIssue(expandedIssue === issue ? null : issue)
                    }
                  >
                    {expandedIssue === issue ? "▲" : "▼"}
                  </button>
                </label>

                {expandedIssue === issue && (
                  <div className="pl-6 mt-1 space-y-1">
                    {volumesByIssue[issue].map((volume) => (
                      <label
                        key={volume}
                        className="flex items-center space-x-2 text-sm font-normal"
                      >
                        <input
                          type="checkbox"
                          checked={false}
                          onChange={() => handleVolumeSelect(issue, volume)}
                        />
                        <span>Volume {volume}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
