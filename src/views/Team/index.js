import React, { useState } from 'react';
import TeamMemberModal from 'src/components/TeamMemberModal';
import TeamMemberCard from 'src/components/TeamMemberCard';
import { teamData } from 'src/config/teamData';
import teamBgLeft from "../../assets/images/team-bg-left.svg";
import teamBgRight from "../../assets/images/team-bg-right.svg";
import '../../styles/pages/team.scss';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = member => {
    document.body.classList.add('modal-open');
    setSelectedMember(member);
  };

  const closeModal = () => {
    document.body.classList.remove('modal-open');
    setSelectedMember(null);
  };

  return (
    <section className="core-team-section color-white">
      <h1 className="fs-h1 section-title">Core Team</h1>
      <div className="team-members-container">
        {teamData.map(member => (
          <div className="team-member-card" onClick={() => handleCardClick(member)} key={member.name}>
            <TeamMemberCard {...member} />
          </div>
        ))}
      </div>
      <div class="team-section-bg-r">
        <img src={teamBgRight} alt='team bg right'/>
      </div>
      <div class="team-section-bg-l">
        <img src={teamBgLeft} alt='team bg left'/>
      </div>
      <TeamMemberModal
        isOpen={!!selectedMember}
        onClose={closeModal}
        member={selectedMember || {}}
      />
    </section>
  );
};

export default Team;