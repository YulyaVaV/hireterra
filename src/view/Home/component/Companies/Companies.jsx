import React from 'react';
import './Companies.scss';
import Title from '../../../../ui/Title/Title';
import Opportunities from '../Opportunities/Opportunities';
import Symbol from '../../../../ui/Symbol/Symbol';
import CompaniesName from '../../../../components/CompaniesNames/CompaniesNames';

import { companies } from '../../../../constants/constants';

const Companies = () => {
  return (
    <section className="companies">
      <div className="companies__content">
        <hr className="companies__content-line"/>
        <div className="companies__companies">
          <CompaniesName data={companies} title="Work with"/>
        </div>
        <div className="companies__title">
          <Symbol />
          <Title>Your current employer and your personal details are not visible to recruiters until you decide to open your contact information on the platform. You control when and with who you share this
          information.</Title>
        </div>
        <Opportunities />
      </div>
    </section>
  )
}

export default Companies