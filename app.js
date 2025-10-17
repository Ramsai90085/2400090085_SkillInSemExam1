import React, { useState, useEffect } from "react";
import "./StudentInfo.css"; // Import CSS for styling

const StudentInfo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect window resize and update layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sample student data
  const student = {
    name: "Ram Sai",
    age: 20,
    course: "Computer Science",
    email: "ramsai@example.com",
  };

  return (
    <div className={`student-container ${isMobile ? "vertical" : "horizontal"}`}>
      <div className="student-card">
        <h2>{student.name}</h2>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Email:</strong> {student.email}</p>
      </div>
    </div>
  );
};

export default StudentInfo;
.student-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
}

.student-card {
  border: 2px solid #4a90e2;
  border-radius: 12px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 300px;
}

/* Horizontal layout for desktop */
.horizontal {
  flex-direction: row;
  gap: 30px;
}

/* Vertical layout for mobile */
.vertical {
  flex-direction: column;
  gap: 15px;
}

/* Text styling */
.student-card h2 {
  color: #333;
  margin-bottom: 10px;
}

.student-card p {
  margin: 5px 0;
  color: #555;
  font-size: 16px;
}

/* Hover effect */
.student-card:hover {
  background-color: #eaf3ff;
  transform: scale(1.02);
}

/* Responsive tweak for small screens */
@media (max-width: 768px) {
  .student-card {
    width: 90%;
  }
}
import React from "react";
import StudentInfo from "./StudentInfo";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        E-Commerce Student Info
      </h1>
      <StudentInfo />
    </div>
  );
}

export default App;
