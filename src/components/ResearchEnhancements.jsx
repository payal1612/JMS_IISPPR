import { BookOpen, Globe, Users, Brain, Download, BarChart2, FileText, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const ResearchEnhancements = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative group bg-white border border-accent-light rounded-xl shadow-md p-8 mb-8 max-w-7xl mx-auto transition-all duration-300 hover:shadow-xl hover:border-primary/60 hover:scale-[1.01] ease-in-out overflow-hidden"
  >
    {/* Decorative left vertical bar */}
    <motion.div 
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute top-0 left-0 h-full w-1 rounded-s-xl group-hover:opacity-90 transition-all duration-300" style={{ background: '#482742ff'}}
    />

    {/* Heading */}
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="text-2xl font-bold mb-4 flex items-center gap-2 relative z-10" style={{ color: '#482742ff' }}
    >
      <motion.span 
        initial={{ rotate: -30, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <Search className="w-6 h-6"/>
      </motion.span>
      Research Enhancements & Additions
    </motion.h2>

    <div className="space-y-6 text-base text-gray-800 relative z-10 grid gap-6">
      {[
        /* 1. Theoretical Framework Expansion */
        <motion.div
          key="1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>1. Theoretical Framework Expansion</b></h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><b>Soft Power Theory by Joseph Nye:</b> Emphasize how cultural diplomacy operates within Nye's "soft power" framework—i.e., the ability to influence others through attraction rather than coercion.</li>
            <li><b>Cultural Capital (Bourdieu):</b> Apply Bourdieu's idea of "cultural capital" to analyze how India leverages traditional assets like Yoga, Ayurveda, and cuisine to increase global stature.</li>
          </ul>
        </motion.div>,

        /* 2. India-China Soft Power Competition */
        <motion.div
          key="2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>2. India-China Soft Power Competition</b></h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border mb-2">
              <thead>
                <tr className="text-white" style={{background: '#703b5dff'}}>
                  <th className="px-2 py-1 border">Aspect</th>
                  <th className="px-2 py-1 border">India</th>
                  <th className="px-2 py-1 border">China</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border px-2 py-1">Cultural Centers</td>
                  <td className="border px-2 py-1">ICCR (37 countries)</td>
                  <td className="border px-2 py-1">Confucius Institutes (530+ globally)</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Cultural Themes</td>
                  <td className="border px-2 py-1">Yoga, Ayurveda, Bollywood</td>
                  <td className="border px-2 py-1">Confucian ethics, Mandarin, Art</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Strategy</td>
                  <td className="border px-2 py-1">Decentralized, diaspora-led</td>
                  <td className="border px-2 py-1">State-driven, centrally funded</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Challenges</td>
                  <td className="border px-2 py-1">Fragmentation, limited funding</td>
                  <td className="border px-2 py-1">Political suspicion, overreach</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-sm mb-2">
            <b>Comparative case studies:</b> Africa (Kenya, Tanzania), Southeast Asia (Vietnam, Cambodia)
          </div>
        </motion.div>,

        /* 3. Cultural Diplomacy in Conflict Zones */
        <motion.div
          key="3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>3. Cultural Diplomacy in Conflict Zones</b></h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><b>Sri Lanka:</b> Use of Buddhist diplomacy for reconciliation post-civil war.</li>
            <li><b>Myanmar & Bhutan:</b> Language, religious diplomacy, and border dialogue.</li>
            <li><b>Nepal:</b> Shared cultural heritage (Ramayana circuit) used for soft influence.</li>
          </ul>
        </motion.div>,

        /* 4. Cultural Diplomacy vs. Cultural Imperialism */
        <motion.div
          key="4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>4. Cultural Diplomacy vs. Cultural Imperialism</b></h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Raise the debate: Are India's initiatives (e.g., Bollywood, Yoga) becoming overly standardized or hegemonic in certain regions?</li>
            <li><b>Recommendation:</b> Promote cultural pluralism over cultural dominance, allow regional diversity in exports.</li>
          </ul>
        </motion.div>,

        /* 5. Rise of Digital Cultural Diplomacy */
        <motion.div
          key="5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>5. Rise of Digital Cultural Diplomacy</b></h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border mb-2">
              <thead>
                <tr className="text-white" style={{background: '#703b5dff'}}>
                  <th className="px-2 py-1 border">Actor/Platform</th>
                  <th className="px-2 py-1 border">Example</th>
                  <th className="px-2 py-1 border">Impact Area</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border px-2 py-1">YouTube Diaspora Voices</td>
                  <td className="border px-2 py-1">"Living in India as a Foreigner" series</td>
                  <td className="border px-2 py-1">Real-world insight, soft advocacy</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">TikTok & Reels</td>
                  <td className="border px-2 py-1">Indian dance & recipe virality</td>
                  <td className="border px-2 py-1">Youth diplomacy, intercultural exchange</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">MOOCs & Virtual Museums</td>
                  <td className="border px-2 py-1">SWAYAM, ICCR Virtual Gallery</td>
                  <td className="border px-2 py-1">Global education & heritage sharing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-sm mb-2">
            <b>Recommendation:</b> Create a Digital India Culture Portal aggregating global cultural content.
          </div>
        </motion.div>,

        /* 6. Decentralized Cultural Diplomacy */
        <motion.div
          key="6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>6. Decentralized Cultural Diplomacy</b></h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Move away from Delhi-centric export of North Indian traditions.</li>
            <li>Incorporate South, Northeast, and Tribal cultures—Eg: Nagaland's Hornbill Festival, Koodiyattam from Kerala.</li>
          </ul>
        </motion.div>,

        /* 7. Unified Cultural Diplomacy Dashboard */
        <motion.div
          key="7"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>7. Unified Cultural Diplomacy Dashboard</b></h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border mb-2">
              <thead>
                <tr className="text-white" style={{background: '#703b5dff'}}>
                  <th className="px-2 py-1 border">Module</th>
                  <th className="px-2 py-1 border">Function</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">Event Tracker</td>
                  <td className="border px-2 py-1">Global calendar of cultural events</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Feedback System</td>
                  <td className="border px-2 py-1">Real-time surveys and evaluations</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Stakeholder Network</td>
                  <td className="border px-2 py-1">MEA, ICCR, diaspora, NGOs</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Metrics Panel</td>
                  <td className="border px-2 py-1">Outreach, engagement, investment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>,

        /* 8. Budget & Institutional Strengthening */
        <motion.div
          key="8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>8. Budget & Institutional Strengthening</b></h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Increase ICCR's budget by ₹500 crore (as per Standing Committee suggestions).</li>
            <li>Define ICCR's mandate: shift from coordination to implementation and innovation.</li>
            <li>Create MEACULT Coordination Committee across ministries (MEA, Culture, Education, Tourism).</li>
          </ul>
        </motion.div>,

        /* 9. Evaluation & Monitoring Framework */
        <motion.div
          key="9"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>9. Evaluation & Monitoring Framework</b></h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border mb-2">
              <thead>
                <tr className="text-white" style={{background: '#703b5dff'}}>
                  <th className="px-2 py-1 border">Element</th>
                  <th className="px-2 py-1 border">Tool/Suggestion</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border px-2 py-1">Impact Metrics</td>
                  <td className="border px-2 py-1">Number of countries engaged, audience sizes</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Feedback Loops</td>
                  <td className="border px-2 py-1">Post-event surveys, diaspora interviews</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Policy Feedback</td>
                  <td className="border px-2 py-1">External audits (UNESCO, G20 observers)</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Performance Index</td>
                  <td className="border px-2 py-1">India Cultural Diplomacy Index (ICDI)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>,

        /* 10. Addressing Internal Contradictions */
        <motion.div
          key="10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>10. Addressing Internal Contradictions</b></h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border mb-2">
              <thead>
                <tr className="text-white" style={{background: '#703b5dff'}}>
                  <th className="px-2 py-1 border">Concern</th>
                  <th className="px-2 py-1 border">Global Perception Impact</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border px-2 py-1">Press freedom issues</td>
                  <td className="border px-2 py-1">Undermines "Vasudhaiva Kutumbakam"</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Religious intolerance</td>
                  <td className="border px-2 py-1">Weakens pluralism branding</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Gender-based violence</td>
                  <td className="border px-2 py-1">Contradicts narratives of inclusivity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>,

        /* Future Editions & Journal Themes */
        <motion.div
          key="11"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>🚀 Future Editions & Journal Themes</b></h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><b>Volume 2: India in the Indo-Pacific</b> — Case studies: Indonesia (shared Ramayana), Thailand (Ayutthaya), Japan (Buddhism)</li>
            <li><b>Volume 3: Diaspora Dialogues</b> — Comparative diaspora impact: USA, Mauritius, South Africa, Fiji. Cultural lobbying and remittance diplomacy</li>
            <li><b>Volume 4: Culture as Currency in the Digital Era</b> — India's gaming, animation, cuisine, OTT media. Data: Top 10 Indian Netflix exports (e.g., Sacred Games, RRR)</li>
          </ul>
        </motion.div>,

        /* Appendices & Data Visualizations */
        <motion.div
          key="12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="border-l-4 mb-6 border-new-primary p-6 rounded-lg space-y-3"
          style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)', color: '#703b5dff' }}
        >
          <h3 className="font-semibold mb-2"><b>📂 Appendices & Data Visualizations (Suggested)</b></h3>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full text-sm border mb-2">
              <thead>
                <tr className="text-white" style={{background: '#703b5dff'}}>
                  <th className="px-2 py-1 border">Year</th>
                  <th className="px-2 py-1 border">Initiative/Event</th>
                  <th className="px-2 py-1 border">Region</th>
                  <th className="px-2 py-1 border">Impact</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border px-2 py-1">1950</td>
                  <td className="border px-2 py-1">ICCR Formation</td>
                  <td className="border px-2 py-1">Global</td>
                  <td className="border px-2 py-1">Formal institution</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">1975</td>
                  <td className="border px-2 py-1">First Festival of India (UK)</td>
                  <td className="border px-2 py-1">Europe</td>
                  <td className="border px-2 py-1">High cultural exposure</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">2014</td>
                  <td className="border px-2 py-1">International Day of Yoga (UN)</td>
                  <td className="border px-2 py-1">Global</td>
                  <td className="border px-2 py-1">190+ countries involved</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">2023</td>
                  <td className="border px-2 py-1">G20 Culture Track (Varanasi)</td>
                  <td className="border px-2 py-1">Global</td>
                  <td className="border px-2 py-1">Multilateral engagement</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">2025</td>
                  <td className="border px-2 py-1">WAVES Summit (Mumbai)</td>
                  <td className="border px-2 py-1">Global</td>
                  <td className="border px-2 py-1">₹1,300 cr deals, 90+ nations</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full text-sm border mb-2">
              <thead>
                <tr className="text-white" style={{background: '#703b5dff'}}>
                  <th className="px-2 py-1 border">Export Item</th>
                  <th className="px-2 py-1 border">Global Reach</th>
                  <th className="px-2 py-1 border">Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border px-2 py-1">Yoga</td>
                  <td className="border px-2 py-1">190+ countries (UN Day)</td>
                  <td className="border px-2 py-1">Cultural + health diplomacy</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Bollywood Films</td>
                  <td className="border px-2 py-1">Central/West Asia, Africa</td>
                  <td className="border px-2 py-1">Growing OTT influence</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Ayurveda</td>
                  <td className="border px-2 py-1">Southeast Asia, EU</td>
                  <td className="border px-2 py-1">WHO collaboration opportunity</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Cuisine</td>
                  <td className="border px-2 py-1">US, UK, Canada</td>
                  <td className="border px-2 py-1">Indian restaurants as diplomatic nodes</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Diaspora Festivals</td>
                  <td className="border px-2 py-1">US, Mauritius, Malaysia</td>
                  <td className="border px-2 py-1">Identity reinforcement + soft influence</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full text-sm border mb-2">
              <thead>
                <tr className="text-white" style={{background: '#703b5dff'}}>
                  <th className="px-2 py-1 border">Region</th>
                  <th className="px-2 py-1 border">Engagement Level</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="border px-2 py-1">High Engagement</td>
                  <td className="border px-2 py-1">US, UK, UAE, Japan, Kenya</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">Low Engagement</td>
                  <td className="border px-2 py-1">Eastern Europe, Latin America (potential expansion zones)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      ].map((component, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {component}
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default ResearchEnhancements;