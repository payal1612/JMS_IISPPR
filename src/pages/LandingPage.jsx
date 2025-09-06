// Icons
import {
  BookOpen,
  Users,
  FileText,
  Phone,
  Search,
  ArrowRight,
  Zap,
  Globe,
  Shield,
  User
} from "lucide-react";
// At top with other imports
import { motion } from "framer-motion";

// Animation Variants
const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};


// React & Router
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Navigation Links
const navLinks = [
  {
    to: "/publisher",
    label: "Publisher Details",
    desc: "Learn about our publisher, editorial board, and publishing standards.",
    icon: Users,
  },
  {
    to: "/issn",
    label: "ISSN Details",
    desc: "View ISSN registration, journal metrics, and indexing information.",
    icon: FileText,
  },
  {
    to: "/research",
    label: "Research Articles",
    desc: "Explore our extensive collection of peer-reviewed research publications.",
    icon: Search,
  },
  {
    to: "/editions",
    label: "Journal Editions",
    desc: "Browse current and archived journal issues with complete article details and editorial information.",
    icon: BookOpen,
  },
  {
    to: "/editorial-board",
    label: "Editorial Board",
    desc: "Meet our distinguished editorial board members, library staff, and academic leadership team.",
    icon: Users,
  },
  {
    to: "/ethics",
    label: "Ethics",
    desc: "Read about our publication ethics and standards.",
    icon: Shield,
  },
  {
    to: "/plagiarism",
    label: "Plagiarism Policy",
    desc: "Understand our strict anti-plagiarism policy.",
    icon: FileText,
  },
  {
    to: "/contact-us",
    label: "Contact Info",
    desc: "Get in touch with our editorial team or technical support.",
    icon: Phone,
  },
];

// Feature Highlights
const features = [
  {
    icon: Zap,
    title: "Rigorous Review Process",
    desc: "Double-blind peer review ensuring the highest academic standards with transparent evaluation criteria",
  },
  {
    icon: Globe,
    title: "International Indexing",
    desc: "Published articles are indexed in leading academic databases for maximum scholarly visibility",
  },
  {
    icon: Shield,
    title: "Editorial Excellence",
    desc: "Managed by distinguished scholars and experts committed to advancing academic discourse",
  },
];
const LandingPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);


  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordFade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };



  return (
    <div className="flex flex-col min-h-screen text-white"
      style={{
        background: "linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff"
      }} >
      {/* --- Header Navigation --- */}
      <header className="bg-bg-light border-b border-accent-light shadow-sm sticky top-0 z-50 transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

            {/* Logo */}
            <div className="flex items-center space-x-3 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-serif font-bold text-text tracking-wide">
                  Law Diplomacy Review
                </h1>
                <p className="text-[11px] sm:text-xs text-subtext uppercase tracking-wide">
                  Academic Publishing Platform
                </p>
              </div>
            </div>


            <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full shadow-sm">
              January 2025 - Multidisciplinary Subjects
            </span>

            {/* Nav Buttons & Account Dropdown */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:items-center w-full sm:w-auto"
              ref={dropdownRef}
            >
              <button
                onClick={() => navigate("/editions")}
                className="w-full sm:w-auto flex justify-center items-center gap-2 px-5 py-3 text-sm sm:text-base text-text hover:text-primary border border-muted rounded-lg bg-white hover:border-primary hover:bg-primary-light transition-all hover:scale-[1.03]"
              >
                <BookOpen className="w-4 h-4" />
                Journal Editions
              </button>

              <button
                onClick={() => navigate("/editorial-board")}
                className="w-full sm:w-auto flex justify-center items-center gap-2 px-5 py-3 text-sm sm:text-base bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all hover:scale-[1.03]"
              >
                <Users className="w-4 h-4" />
                Editorial Board
              </button>

              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="w-full sm:w-auto flex justify-center items-center gap-2 px-5 py-3 text-sm sm:text-base text-text hover:text-primary border border-muted rounded-lg bg-white hover:border-primary hover:bg-primary-light transition-all hover:scale-[1.03]"
              >
                <User className="w-4 h-4" />
                Account
              </button>

              {dropdownOpen && (
                <div className="mt-2 w-full sm:w-48 bg-white border border-accent-light rounded shadow-xl py-1 z-50 animate-fadeIn">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate("/login");
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-text hover:bg-primary-light transition-colors"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate("/signup");
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-text hover:bg-primary-light transition-colors"
                  >
                    Create Account
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>




      {/* --- Hero Section --- */}
      <section
        className="relative pt-32 pb-32 min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden border-y-8 border-white font-serif"
        style={{
          backgroundImage: "linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff"


        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 px-6">

          {/* Left Image Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              "https://plus.unsplash.com/premium_photo-1684444605542-93725082d214",
              "https://images.unsplash.com/photo-1483546363825-7ebf25fb7513",
              "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81",
              "https://images.unsplash.com/photo-1513542992587-cd39ba97057c"
            ].map((src, index) => (
              <motion.img
                key={index}
                variants={fadeInUp}
                src={`${src}?w=600&q=60`}
                className="w-80 h-80 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            ))}
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            className="max-w-2xl text-center lg:text-left space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block px-5 py-2 bg-primary-light text-primary text-base sm:text-lg font-semibold rounded-full"
            >
              Established Academic Publishing
            </motion.span>

            <motion.h1
              className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight"
              variants={container}
            >
              {"Law, Diplomacy, Tech and Policy Review"
                .split(" ")
                .map((word, index) => (
                  <motion.span key={index} variants={wordFade} className="inline-block mr-2">
                    {word}
                  </motion.span>
                ))}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light"
            >
              A premier scholarly journal dedicated to advancing interdisciplinary research
              at the intersection of law, diplomacy, technology, and public policy through
              rigorous peer-reviewed publications.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
            >
              {[["Browse Journal", "/editions"], ["About the Journal", "/publisher"]].map(
                ([label, to], i) => (
                  <Link
                    key={i}
                    to={to}
                    className="px-7 py-3 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-primary via-accent to-primary-dark text-white shadow-lg hover:from-primary-dark hover:to-primary hover:shadow-xl hover:scale-[1.06] transition-all duration-300 ease-in-out group relative overflow-hidden"
                  >
                    <span className="relative z-10">{label}</span>
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300 rounded-full blur-sm" />
                  </Link>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>








      {/* --- Journal Resources Section --- */}
      <section
        className="relative py-24 px-4 bg-cover bg-center bg-no-repeat border-y-8 border-white"
        style={{
          backgroundImage: "linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff"


        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

        {/* Section Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={heroContainer}
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6"
              variants={fadeInUp}
            >
              Journal Resources
            </motion.h2>
            <motion.p
              className="text-lg text-white max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Access comprehensive information about our journal, submission
              guidelines, and scholarly resources
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={heroContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.div key={link.to} variants={fadeInUp}>
                <Link
                  to={link.to}
                  className="group relative flex flex-col justify-between min-h-[280px] rounded-2xl p-6 border border-white/10 bg-white/10 backdrop-blur-md shadow-md hover:bg-white hover:border-white/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  {/* Top icon and text */}
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-light rounded-lg mb-4 group-hover:bg-primary transition-colors">
                      <link.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-white group-hover:text-primary-dark transition-colors duration-300">
                      {link.label}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed group-hover:text-black transition-colors duration-300">
                      {link.desc}
                    </p>
                  </div>

                  {/* Bottom Learn More */}
                  <div className="flex items-center text-sm font-medium text-accent-light group-hover:text-accent pt-6">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Background Icon */}
                  <div className="absolute right-4 bottom-4 text-white/10 group-hover:text-black/10 transition-opacity duration-300 text-[4rem] pointer-events-none">
                    <link.icon />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>









      {/* --- Journal Statistics Section --- */}
      {/* <section
        className="py-20 px-4 text-white"
        style={{
          background: "linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff"
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {(() => {
            const stats = [
              { end: 2500, suffix: "+", label: "Published Articles" },
              { end: 180, suffix: "+", label: "Editorial Board Members" },
              { end: 75, suffix: "+", label: "Countries Represented" },
              { end: 15, suffix: "", label: "Years Publishing" },
            ];
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

            return stats.map(({ end, suffix, label }, index) => (
              <div
                key={index}
                ref={index === 0 ? ref : null}
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-4xl font-serif font-bold mb-2 animate-fadeInUp">
                  {inView ? <CountUp end={end} duration={2} suffix={suffix} /> : "0"}
                </div>
                <div className="text-muted text-sm uppercase tracking-wide">
                  {label}
                </div>
              </div>
            ));
          })()}
        </div>
      </section> */}



      <div
        className="text-white"
        style={{
          background: 'linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)',
        }}
      >
        {/* --- Editorial Standards Section --- */}
        <section className="py-20 px-4 border-t border-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={heroContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-white"
              >
                Editorial Excellence
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-pink-100 max-w-3xl mx-auto mb-16"
              >
                Our commitment to scholarly rigor and academic integrity defines
                every aspect of our publishing process
              </motion.p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-12"
              variants={heroContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl shadow-md transition-all duration-300 p-6 group transform hover:-translate-y-1 hover:scale-[1.02] hover:border-rose-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-rose-500 group-hover:text-rose-700 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900 group-hover:text-rose-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* --- Call to Action Section --- */}
        <section className="py-20 text-center px-4 relative overflow-hidden border-t border-white">
          <div className="absolute inset-0 bg-transparent backdrop-blur-sm z-0" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4 animate-fadeInUp">
              Submit Your Research
            </h2>

            <p className="text-base sm:text-lg text-pink-100 mb-6 max-w-2xl mx-auto animate-fadeIn">
              Join our community of distinguished scholars and contribute to the
              advancement of interdisciplinary research
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-rose-400/40 hover:from-rose-700 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-white/10 backdrop-blur-sm group"
              >
                <span className="group-hover:underline decoration-white decoration-2 underline-offset-4">
                  Submission Guidelines
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link> */}

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-rose-600 via-rose-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-rose-400/40 hover:from-rose-700 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 border border-white/10 backdrop-blur-sm group"
              >
                <span className="group-hover:underline decoration-white decoration-2 underline-offset-4">
                  Submit your articles at iisppresearch@gmail.com
                </span>
                {/* <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
              </Link>
            </div>
          </div>
        </section>
      </div>



      {/* --- Footer Section --- */}
      <footer className="bg-[#0b0b0b] border-t border-accent-light py-12 text-white px-4 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a]/40 to-[#333]/10 animate-pulse z-0" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Logo and Description */}
          <div className="group">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-bg-light rounded-full flex items-center justify-center shadow-lg group-hover:rotate-6 transform transition duration-500">
                <BookOpen className="w-5 h-5 text-primary-dark transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-bg-light text-lg tracking-wide group-hover:text-accent transition-colors duration-300">
                  Law, Diplomacy, Tech and Public Policy Review
                </h3>
                {/* <p className="text-xs text-white opacity-80">Law, Diplomacy, Tech & Public Policy Review</p> */}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/90 group-hover:opacity-100 transition-opacity duration-300">
              A peer-reviewed academic journal committed to rigorous research and interdisciplinary dialogue across global issues.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="font-serif font-semibold text-bg-light mb-4 text-lg underline decoration-accent decoration-2 underline-offset-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                ["Blog", "/blog"],
                ["Research Archive", "/research"],
                ["Publisher Info", "/publisher"],
                ["ISSN Details", "/issn"],
                ["Contact Us", "/contact-us"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  className="text-white hover:text-accent-light transition duration-300 relative group"
                >
                  <span className="group-hover:underline underline-offset-2 decoration-accent decoration-2">{label}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent-light group-hover:w-full transition-all duration-500"></span>
                </Link>
              ))}
            </div>
          </div> */}
        </div>

        {/* Footer Bottom Text */}
        <div className="relative z-10 text-center border-t border-white/20 pt-6 mt-6 text-sm text-bg-light tracking-wide">
          &copy; {new Date().getFullYear()} Law, Diplomacy, Technology & Public Policy Review. All rights reserved.
        </div>
      </footer>

    </div>
  );
};
export default LandingPage;
