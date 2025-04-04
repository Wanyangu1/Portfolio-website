//import React from 'react'

const Resume = () => {
  return (
    
  

<div className="h-full page-shadow p-6">
  <section className="education mb-6">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Education</h2>
    <div className="space-y-4">
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-bold text-gray-700">Kisii University</h3>
        <p className="text-sm text-gray-500"> Bachelor of Science in Information Technology <b><i>(Second Upper)</i></b>
        (2020 - 2024)</p>
        <p className="text-gray-600 mt-2">
          Focused on network support and software development, with a strong foundation in web technologies, software engineering, and system management.
        </p>
      </div>
      
    </div>
  </section>

  
  <section className="work-experience">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Work Experience</h2>
    <div className="space-y-4">
      
      <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold text-gray-700">
        Software Developer - <a href="https://aiaa-kenya.org/" className="text-primary">AIAA-NGO</a>
      </h3>
        <p className="text-sm text-gray-500">May 2024 - Till Date</p>
        <p className="text-gray-600 mt-2">
        Developed custom software solutions, integrating AI components into 
        enterprise systems.<br/>
        Contributed to developing the Agri-pulse system, a Kenyan solution aimed at 
        transforming the agricultural value chain.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-bold text-gray-700">ICT Support - <a href="#">County Government of Trans-Nzoia</a></h3>
        <p className="text-sm text-gray-500">May 2023 - September 2023</p>
        <p className="text-gray-600 mt-2">
        Gained experience in hardware and software maintenance, including 
        preventive procedures and network maintenance,
        Enhanced skills in technical troubleshooting, system administration, and 
        teamwork.
        </p>
      </div>

      
    </div>
  </section>
</div>
)
}

export default Resume