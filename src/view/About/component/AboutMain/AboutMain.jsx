import React from 'react';
import Frame from '../../../../components/Frame/Frame';
import Symbol from '../../../../ui/Symbol/Symbol';
import Title from '../../../../ui/Title/Title';
import './AboutMain.scss';

import round from '../../../../images/About/round.svg';
import diversity from '../../../../images/Recruiters/diversity.svg';
import Mission from '../../../../components/Mission/Mission';
import RecruitersSays from './component/RecruitersSays/RecruitersSays';
import RecruitersVideo from './component/RecruitersVideo/RecruitersVideo';


const AboutMain = () => {
  return (
    <div className="about-main">
      <div className="about-main__content">
        <Symbol />
        <div className="about-main__content-title">
          <Title>Hireterra, an anonymous IT jobs platform, benefits both recruiters and candidates.</Title>
        </div>
         <Frame left={<RecruitersSays />} right={<RecruitersVideo />}/>

         <div className="about-main__gradient">
           <h2 className="about-main__gradient-title">Our Mission</h2>
           <div className="about-main__wrapp">
              <Mission 
                title="Value to candidates and recruiters" 
                img={round} 
                descr="Recruiters save time and money by engaging with candidates who are truly open to new jobs. Candidates share their skills and experience anonymously while discreetly exploring new job opportunities. Only when there is mutual interest between a candidate and a recruiter, parties share their contact information to discuss the opportunity."
              />
              <Mission 
                title="Promote diversity in hiring" 
                img={diversity} 
                descr="We are dedicated to promoting diversity in hiring, as our model eliminates gender, age, or race biases and provides comfort to candidates who can now look for jobs discreetly. Large online job boards like LinkedIn, Indeed, ZipRecruiter make it easy for the recruiters to filter potential candidates, and often the filters are based not merely on merit. Hireterra is committed to fostering diversity in hiring by helping people be evaluated solely based on skills and experience, and allowing candidates to discreetly take control of the recruitment process."
              />
           </div>
         </div>
      </div>
    </div>
  )
}

export default AboutMain