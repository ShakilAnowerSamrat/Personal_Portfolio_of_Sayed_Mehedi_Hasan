const About = () => {
  const personalInfo = [
    { icon: "fas fa-calendar", title: "Date of Birth", value: "19 December 1987" },
    { icon: "fas fa-flag", title: "Nationality", value: "Bangladeshi" },
    { icon: "fas fa-user", title: "Marital Status", value: "Unmarried" },
    { icon: "fas fa-language", title: "Language Proficiency", value: "Fluent in Bengali and English (speaking, writing, reading, listening)" },
    { icon: "fas fa-id-card", title: "NID", value: "3265786578" },
    { icon: "fas fa-map-marker-alt", title: "Address", value: "Village – Swarupdaha, Post – Poradaha, PS – Mirpur, District – Kushtia, Post Code: 7031" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-primary">About Me</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4 mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Dedicated professional with diverse experience in education and business management, seeking opportunities to apply my skills and contribute to meaningful growth.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-['Inter'] font-semibold mb-4 text-primary">Career Objective</h3>
          <p className="text-gray-700 mb-8">
            I am seeking a challenging and dynamic role that allows me to utilize my potential, creativity, and skills to contribute innovatively while continuously enhancing my knowledge and serving my country to the best of my abilities.
          </p>
          
          <h3 className="text-xl font-['Inter'] font-semibold mb-4 text-primary">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {personalInfo.map((info, index) => (
              <div key={index} className="flex items-start">
                <div className="w-8 text-blue-400"><i className={info.icon}></i></div>
                <div>
                  <p className="font-medium">{info.title}</p>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
