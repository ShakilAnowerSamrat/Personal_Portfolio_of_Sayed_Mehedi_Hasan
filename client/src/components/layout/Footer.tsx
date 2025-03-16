const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-['Inter'] mb-2">Sayed Mehedi Hasan</h2>
            <p className="text-blue-200">Accounting & Information Systems Specialist</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-4">&copy; {currentYear} All Rights Reserved</p>
            <div className="flex space-x-4">
              <a href="#home" className="text-blue-200 hover:text-white transition">Home</a>
              <a href="#about" className="text-blue-200 hover:text-white transition">About</a>
              <a href="#contact" className="text-blue-200 hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
