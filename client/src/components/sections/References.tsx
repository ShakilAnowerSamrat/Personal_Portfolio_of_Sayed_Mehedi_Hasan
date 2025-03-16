const References = () => {
  const references = [
    {
      name: "Dr. Mohammad Main Uddin",
      title: "Professor",
      department: "Department of Accounting & Information Systems",
      institution: "University of Rajshahi, Rajshahi-6205",
      phone: "+8801711227589"
    },
    {
      name: "Dr. Md. Sayaduzzaman",
      title: "Professor",
      department: "Department of Accounting & Information Systems",
      institution: "University of Rajshahi, Rajshahi-6205",
      phone: "+8801717743984"
    }
  ];

  return (
    <section id="references" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-primary">References</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4 mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Professional references who can vouch for my skills, experience, and character.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {references.map((reference, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-user-tie text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-['Inter'] text-primary">{reference.name}</h3>
                    <p className="text-blue-400 mb-2">{reference.title}</p>
                    <p className="text-gray-600 text-sm mb-1">{reference.department}</p>
                    <p className="text-gray-600 text-sm mb-4">{reference.institution}</p>
                    <div className="flex items-center">
                      <i className="fas fa-phone-alt text-gray-400 mr-2"></i>
                      <a href={`tel:${reference.phone}`} className="text-gray-600 hover:text-primary">{reference.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
