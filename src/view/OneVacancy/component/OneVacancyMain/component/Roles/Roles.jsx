import React from 'react';
import RolesLine from './component/RolesLine/RolesLine';
import './Roles.scss';

const rolesData = [
  {
    title: 'Total in Management',
    period: '10+ years',
    range: '',
    rangeWidth: 530,
  },
  {
    title: 'IT Project Manager',
    period: '10+ years',
    range: '',
    rangeWidth: 530,
  },
  {
    title: 'Program Manager',
    period: '6 years',
    range: '',
    rangeWidth: 380,
  },
  {
    title: 'Technical Program Manager',
    period: '10+ years',
    range: '',
    rangeWidth: 530,
  },
]

const Roles = () => {
  return (
    <div className="roles">
      <h2 className="candidates-card-title roles__title">Experience & Roles</h2>

      <div className="roles__wrapp">
        {
          rolesData.map(item => (
            <RolesLine {...item} />
          ))
        }
      </div>
    </div>
  )
}

export default Roles