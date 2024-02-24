import React, { useState } from "react";

const StudentRegistrationForm = () => {
  //Manage the input state
  const [studentName, setStudentName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("science");
  const [consent, setConsent] = useState("");
  //Handle Change
  const handleNameChange = (e) => {
    setStudentName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };
  const handleConsentChange = (e) => {
    setConsent(e.target.value);
  };
  //Handle submit
  const handleSubmit = (e) => {
    //Prevent browser default
    e.preventDefault();
    console.log({
      studentName,
      age,
      consent,
      course,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration Form</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={studentName} onChange={handleNameChange} />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <label>Course:</label>
        <select value={course} onChange={handleCourseChange}>
          <option value="Science">Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Bilogy">Bilogy</option>
        </select>
      </div>
      <div>
        <label>Consent:</label>
        <input
          type="checkbox"
          checked={consent}
          onChange={handleConsentChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default StudentRegistrationForm;
