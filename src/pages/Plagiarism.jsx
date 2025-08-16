import { motion } from "framer-motion";

const Plagiarism = () => (
  <motion.div
    className="min-h-screen bg-primary-light/25"
    style={{
      background: 'linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)',
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    {/* Hero Banner */}
    <motion.div
      className="bg-primary-dark text-white py-14 px-4 sm:px-6 text-center"
      style={{
        background: 'linear-gradient(to right,  #482742ff)',
      }}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-6 mt-6">
        Plagiarism & AI Content Policy
      </h1>
      <p className="text-base sm:text-lg max-w-4xl mt-4 mb-4 mx-auto text-accent-light font-semibold">
        Upholding originality and responsible AI usage to ensure academic excellence and publication integrity.
      </p>
    </motion.div>

    {/* Content Container */}
    <motion.div
      className="max-w-6xl mx-auto px-4 sm:px-6 py-10 leading-relaxed text-text bg-white rounded-lg shadow-md my-10 space-y-10"
      style={{ color: '#693155ff' }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      {[
        {
          title: "Definition of Plagiarism",
          points: [
            "Copying text or ideas from others without proper citation",
            "Self-plagiarism (reusing one's own published work without disclosure)",
            "Paraphrasing without credit",
            "Using AI tools to generate content without disclosure",
          ],
        },
        {
          title: "Plagiarism Screening",
          points: [
            "All submissions undergo mandatory plagiarism checks",
            "10% similarity threshold (excluding references and common phrases)",
          ],
        },
        {
          title: "Consequences",
          points: [
            "Immediate rejection of plagiarized submissions",
            "Blacklisting of authors found guilty of plagiarism",
            "Reporting to the author's institution if necessary",
            "Retraction of published articles if plagiarism is discovered post-publication",
          ],
        },
        {
          title: "AI-Generated Content Policy",
          points: [
            <><b>Permitted:</b> Use of AI for grammar checking, minor rephrasing, or language improvement</>,
            <><b>Prohibited:</b> Submitting AI-generated articles or sections without disclosure</>,
            "Authors must clearly disclose any use of AI tools in their manuscript",
            "The journal may use AI-detection tools and reserves the right to reject undisclosed AI-generated content",
            "Final accountability for content integrity lies with the author",
          ],
        },
      ].map(({ title, points }, idx) => (
        <motion.section
          key={idx}
          className="px-4 sm:px-8 lg:px-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-xl sm:text-2xl font-bold text-primary font-serif mb-4"
            style={{ color: '#693155ff' }}
          >
            {title}
          </h2>
          <ul className="list-disc pl-6 text-subtext space-y-2 text-sm sm:text-base">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </motion.section>
      ))}

      <motion.p
        className="mt-12 font-semibold text-primary text-center italic text-sm sm:text-base px-4"
        style={{ color: '#693155ff' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        LDTPPR is committed to safeguarding originality, ensuring accountability, and promoting responsible innovation in research writing.
      </motion.p>
    </motion.div>
  </motion.div>
);

export default Plagiarism;
