import { motion } from 'framer-motion';

const EditorialBoard = () => {
  const boardMembers = [
    {
      name: 'Dr. Abuzar Nomani (Post Doc)',
      desc: 'Chief Editor, Assoc. Prof. ',
      email: 'Abuzar.nomani@vit.ac.in',
      postaladdress:
        'Dr. Abuzar Nomani, Associate Professor, Department of Commerce, SSL, Vellore Institute of Technology, Vellore-632014, Tamil Nadu, India',
    },
    {
      name: 'Dr. Rahila Rais',
      desc: 'Assistant professor ,Department of Hindi AMU Aligarh',
      email: 'rrais@myamu.ac.in',
      postaladdress: 'Rahila Rais , Department of Hindi,AMU,UP 202002',
    },
    {
      name: 'Dr. Riaz Ahmad',
      desc: 'Assistant Professor, AMU',
      email: 'rahmad1@myamu.ac.in',
      postaladdress:
        'C-6 Warden House S.S Hall Aligarh Muslim University Aligarh-202002',
    },
    {
      name: 'Dr. Kashif Raees',
      desc: ' Assistant Professor ,Science, Chandigarh University',
      email: 'Kashif.e11790@cumail.in',
      postaladdress:
        'Department of Chemistry, Chandigarh university chandigarh-140413',
    },
    {
      name: 'Mohd Adnan',
      desc: 'Assistant Professor, Uttranchal University, Dehradun, India',
      email: 'mohdadnan@uumail.in',
      postaladdress:
        'Department of commerce, Uttranchal university, Dehradun-248007',
    },
    {
      name: 'Dr. Sunny Wadhwaniya',
      desc: 'Assistant Professor, School of Doctoral Research and Innovation, GLS University',
      email: 'sunny.wadhwania@glsuniversity.ac.in',
      postaladdress: 'Shree Angan Society, Vastrapur, Ahmedabad, Gujarat-380015',
    },
    {
      name: 'Dr. Faizan Khan Sherwani',
      desc: 'Assistant Professor, Department of Management, Jamia Hamdard',
      email: 'drsherwani@jamiahamdard.ac.in',
      postaladdress:
        'Dr APJ Abdul Kalam Boys Hostel pulpehlad pur Jamia Hamdard-110044',
    },
    {
      name: 'Dr. Raj Kumar Singh',
      desc: 'Department of finance,IIM  SIRMUR ',
      email: 'research.associate@iimsirmaur.ac.in',
      postaladdress:
        'Department of finance,IIM SIRMAUR, DHAULA KUAN, SIRMAUR, PAONTA SAHIB, HIMACHAL PRADESH-173025',
    },
    {
      name: 'Dr. Waris Ali Khan',
      desc: 'Universiti Malaysia Sabah',
      email: 'Warisalikhan@ums.edu.my',
      postaladdress:
      '4th Floor, Block A, Faculty of Business Economics and Accountancy, University Malaysia Sabah, Kota Kinabalu, 88400, Sabah, Malaysia',
    },
    {
      name: 'Fatima Zahra BENBRAHIM ',
      desc: 'Ibn Tofaïl University, Morocco ',
      email: 'benbrahim.fatimazahra@uit.ac.ma',
      postaladdress:
      'BP 11223 AGDAL FES MOROCCO',
    },
  ];

  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        background:
          'linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)',
      }}
    >
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white py-12 text-center"
        style={{
          background: 'linear-gradient(to right,  #482742ff)',
        }}
      >
        <h1 className="text-4xl font-bold font-serif mb-2">Editorial Board</h1>
        <p className="text-accent-light max-w-2xl mx-auto px-4">
          Meet our esteemed editorial board committed to academic excellence,
          peer-review integrity, and interdisciplinary leadership.
        </p>
      </motion.div>

      {/* Editorial Members */}
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {boardMembers.map((member, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-accent-light p-6 rounded-xl shadow-md hover:shadow-xl hover:border-rose-900 transition-all duration-300"
            >
              <h2
                className="text-lg font-bold font-serif mb-1"
                style={{ color: '#703b5dff' }}
              >
                {member.name}
              </h2>
              <p className="text-subtext text-sm mb-2 italic">{member.desc}</p>

              {member.email && (
                <p className="text-sm text-gray-700 break-all">
                  <span className="font-medium">Email: </span>
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:underline"
                    style={{ color: '#703b5dff' }}
                  >
                    {member.email}
                  </a>
                </p>
              )}

              {member.postaladdress && (
                <p className="text-sm text-gray-700 mt-1 break-words">
                  <span className="font-medium">Address: </span>
                  {member.postaladdress}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Student Panel 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-4xl mx-auto mt-20 p-6 text-center bg-white border border-accent-light shadow rounded-xl"
        > */}
         {/*  <h2 </motion.div>
            className="text-2xl font-bold mb-2"
            style={{ color: '#703b5dff' }}
          >
            Student Editorial Panel
          </h2>
          <p className="text-gray-700">
            We are building a student-led editorial panel for UG/PG scholars to
            foster leadership and academic excellence. Interested students will
            be added soon.
          </p>  
        </motion.div>
        */}
      </div>
    </div>
  );
};

export default EditorialBoard;
