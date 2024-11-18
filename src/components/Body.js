import React, { useEffect, useState } from 'react';

const Body = () => {
  const [formData, setFormData] = useState({ name: "", age: 0, file: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
      >
        {/* Header Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://png.pngtree.com/template/20190422/ourmid/pngtree-cross-plus-medical-logo-icon-design-template-image_145195.jpg"
            alt="Health App"
            className="mb-3 w-20"
          />
          <h2 className="text-3xl font-extrabold text-center text-green-700">
            Your Health Matters
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Fill in your details to stay connected with your healthcare.
          </p>
        </div>

        {/* Name Field */}
        <div className="relative mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
          />
        </div>

        {/* Age Field */}
        <div className="relative mb-6">
          <label
            htmlFor="age"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
            min="0"
            max="100"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
          />
        </div>

        {/* File Upload Field */}
        <div className="relative mb-6">
          <label
            htmlFor="file"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Medical Report (PDF/Word)
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            required
            accept=".pdf, .doc, .docx"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-green-700 rounded-lg shadow-md hover:shadow-xl hover:from-green-600 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Body;
