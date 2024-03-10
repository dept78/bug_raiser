import React, { useState } from 'react';


const IssueForm = ({ screenshot })=> {
  const [issueType, setIssueType] = useState('');
  const [impact, setImpact] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [section, setSection] = useState('');
  const [subSection, setSubSection] = useState('');

  const handleIssueTypeChange = (event) => {
    setIssueType(event.target.value);
  };

  const handleImpactChange = (event) => {
    setImpact(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };

  const handleSubSectionChange = (event) => {
    setSubSection(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(issueType, impact, title, description, section, subSection);
    // Submit the form data here
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Issue Type</h2>
      <div>
        <input
          type="radio"
          id="bug"
          name="issueType"
          value="bug"
          checked={issueType === 'bug'}
          onChange={handleIssueTypeChange}
        />
        <label htmlFor="bug">Bug</label>
        <input
          type="radio"
          id="enhancement"
          name="issueType"
          value="enhancement"
          checked={issueType === 'enhancement'}
          onChange={handleIssueTypeChange}
        />
        <label htmlFor="enhancement">Enhancement</label>
      </div>

      <h2>Impact</h2>
      <select value={impact} onChange={handleImpactChange}>
        <option value="">Select Impact</option>
        <option value="Stops me from doing my work">Stops me from doing my work</option>
        {/* Add more impact options here */}
      </select>

      <h2>Title</h2>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="Enter title here" />

      <h2>Description</h2>
      <textarea value={description} onChange={handleDescriptionChange} placeholder="Enter description here" />

      <h2>Section</h2>
      <select value={section} onChange={handleSectionChange}>
        <option value="">Select Section</option>
        <option value="Loan">Loan</option>
        {/* Add more section options here */}
      </select>

      <h2>Sub-section</h2>
      <select value={subSection} onChange={handleSubSectionChange}>
        <option value="">Select Sub-section</option>
        <option value="Home Page">Home Page</option>
        {/* Add more sub-section options here */}
      </select>

      <button type="submit">Raise Ticket</button>
      <button type="button">Cancel</button>
    </form>
  );
};

export default IssueForm;


