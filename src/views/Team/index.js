import React, {useEffect, useState} from 'react';
import TeamMemberModal from 'src/components/TeamMemberModal';
import TeamMemberCard from 'src/components/TeamMemberCard';
import {getTeams} from "src/services/team/team";
import teamBgLeft from "../../assets/images/team-bg-left.svg";
import teamBgRight from "../../assets/images/team-bg-right.svg";
import '../../styles/pages/team.scss';

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        getTeams().then(res => {
            setTeamData(res.result.data)
        })
    }, [])


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
                {teamData && teamData.map((member, key) => (
                    <div className="team-member-card" onClick={() => handleCardClick(member)} key={key}>
                        <TeamMemberCard data={member} />
                    </div>
                ))}
            </div>
            <div className="team-section-bg-r">
                <img src={teamBgRight} alt='team bg right'/>
            </div>
            <div className="team-section-bg-l">
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