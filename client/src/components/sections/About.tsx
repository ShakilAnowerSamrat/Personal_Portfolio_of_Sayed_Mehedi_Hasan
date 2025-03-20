import { motion } from 'framer-motion';

const About = () => {
  const personalInfo = [
    { icon: "fas fa-calendar", title: "Date of Birth", value: "19 December 1987" },
    { icon: "fas fa-flag", title: "Nationality", value: "Bangladeshi" },
    { icon: "fas fa-user", title: "Marital Status", value: "Unmarried" },
    { icon: "fas fa-language", title: "Language Proficiency", value: "Fluent in Bengali and English (speaking, writing, reading, listening)" },
    { icon: "fas fa-id-card", title: "NID", value: "XXXX-XXXX-XXXX" },
    { icon: "fas fa-map-marker-alt", title: "Address", value: "Village – Swarupdaha, Post – Poradaha, PS – Mirpur, District – Kushtia, Post Code: 7031" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-400/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-['Inter'] text-gradient"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 w-20 mx-auto mt-4 mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          
          <motion.p 
            className="max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Dedicated professional with diverse experience in education and business management, seeking opportunities to apply my skills and contribute to meaningful growth.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto glassmorphism rounded-xl p-8 glow-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-xl font-['Inter'] font-semibold mb-4 text-gradient"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Career Objective
          </motion.h3>
          
          <motion.p 
            className="text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I am seeking a challenging and dynamic role that allows me to utilize my potential, creativity, and skills to contribute innovatively while continuously enhancing my knowledge and serving my country to the best of my abilities.
          </motion.p>
          
          <motion.h3 
            className="text-xl font-['Inter'] font-semibold mb-4 text-gradient"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Personal Information
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {personalInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="flex items-start hover-lift p-4 rounded-lg bg-white/60 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3">
                  <i className={info.icon}></i>
                </div>
                <div>
                  <p className="font-medium text-primary">{info.title}</p>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
