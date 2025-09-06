import { motion } from 'framer-motion';

const PublisherPage = () => {
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
        <h1 className="text-4xl font-bold font-serif mb-2">Publisher Details</h1>
        <p className="text-accent-light max-w-2xl mx-auto px-4">
          Information about our publishing organization and journal
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
          <h2
            className="text-2xl text-center font-serif font-semibold mb-6"
            style={{ color: '#703b5dff' }}
          >
            Journal Publisher
          </h2>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="border-l-4 mb-6 border-primary p-6 rounded-lg space-y-3"
            style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)' }}
          >
            <p style={{ color: '#703b5dff' }}>
              <strong>Name:</strong> Centre for Interdisciplinary Policy Dialogue, India
            </p>
            <p style={{ color: '#703b5dff' }}>
              <strong>Official Journal:</strong> Law, Diplomacy and Tech Policy Review
            </p>
            <p style={{ color: '#703b5dff' }}>
              <strong>Publisher (Legal Entity):</strong> IISPPR Publication
            </p>
            <p style={{ color: '#703b5dff' }}>
              <strong>Country:</strong> India (International Journal)
            </p>
            <p style={{ color: '#703b5dff' }}>
              <strong>Languages:</strong> English
            </p>
            <p style={{ color: '#703b5dff' }}>
              <strong>Frequency:</strong> Monthly
            </p>
            <p style={{ color: '#703b5dff' }}>
              <strong>Editor-in-Chief:</strong> Kashif Raees
            </p>
            <p style={{ color: '#703b5dff' }}>
              <strong>Contact Email:</strong>{' '}
              <a
                href="mailto:iisppresearch@gmail.com"
                className="underline break-words"
                style={{ color: '#703b5dff' }}
              >
                iisppresearch@gmail.com
              </a>
            </p>
            <p style={{ color: '#703b5dff' }}>
              <strong>ISSN (Online):</strong> Application in process (ID: IDS70965, expected within some months)
            </p>
          </motion.div>

          <div className="text-gray-700 text-center text-sm">
            <p>
              For more information about the publisher, journal, or publication
              process, contact us at{' '}
              <a
                href="mailto:iisppresearch@gmail.com"
                className="underline font-medium"
                style={{ color: '#703b5dff' }}
              >
                iisppresearch@gmail.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PublisherPage;