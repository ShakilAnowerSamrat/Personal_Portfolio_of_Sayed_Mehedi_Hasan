const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/images/profile.png" 
                alt="Profile of Sayed Mehedi Hasan" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Inter'] mb-4 text-primary">
              Sayed Mehedi Hasan
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 font-medium font-['Inter'] mb-6">
              Accounting & Information Systems Specialist
            </p>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Passionate educator and management professional with expertise in accounting and information systems, dedicated to contributing innovative solutions and continuous learning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#about" className="px-6 py-3 bg-primary text-white rounded-md shadow hover:bg-blue-900 transition font-medium">
                Learn More
              </a>
              <a href="#contact" className="px-6 py-3 bg-white text-primary border border-primary rounded-md shadow hover:bg-gray-50 transition font-medium">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
