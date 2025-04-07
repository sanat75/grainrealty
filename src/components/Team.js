// src/components/Team.js
import React from 'react';
import './Team.css';
import harsh from '../assets/harsh.jpg';
import chan from '../assets/chand.jpg';
import sat from '../assets/sat.jpg';
import yuri from '../assets/yuri.jpg';

// Team member data with 4 members
const teamMembers = [
  {
    id: 1,
    name: "Satinder Singh",
    role: "Principal Investor",
    photo: sat,
    description: "Satinder brings deep market insights and analytical expertise to our investment decisions."
  },
  {
    id: 2,
    name: "Yuri Levin",
    role: "Principal Investor",
    photo: yuri,
    description: "Yuri leads our property acquisition team with over a decade of experience in identifying high-value investment opportunities."
  },
  {
    id: 3,
    name: "Chandeep Singh",
    role: "Principal Investor",
    photo: chan,
    description: "Chandeep specializes in operational efficiency and portfolio management strategies."
  },
  {
    id: 4,
    name: "Harshdeep Singh",
    role: "Principal Investor",
    photo: harsh,
    description: "Harsh has over 15 years of experience in real estate investment and strategic development."
  }
  
];

const TeamMemberCard = ({ member }) => {
  return (
    <div className="team-card">
      <img
        src={member.photo}
        alt={member.name}
        className="team-member-photo"
      />
      <div className="team-member-info">
        <h3>{member.name}</h3>
        <p className="member-role">{member.role}</p>
        {/* <p className="member-description">{member.description}</p> */}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="team-container">
        <div className="team-row">
          {teamMembers.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;