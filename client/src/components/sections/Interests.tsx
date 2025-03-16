const Interests = () => {
  const hobbies = [
    {
      icon: "fas fa-plane-departure",
      title: "Travelling",
      description: "Exploring new places and experiencing different cultures."
    },
    {
      icon: "fas fa-book-open",
      title: "Reading",
      description: "Diving into books on various subjects for knowledge and pleasure."
    },
    {
      icon: "fas fa-futbol",
      title: "Sports",
      description: "Participating in and following various sporting activities."
    },
    {
      icon: "fas fa-seedling",
      title: "Gardening",
      description: "Growing plants and creating beautiful green spaces."
    },
    {
      icon: "fas fa-pen-fancy",
      title: "Writing",
      description: "Expressing thoughts and ideas through creative writing."
    },
    {
      icon: "fas fa-camera",
      title: "Photography",
      description: "Capturing moments and scenes through the lens."
    },
    {
      icon: "fas fa-microphone",
      title: "Singing",
      description: "Enjoying music and practicing vocal performances."
    },
    {
      icon: "fas fa-mosque",
      title: "Religious Activities",
      description: "Serving as an Imam, delivering Azan, reciting, and commenting."
    }
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-primary">Hobbies & Interests</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4 mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Beyond my professional life, I pursue various interests that contribute to my personal growth and well-being.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className={`${hobby.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="font-semibold text-lg mb-2 font-['Inter']">{hobby.title}</h3>
                <p className="text-gray-600 text-sm">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
