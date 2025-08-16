import { motion } from 'framer-motion';

const IssnPage = () => {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        background: 'linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)',
      }}
    >
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white py-12 text-center"
        style={{
          background: 'linear-gradient(to right, #482742ff)',
        }}
      >
        <h1 className="text-4xl font-bold font-serif mb-2">ISSN Details</h1>
        <p className="text-accent-light max-w-2xl mx-auto px-4">
          International Standard Serial Number registration details for our journal
        </p>
      </motion.div>

      {/* Content */}
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white border border-accent-light p-8 rounded-xl shadow-md"
        >
          <div className="mb-8 space-y-4">
            <div className="flex items-start">
              <p className="text-lg font-serif font-semibold w-1/3" style={{ color: '#703b5dff' }}>
                Journal:
              </p>
              <p className="text-lg font-normal w-2/3" style={{ color: '#703b5dff' }}>
                Law, Diplomacy, Tech & Public Policy Review (LDTPPR)
              </p>
            </div>
            <div className="flex items-start">
              <p className="text-lg font-serif font-semibold w-1/3" style={{ color: '#703b5dff' }}>
                ISSN (Print/Online):
              </p>
              <p className="text-lg font-normal w-2/3" style={{ color: '#703b5dff' }}>
                Application in process
              </p>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="border-l-4 border-primary p-6 rounded-lg space-y-4 mb-8"
            style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)' }}
          >
            <p className="text-lg font-semibold" style={{ color: '#703b5dff' }}>
              Application Status:
            </p>
            <ul className="list-disc ml-6 space-y-2" style={{ color: '#703b5dff' }}>
              <li>
                <strong>Application ID:</strong> IDS70965
              </li>
              <li>
                <strong>Status:</strong> Under review with the ISSN National Centre
              </li>
              <li>
                <strong>Expected Availability:</strong> Within 6 months
              </li>
            </ul>
          </motion.div>

          <div className="text-gray-700 text-sm">
            <p className="mb-3">
              This journal has applied for both print and online ISSN registration.
              Once assigned, the official ISSN numbers will be displayed here and on all journal documentation, metadata, and PDF exports.
            </p>
            <p>
              For queries regarding the ISSN application, contact:{' '}
              <a
                href="mailto:submissions@ldt-journal.org"
                className="underline font-medium"
                style={{ color: '#703b5dff' }}
              >
                submissions@ldt-journal.org
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IssnPage;