import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-white"
      style={{
        background: 'linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <motion.div
        className="bg-primary-dark text-white py-16 px-4 sm:px-6 text-center"
        style={{
          background: 'linear-gradient(to right,  #482742ff)',
        }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold font-serif mb-6 sm:mb-8">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-accent-light">
          Reach out to join our academic network. Whether you want to collaborate,
          publish, or simply learn more—your ideas, research, and insights are welcome here.
        </p>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        className="w-full flex justify-center px-4 py-12 sm:py-16 bg-primary-light/25"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-white max-w-4xl w-full rounded-lg shadow-md p-4 sm:p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-2xl sm:text-3xl font-serif font-bold text-primary-dark text-center mt-3 sm:mt-5 mb-10 sm:mb-12"
            style={{ color: '#693155ff' }}
          >
            Contact Information
          </h2>

          <div className="space-y-8 sm:space-y-9 text-text">
            {[
              {
                icon: Building2,
                title: "Office",
                content: (
                  <>
                    Office number 30, Nihard Plaza,<br />
                    Near Zakir Hussain school,<br />
                    AMU Aligarh, UP, 202001
                  </>
                ),
              },
              {
                icon: MapPin,
                title: "Publisher Address",
                content: (
                  <>
                    IISPPR PUBLICATION,<br />
                    Khera Afghan, Saharanpur, UP 247340
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 95287 82464",
              },
              {
                icon: Mail,
                title: "Email",
                content: "iisppresearch@gmail.com",
              },
            ].map(({ icon: Icon, title, content }, i) => (
              <motion.div
                key={title}
                className="flex items-start gap-4"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Icon className="w-6 h-6 text-primary mt-1 ml-2 sm:ml-12" />
                <div>
                  <h3 className="font-semibold text-primary">{title}</h3>
                  <p className="text-subtext break-words">{content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
