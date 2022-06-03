import React, { useState } from 'react';
import './FaqRecruiters.scss';

import arrowDown from '../../../../images/arrow-down.svg'
import FaqRecruitersBlock from './component/FaqRecruitersBlock/FaqRecruitersBlock';

const faqRecruiters = [
  {
    title: 'How is Hireterra different from other job search tools?',
    descr: 'Hireterra has two main advantages. First, on Hireterra, 100% of candidates are looking forward to receiving new tech job opportunities. Second, all candidate profiles stay anonymous until they share personal details with you, which promotes racial, ethnic, and gender diversity in recruitment.',
    arrow: arrowDown,
    id: 1
  },
  {
    title: 'How is Hireterra different from other job search tools?',
    descr: 'Hireterra has two main advantages. First, on Hireterra, 100% of candidates are looking forward to receiving new tech job opportunities. Second, all candidate profiles stay anonymous until they share personal details with you, which promotes racial, ethnic, and gender diversity in recruitment.',
    arrow: arrowDown,
    id: 2
  },
  {
    title: 'How is Hireterra different from other job search tools?',
    descr: 'Hireterra has two main advantages. First, on Hireterra, 100% of candidates are looking forward to receiving new tech job opportunities. Second, all candidate profiles stay anonymous until they share personal details with you, which promotes racial, ethnic, and gender diversity in recruitment.',
    arrow: arrowDown,
    id: 3
  },
  {
    title: 'How is Hireterra different from other job search tools?',
    descr: 'Hireterra has two main advantages. First, on Hireterra, 100% of candidates are looking forward to receiving new tech job opportunities. Second, all candidate profiles stay anonymous until they share personal details with you, which promotes racial, ethnic, and gender diversity in recruitment.',
    arrow: arrowDown,
    id: 4
  },
  {
    title: 'How is Hireterra different from other job search tools?',
    descr: 'Hireterra has two main advantages. First, on Hireterra, 100% of candidates are looking forward to receiving new tech job opportunities. Second, all candidate profiles stay anonymous until they share personal details with you, which promotes racial, ethnic, and gender diversity in recruitment.',
    arrow: arrowDown,
    id: 5
  },
  {
    title: 'How is Hireterra different from other job search tools?',
    descr: 'Hireterra has two main advantages. First, on Hireterra, 100% of candidates are looking forward to receiving new tech job opportunities. Second, all candidate profiles stay anonymous until they share personal details with you, which promotes racial, ethnic, and gender diversity in recruitment.',
    arrow: arrowDown,
    id: 6
  },
]

const FaqRecruiters = () => {
  const [blockIdOpen, setBlockIdOpen] = useState(null);

  return (
    <div className="faq-recruiters">
      <h1 className="faq-recruiters__title">FAQ</h1>
      <div className="faq-recruiters__wrapper">
        {
          faqRecruiters.map(item => (
            <FaqRecruitersBlock
              isBlockOpen={blockIdOpen}
              onBlockClick={(id) => {
                if (blockIdOpen === id) {
                  setBlockIdOpen(null)
                } else {
                  setBlockIdOpen(id)
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

export default FaqRecruiters