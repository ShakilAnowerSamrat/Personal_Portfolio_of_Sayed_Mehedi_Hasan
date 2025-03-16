const Experience = () => {
  const experiences = [
    {
      title: "Lecturer – Accounting & Information Systems",
      company: "Kushtia Hazi Abul Hossain Institute & Technology (KHABIT)",
      duration: "1.5 years",
      description: "Taught accounting and information systems courses to undergraduate students, prepared course materials, conducted assessments, and provided academic guidance.",
      align: "right" // will be left on mobile
    },
    {
      title: "Management Trainee – Accounts",
      company: "Marketing Research and Survey Department, PRAN-RFL Group",
      duration: "1 year",
      description: "Assisted in financial reporting, budget preparation, and accounting operations. Participated in marketing research projects and data analysis.",
      align: "left" // will be right on mobile
    },
    {
      title: "Sales Representative",
      company: "PRAN-RFL Group",
      duration: "1 year",
      description: "Managed client relationships, achieved sales targets, and represented the company's product line in the market. Conducted market research and competitor analysis.",
      align: "right" // will be left on mobile
    },
    {
      title: "Lecturer",
      company: "Swarupdaha Model Madrasa, Poradaha",
      duration: "3 years",
      description: "Developed curriculum and taught various subjects. Mentored students and coordinated academic activities and events.",
      align: "left" // will be right on mobile
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-primary">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4 mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            My career spans across education and corporate sectors, providing me with diverse experience in teaching, management, and sales.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className="ml-10 md:ml-0 mb-12 md:mb-16 relative pb-4 md:text-right md:text-left">
              <span className="timeline-dot top-0"></span>
              <div className={`md:w-5/12 ${exp.align === 'left' ? 'md:mr-auto md:pl-10 md:text-right' : 'md:ml-auto md:pr-10'} bg-gray-50 p-6 rounded-lg shadow-sm`}>
                <h3 className="text-xl font-semibold font-['Inter'] text-primary mb-2">{exp.title}</h3>
                <h4 className="text-blue-400 font-medium mb-2">{exp.company}</h4>
                <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
                <p className="text-gray-700">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .timeline-container::before {
          content: '';
          position: absolute;
          left: 19px;
          width: 2px;
          height: 100%;
          background-color: #60a5fa;
        }
        .timeline-dot {
          position: absolute;
          left: 15px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #1e3a8a;
        }
        @media (min-width: 768px) {
          .timeline-container::before {
            left: 50%;
            transform: translateX(-50%);
          }
          .timeline-dot {
            left: 50%;
            transform: translateX(-50%);
          }
        }
        `
      }} />
    </section>
  );
};

export default Experience;
