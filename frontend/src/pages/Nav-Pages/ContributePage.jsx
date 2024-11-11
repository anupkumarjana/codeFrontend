// src/components/ContributePage.js
import React, { useState } from "react";
import contribution from "../../assets/rb_3866.png";

const ContributePage = () => {
  const [formData, setFormData] = useState({
    topic: "HTML",
    title: "",
    description: "",
    demoLink: "",
    difficulty: "Easy",
    authorName: "",
    authorLinkedIn: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Here you can handle form submission logic, like sending data to the backend.
  };

  return (
    <div className="flex  items-start justify-between  text-white p-10">
      <div className="flex flex-col gap-4 justify-start items-start">
        <h2 className="text-4xl font-bold">Contribute to the Community</h2>
        <h4 className="text-lg mb-8 max-w-xl text-start">
          Share your knowledge by contributing new frontend questions or
          improving existing ones! Your contributions help developers prepare
          better for their coding interviews.
        </h4>
        <img src={contribution} alt="" className="w-[80%]" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl p-8 rounded-lg shadow-lg bg-[#191919]"
      >
        {/* Topic Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="topic">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className="w-full p-2 rounded  text-white"
          >
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="Javascript">Javascript</option>
            <option value="React">React</option>
          </select>
        </div>

        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 rounded  text-white"
            placeholder="Enter the title"
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 rounded  text-white"
            rows="4"
            placeholder="Describe the problem or question"
          ></textarea>
        </div>

        {/* Demo GIF Link */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="demoLink">
            Demo Output GIF Link
          </label>
          <input
            id="demoLink"
            name="demoLink"
            type="url"
            value={formData.demoLink}
            onChange={handleChange}
            className="w-full p-2 rounded  text-white"
            placeholder="Enter the GIF link for the demo output"
          />
        </div>

        {/* Difficulty Dropdown */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="difficulty"
          >
            Difficulty Level
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full p-2 rounded  text-white"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Author Name */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="authorName"
          >
            Author Name
          </label>
          <input
            id="authorName"
            name="authorName"
            type="text"
            value={formData.authorName}
            onChange={handleChange}
            required
            className="w-full p-2 rounded  text-white"
            placeholder="Enter your name"
          />
        </div>

        {/* Author LinkedIn Link */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="authorLinkedIn"
          >
            Author LinkedIn Profile
          </label>
          <input
            id="authorLinkedIn"
            name="authorLinkedIn"
            type="url"
            value={formData.authorLinkedIn}
            onChange={handleChange}
            className="w-full p-2 rounded  text-white"
            placeholder="Enter your LinkedIn profile link"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Contribution
        </button>
      </form>
    </div>
  );
};

export default ContributePage;
