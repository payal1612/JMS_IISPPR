import { useState } from "react";
import { motion } from "framer-motion";

const Ethics = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const ethicsSections = [
    {
      title: "1. Author Responsibilities",
      items: [
        "✔ Originality and Plagiarism: Authors must ensure submissions are original and properly cited.",
        "✔ Accurate Representation: Report findings honestly without manipulation.",
        "✔ Authorship and Acknowledgment: Credit only those with significant contributions.",
        "✔ Multiple Submissions: No simultaneous submission of the same work.",
        "✔ Conflicts of Interest: Must be disclosed.",
        "✔ Ethical Research Standards: Follow institutional and ethical norms.",
      ],
    },
    {
      title: "2. Editorial Responsibilities",
      items: [
        "✔ Fair and Transparent Review Process: Double-blind, merit-based decisions.",
        "✔ Support for Emerging Researchers: Provide constructive, developmental feedback.",
        "✔ Confidentiality: Maintain manuscript and author privacy.",
        "✔ Editorial Integrity: Recuse where conflicts exist.",
      ],
    },
    {
      title: "3. Peer Reviewer Responsibilities",
      items: [
        "✔ Confidentiality and Respect: Treat submissions as private.",
        "✔ Constructive Feedback: Fair, unbiased, actionable reviews.",
        "✔ Conflicts of Interest: Decline reviews if any conflict exists.",
      ],
    },
    {
      title: "4. Anti-Predatory Publishing Commitment",
      items: [
        "LDTPPR was founded to counter unethical practices that exploit student researchers.",
        "✔ Full transparency in our submission, review, and publication process.",
        "✔ No hidden fees or deceptive charges.",
        "✔ Verified editorial board with real academic credentials.",
        "✔ Zero tolerance for academic exploitation.",
      ],
    },
    {
      title: "5. Misconduct Handling",
      items: [
        "Suspected violations will be thoroughly investigated.",
        "✔ Rejection or withdrawal of submissions.",
        "✔ Retraction of published articles.",
        "✔ Notification to academic institutions.",
        "✔ Permanent bans for serious misconduct.",
      ],
    },
    {
      title: "6. Inclusivity and Diversity",
      items: [
        "✔ Representation across geographies, identities, and perspectives.",
        "✔ Equal opportunity for student and early-career researchers.",
        "✔ Respectful academic discourse that upholds dignity and inclusivity.",
      ],
    },
  ];

  const toggleCard = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <motion.div
      className="min-h-screen bg-primary-light/25"
      style={{
        background: "linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Banner */}
      <motion.div
        className="bg-primary-dark text-white py-16 px-6 text-center"
        style={{ background: "linear-gradient(to right,  #482742ff)" }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold font-serif mb-4">Ethical Guidelines</h1>
        <p className="text-md max-w-3xl mx-auto text-accent-light">
          Our unwavering commitment to academic integrity, transparency, and student empowerment drives everything we do at LDTPPR.
        </p>
      </motion.div>

      {/* LDTPPR Description Box */}
      <motion.div
        className="max-w-5xl mx-auto px-6 py-6 text-text bg-white rounded-lg shadow-md mt-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <h2
          className="text-2xl font-bold text-primary font-serif mb-2"
          style={{ color: "#693155ff" }}
        >
          Law, Diplomacy, Tech & Public Policy Review (LDTPPR)
        </h2>
        <p className="text-subtext text-justify">
          At Law, Diplomacy, Tech & Public Policy Review, we uphold the highest standards of academic integrity, transparency, and ethical publishing. These guidelines apply to all authors, editors, peer reviewers, and contributors.
        </p>
      </motion.div>

      {/* Ethics Vertical Cards List */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        {ethicsSections.map((section, index) => (
          <motion.div
            key={index}
            onClick={() => toggleCard(index)}
            className={`bg-white rounded-lg shadow-md p-6 border-l-4 cursor-pointer transition-all duration-300 ${
              activeIndex === index ? "border-primary-light" : "border-primary"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3
              className="text-lg font-semibold text-primary mb-2"
              style={{ color: "#693155ff" }}
            >
              {section.title}
            </h3>
            {activeIndex === index && (
              <ul className="mt-3 pl-4 list-disc text-subtext space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>

      {/* Final Statement */}
      <motion.p
        className="text-center text-white text-primary font-semibold italic text-lg pb-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        LDTPPR stands for academic integrity, inclusivity, and empowering the next generation of global thinkers through ethical, rigorous publishing.
      </motion.p>
    </motion.div>
  );
};

export default Ethics;
