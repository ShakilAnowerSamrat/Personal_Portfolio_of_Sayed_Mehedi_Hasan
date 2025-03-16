const Skills = () => {
  const technicalSkills = [
    { name: "MS Word", percentage: 90 },
    { name: "MS Excel", percentage: 85 },
    { name: "MS PowerPoint", percentage: 88 },
    { name: "Hardware & Networking", percentage: 75 },
    { name: "Internet Browsing", percentage: 95 }
  ];

  const languageSkills = [
    {
      language: "Bengali",
      skills: [
        { name: "Speaking", level: 5 },
        { name: "Writing", level: 5 },
        { name: "Reading", level: 5 },
        { name: "Listening", level: 5 }
      ]
    },
    {
      language: "English",
      skills: [
        { name: "Speaking", level: 4 },
        { name: "Writing", level: 4 },
        { name: "Reading", level: 5 },
        { name: "Listening", level: 4 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-primary">Skills & Competencies</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4 mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            I have developed various technical and soft skills that enable me to excel in professional environments.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                  <i className="fas fa-laptop-code text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold font-['Inter'] text-primary">Technical Skills</h3>
              </div>
              
              <div className="space-y-4">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-400 rounded-full h-2" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Language Skills */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mr-4">
                  <i className="fas fa-language text-primary text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold font-['Inter'] text-primary">Language Skills</h3>
              </div>
              
              <div className="space-y-8">
                {languageSkills.map((language, langIndex) => (
                  <div key={langIndex}>
                    <h4 className="font-medium mb-4">{language.language}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {language.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <p className="text-sm text-gray-600 mb-1">{skill.name}</p>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span 
                                key={i} 
                                className={`w-8 h-2 ${i < skill.level ? 'bg-blue-400' : 'bg-gray-200'} rounded-full`}
                              ></span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
