// Jobs.jsx
import React, { useState } from 'react';

const jobList = [
  {
    id: 1,
    title: 'React Developer',
    location: 'Hyderabad, India',
    description: 'We are looking for a skilled React Developer to build engaging interfaces and collaborate with our UI/UX and backend teams.',
  },
  {
    id: 2,
    title: 'Digital Marketing Executive',
    location: 'Remote',
    description: 'Join our marketing team to strategize and execute digital campaigns for our global clients.',
  }
];

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', resume: null });

  const handleApply = (job) => setSelectedJob(job);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Application submitted for ${selectedJob.title}`);
    // Logic to send resume and details to your backend or Google Sheets goes here
    setSelectedJob(null);
    setFormData({ name: '', email: '', resume: null });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16 md:px-20 mt-[70px]">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-10">Current Openings</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {jobList.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{job.title}</h2>
            <p className="text-sm text-gray-500 mb-4">Location: {job.location}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => handleApply(job)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Resume Submission */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-xl max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setSelectedJob(null)}
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4 text-blue-800">Apply for {selectedJob.title}</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-2 mb-4 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-2 mb-4 rounded"
              />
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full border p-2 mb-4 rounded"
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
