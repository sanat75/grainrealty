// src/components/Team.js
import React, { useState } from 'react';
import './Team.css';

// Sample team member data (you can replace with actual data)
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & CEO",
    photo: "/api/placeholder/300/300", // Replace with actual photo path
    description: "John has over 15 years of experience in real estate investment and strategic development."
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Chief Operations Officer",
    photo: "/api/placeholder/300/300", // Replace with actual photo path
    description: "Jane specializes in operational efficiency and portfolio management strategies."
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Senior Investment Analyst",
    photo: "/api/placeholder/300/300", // Replace with actual photo path
    description: "Mike brings deep market insights and analytical expertise to our investment decisions."
  }
];

const TeamMemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`team-card ${isFlipped ? 'flipped' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="team-card-inner">
        <div className="team-card-front">
          <img src={member.photo} alt={member.name} className="team-member-photo" />
          <div className="team-member-info">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        </div>
        <div className="team-card-back">
          <h3>{member.name}</h3>
          <p>{member.description}</p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;