import React, { useState } from 'react';
import './Team.scss';

import TeamCard from './component/TeamCard/TeamCard';
import yarema from '../../../../images/About/yarema.png';
import nataliya from '../../../../images/About/nataliya.png';
import teebu from '../../../../images/About/teebu.png';
import alison from '../../../../images/About/alison.png';
import kelth from '../../../../images/About/kelth.png';
import mariade from '../../../../images/About/mariade.png';
import jeff from '../../../../images/About/jeff.png';
import maria from '../../../../images/About/maria.png';
import konstantin from '../../../../images/About/konstantin.png';

const team = [
  { 
    id: 1,
    img: yarema,
    name: <h2 className="team__name">Yarema <br/>Kuzyshyn</h2>,
    position: 'President & Co-founder',
    bio: `Yarema Kuzyshyn has over 20 years in finance, management & accounting. Yarema holds a Master's degree in Accounting and Audit from Chernivtsi State University. His experience of hiring personnel over the course of his career inspired him to start Hireterra and bring new and effective alternatives and innovations to the recruitment process. He is putting diversity, privacy, and equal hiring opportunities at the forefront of successful recruitment. Talent acquisition is one of the essential activities for all companies. You obtain the most valued asset - employees. Join the Hireterra and make it a success story!`,
  },
  {
    id: 2,
    img: nataliya,
    name: <h2 className="team__name">Nataliya <br/>Añón</h2>,
    position: 'Co-founder',
    bio: `Nataliya Añón has over 20 years in finance, management & accounting. Yarema holds a Master's degree in Accounting and Audit from Chernivtsi State University. His experience of hiring personnel over the course of his career inspired him to start Hireterra and bring new and effective alternatives and innovations to the recruitment process. He is putting diversity, privacy, and equal hiring opportunities at the forefront of successful recruitment. Talent acquisition is one of the essential activities for all companies. You obtain the most valued asset - employees. Join the Hireterra and make it a success story!`,
  },
  {
    id: 3,
    img: konstantin,
    name: <h2 className="team__name">Kostyantyn <br/>Kharchenko</h2>,
    position: 'PH.D., Chief Technical Architect',
    bio: `Kostyantyn Kharchenko has over 20 years in finance, management & accounting. Yarema holds a Master's degree in Accounting and Audit from Chernivtsi State University. His experience of hiring personnel over the course of his career inspired him to start Hireterra and bring new and effective alternatives and innovations to the recruitment process. He is putting diversity, privacy, and equal hiring opportunities at the forefront of successful recruitment. Talent acquisition is one of the essential activities for all companies. You obtain the most valued asset - employees. Join the Hireterra and make it a success story!`,
  },
  {
    id: 4,
    img: jeff,
    name: <h2 className="team__name">Jeff <br/>Templeton</h2>,
    position: 'Recruiting Sales Manager',
    bio: `Jeff Templeton has over 20 years in finance, management & accounting. Yarema holds a Master's degree in Accounting and Audit from Chernivtsi State University. His experience of hiring personnel over the course of his career inspired him to start Hireterra and bring new and effective alternatives and innovations to the recruitment process. He is putting diversity, privacy, and equal hiring opportunities at the forefront of successful recruitment. Talent acquisition is one of the essential activities for all companies. You obtain the most valued asset - employees. Join the Hireterra and make it a success story!`,
  },
  {
    id: 5,
    img: kelth,
    name: <h2 className="team__name">Keith <br/>Liggett</h2>,
    position: 'VP, Customer Experience',
    bio: `Keith Liggett has over 20 years in finance, management & accounting. Yarema holds a Master's degree in Accounting and Audit from Chernivtsi State University. His experience of hiring personnel over the course of his career inspired him to start Hireterra and bring new and effective alternatives and innovations to the recruitment process. He is putting diversity, privacy, and equal hiring opportunities at the forefront of successful recruitment. Talent acquisition is one of the essential activities for all companies. You obtain the most valued asset - employees. Join the Hireterra and make it a success story!`,
  },
  {
    id: 6,
    img: teebu,
    name: <h2 className="team__name">Teebu <br/>Philip</h2>,
    position: 'Technical Architect',
    bio: `Teebu Philip has over 20 years in finance, management & accounting. Yarema holds a Master's degree in Accounting and Audit from Chernivtsi State University. His experience of hiring personnel over the course of his career inspired him to start Hireterra and bring new and effective alternatives and innovations to the recruitment process. He is putting diversity, privacy, and equal hiring opportunities at the forefront of successful recruitment. Talent acquisition is one of the essential activities for all companies. You obtain the most valued asset - employees. Join the Hireterra and make it a success story!`,
  },
  {
    id: 7,
    img: maria,
    name: <h2 className="team__name">Maria <br/>Venkova</h2>,
    position: 'Marketing Director',
    bio: `Maria Venkova has over 20 years in finance, management & accounting. Yarema holds a Master's degree in Accounting and Audit from Chernivtsi State University. His experience of hiring personnel over the course of his career inspired him to start Hireterra and bring new and effective alternatives and innovations to the recruitment process. He is putting diversity, privacy, and equal hiring opportunities at the forefront of successful recruitment. Talent acquisition is one of the essential activities for all companies. You obtain the most valued asset - employees. Join the Hireterra and make it a success story!`,
  },
  {
    id: 8,
    img: mariade,
    name: <h2 className="team__name">María de Lourdes <br/>Montes Félix</h2>,
    position: 'Paid and Organic Social Media Specialist',
    bio: `María de Lourdes Montes Félix has over 20 years in finance, management & accounting. Yarema holds a Master's degree in Accounting and Audit from Chernivtsi State University. His experience of hiring personnel over the course of his career inspired him to start Hireterra and bring new and effective alternatives and innovations to the recruitment process. He is putting diversity, privacy, and equal hiring opportunities at the forefront of successful recruitment. Talent acquisition is one of the essential activities for all companies. You obtain the most valued asset - employees. Join the Hireterra and make it a success story!`,
  },
  {
    id: 9,
    img: alison,
    name: <h2 className="team__name">Alison <br/>Meneses</h2>,
    position: 'Email Marketing Specialist',
    bio: `Alison Meneses has over 20 years in finance, management & accounting. Yarema holds a Master's degree in Accounting and Audit from Chernivtsi State University. His experience of hiring personnel over the course of his career inspired him to start Hireterra and bring new and effective alternatives and innovations to the recruitment process. He is putting diversity, privacy, and equal hiring opportunities at the forefront of successful recruitment. Talent acquisition is one of the essential activities for all companies. You obtain the most valued asset - employees. Join the Hireterra and make it a success story!`,
  },
]

const Team = () => {
  const [isBioOpen, setIsBioOpen] = useState(false);

  return (
    <div className="team">
      <h3 className="team__title">Meet Hireterra team</h3>
      <div className="team__wrapp">
        {
          team.map(item => (
            <TeamCard
              isBioOpen={isBioOpen}
              onBlockClick={(id) => {
                if (isBioOpen === id) {
                  setIsBioOpen(null)
                } else {
                  setIsBioOpen(id)
                }
              }}
              {...item}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Team