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
}) => {
  return (
    <div className="bg-primary-light min-h-screen py-8 sm:py-10 px-4 sm:px-6 md:px-8">
      <div className="bg-white shadow-md rounded-xl max-w-6xl mx-auto p-4 sm:p-6 md:p-8 font-serif">
        {/* Top bar - stacked on mobile */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 sm:mb-6">
          <span className="text-sm sm:text-base font-medium min-w-[120px]">
            Serial {id}
          </span>
          <span className="text-sm sm:text-base font-medium">
            Issue {issue} · Volume {volume}
          </span>
        </div>

        {/* Title and author - smaller on mobile */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 text-center">
          By {author}
        </p>

        {/* Abstract */}
        <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4">
          Abstract
        </h2>
        <p className="mb-6 sm:mb-8 text-base leading-loose text-gray-800 text-justify indent-4 sm:indent-8">
          {abstract}
        </p>

        {/* Intro */}
        {intro && (
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-3 sm:mb-4 mt-8 sm:mt-10">
            Introduction
          </h2>
        )}
        {intro?.map((para, index) => (
          <p
            key={index}
            className="mb-4 text-base leading-loose text-gray-800 text-justify indent-4 sm:indent-8"
          >
            {para}
          </p>
        ))}

        {/* Content sections */}
        {content?.map((section, index) => (
          <div key={index} className="mt-8 sm:mt-10 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
              {section.heading}
            </h2>
            {section.paragraphs?.map((para, pIndex) => (
              <p
                key={pIndex}
                className="mb-4 text-base text-gray-700 leading-loose text-justify indent-4 sm:indent-8"
              >
                {para}
              </p>
            ))}
          </div>
        ))}

        {/* Conclusion */}
        {conclusion && conclusion.length > 0 && (
          <div className="mt-8 sm:mt-10 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
              Conclusion
            </h2>
            {typeof conclusion[0] === "string"
              ? conclusion.map((para, index) => (
                  <p
                    key={index}
                    className="mb-4 text-base leading-loose text-gray-800 text-justify indent-4 sm:indent-8"
                  >
                    {para}
                  </p>
                ))
              : conclusion.map((section, index) => (
                  <div key={index} className="mb-4 sm:mb-6">
                    {section.heading && (
                      <h3 className="text-lg sm:text-xl font-semibold text-primary-dark mb-3 sm:mb-4">
                        {section.heading}
                      </h3>
                    )}
                    {section.paragraphs?.map((para, pIndex) => (
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
        {acknowledegements && (
          <div className="mt-8 sm:mt-10 mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
              ACKNOWLEDGEMENTS
            </h2>
            {typeof acknowledegements[0] === "string" &&
              acknowledegements.map((para, index) => (
                <p
                  key={index}
                  className="mb-4 text-base leading-loose text-gray-800 text-justify indent-4 sm:indent-8"
                >
                  {para}
                </p>
              ))}
          </div>
        )}

        {/* References - better list handling */}
        {references && references.length > 0 && (
          <div className="mt-8 sm:mt-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
              References
            </h2>
            <ul className="list-decimal list-outside sm:list-inside space-y-2 sm:space-y-3 pl-6 sm:pl-0">
              {references.map((ref, index) => (
                <li key={index} className="text-sm sm:text-base text-gray-800 mb-2 sm:mb-3">
                  <a
                    href={ref.links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline break-words"
                  >
                    {ref.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;