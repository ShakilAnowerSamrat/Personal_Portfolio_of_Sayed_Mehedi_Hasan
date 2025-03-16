const Education = () => {
  const educationData = [
    {
      exam: "SSC",
      year: "2003",
      subject: "Science",
      grade: "3.06 / 5.00",
      board: "Jessore"
    },
    {
      exam: "HSC",
      year: "2005",
      subject: "Business Studies",
      grade: "4.50",
      board: "Jessore"
    },
    {
      exam: "B.B.A (Hon's)",
      year: "2010",
      subject: "Accounting & Information Systems",
      grade: "3.46",
      board: "Rajshahi University"
    },
    {
      exam: "M.B.A",
      year: "2011",
      subject: "Accounting & Information Systems",
      grade: "3.50",
      board: "Rajshahi University"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-['Inter'] text-primary">Educational Qualifications</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4 mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            My academic journey has equipped me with a strong foundation in business studies, particularly in Accounting and Information Systems.
          </p>
        </div>
        
        <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Exam
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Passing Year
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Group/Subject
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  GPA/Division
                </th>
                <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                  Board/University
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {educationData.map((edu, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {edu.exam}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {edu.year}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {edu.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {edu.grade}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {edu.board}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Education;
