import React from "react";
import "./QualificationPage.css";

const QualificationPage = () => {
  
  const qualifications = [
    
    {
      type: "Education",
      details: [
        {
          title: "Masters of Computer Application (MCA)",
          year: "2023 - 2025",
          institution: "Calcutta Institute of Technology",
          location: "Uluberiya, Howrah - 711316",
          grade: "CGPA: Appearing",
        },
        {
          title: "Bachelors of Computer Application (BCA)",
          year: "2020 - 2023",
          institution: "Panskura Banamali College (Autonomous)",
          location: "Panskura, Purba Medinipur - 721152",
          grade: "CGPA: 8.65",
        },
        {
          title: "Higher Secondary (HS)",
          year: "2020",
          institution: "Sabang Saradamoyee H.S School",
          location: "Sabang, Paschim Medinipur - 721144",
          grade: "Percentage: 85%",
        },
        {
          title: "Secondary Examination",
          year: "2018",
          institution: "Kundalpal Kiranbala Vidyamondir",
          location: "Kundalpal, Sabang, Paschim Medinipur - 721140",
          grade: "Percentage: 63.33%",
        },
      ],
    },
  ];

  return (
   
    <div className="qualification-page"  id ='qualification'>
      <h1 className="title">QUALIFICATION</h1>
      {qualifications.map((section, index) => (
        <div key={index} className="qualification-section">
          <h2 className="section-title">{section.type}</h2>
          <ul className="qualification-list">
            {section.details.map((item, idx) => (
              <li key={idx} className="qualification-item">
                <h3>{item.title}</h3>
                <p className="year">{item.year}</p>
                <p className="institution">{item.institution}</p>
                <p className="location">{item.location}</p>
                <p className="grade">{item.grade}</p>
              </li>
            ))}
          </ul>
        </div>
        
      ))}
    </div>
    

  )
}

export default QualificationPage
