import React from 'react';
import './HowItWorks.scss';
import HowItWorksBlock from './HowItWorksBlock/HowItWorksBlock';

import postJob from '../../../../images/Recruiters/post-job.png';
import searchCandidates from '../../../../images/Recruiters/search-candidates.png';
import contactInfo from '../../../../images/Recruiters/contact-info.png';
import receiveNotifications from '../../../../images/Recruiters/receive-notifications.png';

const howWorks = [
  {
    img: postJob,
    background: {backgroundColor: '#FFE39C'},
    title: 'Post a job',
    subtitle: `After registering, complete fields of your job description and make sure to post it. Post as many jobs as you'd like, there is no limit or extra cost for posting jobs.`,
    isAdditionalClass: false,
    imgWidth: 400,
  },
  {
    img: searchCandidates,
    background: {backgroundColor: '#99D4FF'},
    title: 'Search for candidates',
    subtitle: `Source&select best-fit candidates on Hireterra and send them messages about job opportunities or send link(s) to your job posting(s).`,
    isAdditionalClass: true,
    imgWidth: 560,
  },
  {
    img: contactInfo,
    background: {backgroundColor: '#FFB83A'},
    title: 'Receive Notifications',
    subtitle: `The candidates can also proactively apply to your jobs on Hireterra. Or they can reply to you via messages. In any event, you won't miss the message, it will be both in your Hireterra inbox and the email you provided.`,
    isAdditionalClass: false,
    imgWidth: 595,
  },
  {
    img: receiveNotifications,
    background: {backgroundColor: '#0095FF'},
    title: `Get candidate's contact info`,
    subtitle: `Message candidates to see if there is mutual interest in the opportunity. Ask candidates to open their profiles. If the candidate is interested, they will open their contact information with the resume and LinkedIn profile. If the candidate is a match, take them through your recruiting process and send an offer on the platform. `,
    isAdditionalClass: true,
    accept: 'Then, just click "Confirm Hire" when the candidate accepts the position.',
    imgWidth: 620,
  },
]

const HowItWorks = () => {
  return (
    <div className="how-works">
      <h1 className="how-works__title">How it works</h1>

      <div className="how-works__wrapper">
         {
            howWorks.map(item => (
              <HowItWorksBlock
                {...item}
              />
            ))
          }
      </div>
    </div>
  )
}

export default HowItWorks